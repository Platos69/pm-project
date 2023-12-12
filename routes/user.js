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
    // Renderização padrão
    function renderPageGeral(req, res, pageName, templateName) {
      try {
        res.render(`user/pages/sub-pages/${templateName}`, {
          title: `${pageName} - Page`,
          style: 'areasKnowledge.css',
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
    }
      // Áreas do conhecimento 
      router.get('/knowledge-areas', (req, res) => {
        try {
          const pageName = 'Áreas do conhecimento';
          res.render('user/areas', { knowledgeAreas, title: `${pageName} - Page`, style: 'areasKnowledge.css', showNavbar: true });
        } catch (err) {
          console.error(`[PM] Houve um erro ao entrar na página "${pageName}", erro:`, err);
          res.status(500).send('Erro interno do servidor');
        }
      });
        // Rotas para páginas específicas
        knowledgeAreas.forEach(area => {
          const { name, url } = area;
          router.get(url, (req, res) => {
            renderPageGeral(req, res, name, name.toLowerCase());
          });
        });
          // Pages
            
            // Sub-pages
            
module.exports = router