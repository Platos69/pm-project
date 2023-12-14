// CARREGANDO MÓDULOS
    // Módulos principais
    const express = require('express')
    const router = express.Router()
    const path = require('path')
    const app = express()
    const handlebars = require('express-handlebars')
    const { engine } = require('express-handlebars')

// CONFIGURAÇÕES
  // Handlebars
  app.engine('handlebars', engine({defaultLayout: 'main', runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
    },
  }),
  ),
  app.set('view engine', 'handlebars')
  // Automatizando link automatico
    // Areas  
    const knowledgeAreas = [
      { name: 'Matemática e suas tecnologias', url: '/user/knowledge-areas/math' },
      { name: 'Ciências humanas e sociais aplicadas', url: '/user/knowledge-areas/humans' },
      { name: 'Ciências da natureza e suas tecnologias', url: '/user/knowledge-areas/nature' },
      { name: 'Linguagens e suas tecnologias', url: '/user/knowledge-areas/languages' }
    ];

    // Sub-areas
      // Humans
      const knowledgeHumans = [
        { name: 'Geografia', url: '/user/knowledge-areas/humans/geography' },
        { name: 'História', url: '/user/knowledge-areas/humans/history' },
        { name: 'Filosofia', url: '/user/knowledge-areas/humans/philosophy' },
        { name: 'Sociologia', url: '/user/knowledge-areas/humans/sociology' }
      ]
      // Languages
      const knowledgeLanguages = [
        { name: 'Artes', url: '/user/knowledge-areas/languages/art' },
        { name: 'Redação', url: '/user/knowledge-areas/languages/essay' },
        { name: 'Literatura', url: '/user/knowledge-areas/languages/literature' },
        { name: 'Português', url: '/user/knowledge-areas/languages/portuguese' }
      ]
      // Nature
      const knowledgeNature = [
        { name: 'Biologia', url: '/user/knowledge-areas/nature/biology'},
        { name: 'Química', url: '/user/knowledge-areas/nature/chemical'},
        { name: 'Física', url: '/user/knowledge-areas/nature/physical'}
      ]

// ROTAS
// function MainArea(url, directoryRender, areas, pageName, directoryStyle, optionNav) {
//   router.get(url, (req, res) => {
//     try {
//       res.render(directoryRender, { areas, 
//         title: `${pageName} - Page`,
//         style: directoryStyle || 'areas-knowledge.css',
//         showNavbar: optionNav || true });
//     } catch (err) {
//       console.error(`[PM] Houve um erro ao entrar na página "${pageName}", erro:`, err);
//       res.status(500).send('Erro interno do servidor');
//     }
//   });
// }
  // Áreas do conhecimento 
  router.get('/knowledge-areas', (req, res) => {
    try {
      const pageName = 'Áreas do conhecimento';
      res.render('user/areas', { knowledgeAreas, 
        title: `${pageName} - Page`,
        style: 'areas-knowledge.css',
        showNavbar: true });
        
    } catch (err) {
      console.error(`[PM] Houve um erro ao entrar na página "${pageName}", erro:`, err);
      res.status(500).send('Erro interno do servidor');
    }
  });
      // Pages
        // Humanas
        router.get('/knowledge-areas/humans', (req, res) => {
          try {
            const pageName = 'Ciências humanas e Sociais aplicadas';
            res.render('user/pages/humans', { knowledgeHumans, 
              title: `${pageName} - Page`,
              style: '../../css/areas-knowledge.css',
              showNavbar: true });

          } catch (err) {
            console.error(`[PM] Houve um erro ao entrar na página "${pageName}", erro:`, err);
            res.status(500).send('Erro interno do servidor');
          }
        });

      // Languages
      router.get('/knowledge-areas/languages', (req, res) => {
        try {
          const pageName = 'Linguagens e suas tecnologias';
          res.render('user/pages/languages', { knowledgeLanguages, 
            title: `${pageName} - Page`,
            style: '../../css/areas-knowledge.css',
            showNavbar: true });

        } catch (err) {
          console.error(`[PM] Houve um erro ao entrar na página "${pageName}", erro:`, err);
          res.status(500).send('Erro interno do servidor');
        }
      });

      // Natureza
      router.get('/knowledge-areas/nature', (req, res) => {
        try {
          const pageName = 'Ciências da natureza e suas tecnologias';
          res.render('user/pages/nature', { knowledgeNature, 
            title: `${pageName} - Page`,
            style: '../../css/areas-knowledge.css',
            showNavbar: true });

        } catch (err) {
          console.error(`[PM] Houve um erro ao entrar na página "${pageName}", erro:`, err);
          res.status(500).send('Erro interno do servidor');
        }
      });

      // Matemática
      router.get('/knowledge-areas/math', (req, res) => {
        try {
          const pageName = 'Matemática';
          res.render('user/pages/math', { 
            title: `${pageName} - Page`,
            style: '../../css/areas-knowledge.css',
            showNavbar: true });
            
        } catch (err) {
          console.error(`[PM] Houve um erro ao entrar na página "${pageName}", erro:`, err);
          res.status(500).send('Erro interno do servidor');
        }
      });
        // Sub-pages

        //FALTA ISSO PARA FINALIZAÇÃO DOS DADOS LOCAIS//
            
module.exports = router