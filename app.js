// CARREGANDO MODULOS
    // Modulos principais
    const express = require('express')
    const handlebars = require('express-handlebars')
    const app = express()
    const { engine } = require('express-handlebars')
    const path = require("path")
    const bodyParser = require('body-parser')
    const mongoose = require('mongoose')
    const session = require('express-session')
    const flash = require('connect-flash')
    // Definição de rotas
    const user = require('./routes/user.js')  

// CONFIGURAÇÕES
    // Sessão
    app.use(session({
        secret: '32140921401347104170on',
        resave: true,
        saveUninitialized: false}))
    app.use(flash())
    // Global var
    app.use((req, res, next) => {
        res.locals.success_msg = req.flash('success_msg')
        res.locals.error_msg = req.flash('error_msg')
        next()
    })
    // Body-Parser
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    // Handlebars
    app.engine('handlebars', engine({defaultLayout: 'main', runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
        },
    }),
    ),
    app.set('view engine', 'handlebars')
        // Mongoose
        mongoose.Promise = global.Promise
        mongoose.connect('mongodb://127.0.0.1:27017/pmProject').then(() => {
            console.log('[BLOGAPP] Conectado ao banco com sucesso!')
        }).catch((err) => {
            console.log(`[BLOGAPP] Erro ao conectar no Banco!\n Erro: ${err}`)
        })
    //Public
    app.use(express.static(path.join(__dirname + "/public")))

// ROTAS
    // Home
    app.get('/', (req, res) => {
        try {
            const pageName = 'Home'
            res.render('index', {
                title: pageName +' - Page',
                style: 'home.css',
                showNavbar: true
            }, (err, html) => {
              if (err) {
                console.error('[PM] Houve um erro ao renderizar a página "', pageName ,'", erro:', err);
                res.status(500).send('Erro interno do servidor');
                return;
              }
              console.log('[PM] Você entrou na aba "', pageName ,'"');
              res.send(html);
            });
          } catch (err) {
            console.error('[PM] Houve um erro ao entrar na página "', pageName ,'", erro:', err);
            res.status(500).send('Erro interno do servidor');
          }
        });
    
    // User
    app.use('/user', user)


// OUTROS
const PORT = 8081
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})