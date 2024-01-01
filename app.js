// CARREGANDO MODULOS
    // Modulos principais
    const express = require('express')
    const Handlebars = require('handlebars');
    const {
        allowInsecurePrototypeAccess,
    } = require("@handlebars/allow-prototype-access");
    const exphbs = require('express-handlebars');
    const app = express()
    const path = require('path')
    const bodyParser = require('body-parser')
    const mongoose = require('mongoose')
    const http = require('http');
    const session = require('express-session')
    const flash = require('connect-flash')
    // Definição de rotas
    const user = require('./routes/user.js')  
    const manager = require('./routes/manager.js')  

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
    const hbs = exphbs.create({
        defaultLayout: "main",
        extname: "handlebars",
        handlebars: allowInsecurePrototypeAccess(Handlebars),
    });
    
    app.engine("handlebars", hbs.engine);
    app.set("view engine", "handlebars");
    app.set("views", "views");
         // Mongoose
         const uri = 'mongodb://localhost:27017/PmProject'
        // const uri = 'mongodb+srv://Pm_Project:Dan%402905@pmproject.niy0xfw.mongodb.net/?retryWrites=true&w=majority'
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
                title: `${pageName} - Page`,
                style: 'home.css',
                showNavbar: true,
            }, (err, html) => {
                if (err) {
                    req.flash('error_msg', '[INTERNAL ERROR] Erro ao renderizar a página ', pageName, '! Error: ' + err);
                    res.redirect('/'); 
                    return;
                }
                res.send(html);
            });
        } catch (err) {
            req.flash('error_msg', '[INTERNAL ERROR] Erro ao entrar na página ', pageName, '! Error: ' + err);
            res.redirect('/'); 
        }
    });
    // User
    app.use('/user', user)
    app.use('/manager', manager)

// OUTROS
const PORT = 8082
app.listen(PORT, () => {
    console.log(`[PM] Servidor rodando na porta http://localhost:${PORT}`)
})

// const server = http.createServer(app);
// const portReplit = process.env.PORT || 8081;

// server.listen(portReplit, () => {
//     console.log(`Servidor rodando na ${PORT}`);
//     console.log(`Replit view: https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co/`);
// });