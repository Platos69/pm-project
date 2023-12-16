// CARREGANDO MODULOS
    // Modulos principais
    const express = require('express')
    const handlebars = require('express-handlebars')
    const app = express()
    const { engine } = require('express-handlebars')
    const path = require("path")
    const bodyParser = require('body-parser')
    const mongoose = require('mongoose')
    const uri = 'mongodb+srv://Pm_Project:Dan%402905@pmproject.niy0xfw.mongodb.net/?retryWrites=true&w=majority'
    const http = require('http');
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
        //Mongoose
         // Mongoose
         async function connect() {
            try {
                await mongoose.connect(uri)
                console.log('[PM] Conexão com o banco efetuada com sucesso')
            } catch (err) {
                console.log('[PM] Falha ao tentar se conectar ao banco, error: ' + err)               
            }
        }
        
        connect()
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
                    console.error(`[PM] Houve um erro ao renderizar a página "${pageName}" erro:`, err);
                    res.status(500).send('Erro interno do servidor');
                    return;
                  }
                  console.log(`[PM] Você entrou na aba "${pageName}"`);
                  res.send(html);
                });
              } catch (err) {
                console.error(`[PM] Houve um erro ao entrar na página "${pageName}", erro:`, err);
                res.status(500).send('Erro interno do servidor');
          }
        });
    
    // User
    app.use('/user', user)


// OUTROS
const PORT = 8081
app.listen(PORT, () => {
    console.log(`[PM] Servidor rodando na porta http://localhost:${PORT}`)
})

// const server = http.createServer(app);
// const portReplit = process.env.PORT || 8081;

// server.listen(portReplit, () => {
//     console.log(`Servidor rodando na ${PORT}`);
//     console.log(`Replit view: https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co/`);
// });