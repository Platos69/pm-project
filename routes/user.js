// CARREGANDO MÓDULOS
    // Módulos principais
    const express = require('express')
    const user = express.Router()
    const mongoose = require('mongoose')
    const handlebars = require('express-handlebars')  
    // Exportando modelos
      // Humanas
        // História
        require('../models/knowledge-areas/humans/History.js');
        const history = mongoose.model('History');
        // Geografia
        require('../models/knowledge-areas/humans/Geography.js');
        const geography = mongoose.model('Geography');
        // Filosofia
        require('../models/knowledge-areas/humans/Philosophy.js');
        const philosophy = mongoose.model('Philosophy');
        // Sociologia
        require('../models/knowledge-areas/humans/Sociology.js');
        const sociology = mongoose.model('Sociology');
      // Linguagens
        // Artes
        require('../models/knowledge-areas/languages/Art.js');
        const art = mongoose.model('Art');
        // Redação
        require('../models/knowledge-areas/languages/Essay.js');
        const essay = mongoose.model('Essay');
        // Literature
        require('../models/knowledge-areas/languages/Literature.js');
        const literature = mongoose.model('Literature');
        // Português
        require('../models/knowledge-areas/languages/Portuguese.js');
        const portuguese = mongoose.model('Portuguese');
      // Natureza
        // Biologia
        require('../models/knowledge-areas/nature/Biology.js');
        const biology = mongoose.model('Biology');
        // Química
        require('../models/knowledge-areas/nature/Chemical.js');
        const chemical = mongoose.model('Chemical');
        // Física
        require('../models/knowledge-areas/nature/Physical.js');
        const physical = mongoose.model('Physical');  
      // Matemática
        require('../models/knowledge-areas/Math.js')
        const math = mongoose.model('Math');

// CONFIGURAÇÕES
  // Carregando modulos
  const models = {
    // Humans
    Geography: require('../models/knowledge-areas/humans/Geography'),
    History: require('../models/knowledge-areas/humans/History'),
    Philosophy: require('../models/knowledge-areas/humans/Philosophy'),
    Sociology: require('../models/knowledge-areas/humans/Sociology'),
    // Languages
    Art: require('../models/knowledge-areas/languages/Art'),
    Essay: require('../models/knowledge-areas/languages/Essay'),
    Literature: require('../models/knowledge-areas/languages/Literature'),
    Portuguese: require('../models/knowledge-areas/languages/Portuguese'),
    // Nature
    Biology: require('../models/knowledge-areas/nature/Biology'),
    Chemical: require('../models/knowledge-areas/nature/Chemical'),
    Physical: require('../models/knowledge-areas/nature/Physical'),
    // Math
    Math: require('../models/knowledge-areas/Math')
};
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
  // Páginas das áreas do conhecimento
  function renderMainPage(url, directoryRender, pageName, areas, directoryStyle, optionNav) {
    user.get(url, (req, res) => {
      try {
        const msgSuccess = 'Você está na página: ' + pageName
        res.render(directoryRender, {
          name: pageName,
          title: `${pageName} - Page`,
          areas: areas || false, 
          style: directoryStyle || '../../main-knowledge/css/main-knowledge.css',
          showNavbar: optionNav || true,
          success_msg: msgSuccess });
      } catch (err) {
        console.error(`[PM] Houve um erro ao entrar na página "${pageName}", erro:`, err);
        res.status(500).send('Erro interno do servidor');
      }
    });
  }
    // Áreas do conhecimento 
    renderMainPage(
      '/knowledge-areas',
      'user/areas',
      'Áreas do conhecimento',
      knowledgeAreas,
      '../main-knowledge/css/main-knowledge.css'
  );
      // Pages
        // Humanas
        renderMainPage(
          '/knowledge-areas/humans',
          'user/pages/humans',
          'Ciências humanas e sociais aplicadas',
          knowledgeHumans
        );

        // Linguagens
        renderMainPage(
          '/knowledge-areas/languages',
          'user/pages/languages',
          'Linguagens e suas tecnologias',
          knowledgeLanguages
        );

        // Natureza
        renderMainPage(
          '/knowledge-areas/nature',
          'user/pages/nature',
          'Ciências da natureza e suas tecnologias',
          knowledgeNature
        );
          // Sub-pages
          function renderSubPages(url, directoryRender, pageName, findVariableByName, findVariableForDB, directoryStyle, optionNav) {
            user.get(url, async (req, res) => {
              try {
                const msgSuccess = 'Você está na página: ' + pageName;
          
                // Corrigindo o uso da função find
                const content = await models[findVariableForDB].find().sort({ data: 'desc' });
          
                res.render(directoryRender, {
                  name: pageName,
                  title: `${pageName} - Page`,
                  content,
                  style: directoryStyle || '../../main-knowledge/sub-knowledge/css/sub-knowledge.css',
                  showNavbar: optionNav || true,
                  success_msg: msgSuccess,
                });
              } catch (err) {
                console.error(`[PM] Houve um erro ao entrar na página "${pageName}", erro:`, err);
                res.status(500).send('Erro interno do servidor');
              }
            });
          }
            // Humanas
              // Historia
              renderSubPages(
                '/knowledge-areas/humans/history',
                'user/pages/sub-pages/humans/history',
                'História',
                'history',
                'History'
              )
              // Geografia
              renderSubPages(
                '/knowledge-areas/humans/geography',
                'user/pages/sub-pages/humans/geography',
                'Geografia',
                'geography',
                'Geography'
              )
              // Filosofia
              renderSubPages(
                '/knowledge-areas/humans/philosophy',
                'user/pages/sub-pages/humans/philosophy',
                'Filosofia',
                'philosophy',
                'Philosophy',
              )
              // Sociologia
              renderSubPages(
                '/knowledge-areas/humans/sociology',
                'user/pages/sub-pages/humans/sociology',
                'Sociologia',
                'sociology',
                'Sociology',
              )
              
          // Linguagens
            // Artes
            renderSubPages(
              '/knowledge-areas/languages/art',
              'user/pages/sub-pages/languages/art',
              'Artes',
              'art',
              'Art'
            );

            // Redação
            renderSubPages(
              '/knowledge-areas/languages/essay',
              'user/pages/sub-pages/languages/essay',
              'Redação',
              'essay',
              'Essay'
            );

            // Literatura
            renderSubPages(
              '/knowledge-areas/languages/literature',
              'user/pages/sub-pages/languages/literature',
              'Literatura',
              'literature',
              'Literature'
            );

            // Português
            renderSubPages(
              '/knowledge-areas/languages/portuguese',
              'user/pages/sub-pages/languages/portuguese',
              'Português',
              'portuguese',
              'Portuguese'
            );

        // Natureza
          // Biologia
          renderSubPages(
          '/knowledge-areas/nature/biology',
          'user/pages/sub-pages/nature/biology',
          'Biologia',
          'biology',
          'Biology'
          );

          // Química
          renderSubPages(
          '/knowledge-areas/nature/chemical',
          'user/pages/sub-pages/nature/chemical',
          'Química',
          'chemical',
          'Chemical'
          );

          // Física
          renderSubPages(
          '/knowledge-areas/nature/physical',
          'user/pages/sub-pages/nature/physical',
          'Física',
          'physical',
          'Physical'
          );  
        // Math
        renderSubPages(
          '/knowledge-areas/math',
          'user/pages/sub-pages/math',
          'Matemática',
          'math',
          'Math'
          ); 

module.exports = user