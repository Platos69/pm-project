// CARREGANDO MODULOS
    // Modulos principais
    const express = require('express')
    const handlebars = require('express-handlebars')
    const app = express()
    const { engine } = require('express-handlebars')
    const path = require("path")
    // Definição de rotas
    const user = require('./routes/user.js')  

// CONFIGURAÇÕES
    // Handlebars
    app.engine('handlebars', engine({defaultLayout: 'main', runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
        },
    }),
    ),
    app.set('view engine', 'handlebars')
    //Public
    app.use(express.static(path.join(__dirname + "/public")))

// ROTAS
    // 404
    app.get('/404', (req, res) => {
        res.send('Erro 404!')
    })

    // Home
    app.get('/', (req, res) => {
        try {
            res.render('index', {
                title: 'Home Page',
                style: 'home.css',
                showNavbar: true
            }, (err, html) => {
              if (err) {
                console.error('[PM] Houve um erro ao renderizar a página "Home", erro:', err);
                res.status(500).send('Erro interno do servidor');
                return;
              }
              console.log('[PM] Você entrou na aba "Home"');
              res.send(html);
            });
          } catch (err) {
            console.error('[PM] Houve um erro ao entrar na página "Home", erro:', err);
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