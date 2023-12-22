// CARREGANDO MÓDULOS
    // Módulos principais
    const express = require('express')
    const user = express.Router()
    const handlebars = require('express-handlebars')
    // Exportando modelos
    const Geography = require('../models/knowledge-areas/humans/Geography.js');

// CONFIGURAÇÕES
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

        // Matemática
        renderMainPage(
          '/knowledge-areas/math',
          'user/pages/math',
          'Matemática e suas tecnologias',
        );
          // Sub-pages
          function renderSubPages(url, directoryRender, pageName, directoryStyle, optionNav) {
            user.get(url, (req, res) => {
              try {
                const msgSuccess = 'Você está na página: ' + pageName
                res.render(directoryRender, {
                  name: pageName,
                  title: `${pageName} - Page`,
                  style: directoryStyle || '../../main-knowledge/sub-knowledge/css/sub-knowledge.css',
                  showNavbar: optionNav || true,
                  success_msg: msgSuccess});
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
                'História'
              )
              // Geografia
              renderSubPages(
                '/knowledge-areas/humans/geography',
                'user/pages/sub-pages/humans/geography',
                'Geografia'
              )
              // Filosofia
              renderSubPages(
                '/knowledge-areas/humans/philosophy',
                'user/pages/sub-pages/humans/philosophy',
                'Filosofia'
              )
              // Sociologia
              renderSubPages(
                '/knowledge-areas/humans/sociology',
                'user/pages/sub-pages/humans/sociology',
                'Sociologia'
              )
              
          // Linguagens
            // Artes
            renderSubPages(
              '/knowledge-areas/languages/art',
              'user/pages/sub-pages/languages/art',
              'Artes'
            );

            // Redação
            renderSubPages(
              '/knowledge-areas/languages/essay',
              'user/pages/sub-pages/languages/essay',
              'Redação'
            );

            // Literatura
            renderSubPages(
              '/knowledge-areas/languages/literature',
              'user/pages/sub-pages/languages/literature',
              'Literatura'
            );

            // Português
            renderSubPages(
              '/knowledge-areas/languages/portuguese',
              'user/pages/sub-pages/languages/portuguese',
              'Português'
            );

        // Natureza
          // Biologia
          renderSubPages(
          '/knowledge-areas/nature/biology',
          'user/pages/sub-pages/nature/biology',
          'Biologia'
          );

          // Química
          renderSubPages(
          '/knowledge-areas/nature/chemical',
          'user/pages/sub-pages/nature/chemical',
          'Química'
          );

          // Física
          renderSubPages(
          '/knowledge-areas/nature/physical',
          'user/pages/sub-pages/nature/physical',
          'Física'
          );  

module.exports = user