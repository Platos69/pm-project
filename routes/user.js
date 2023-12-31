// CARREGANDO MÓDULOS
    // Módulos principais
    const express = require('express')
    const user = express.Router()
    const mongoose = require('mongoose')
    const handlebars = require('express-handlebars')  
    // Exportando módulos
    const models = require('../configs/ModelsVariables.js');

// CONFIGURAÇÕES
  // Automatizando link automatico
  const knowledgeAreas = require('../configs/user/KnowledgeAreasVariables.js');

// ROTAS
  // Páginas das áreas do conhecimento
  function renderMainPage(url, pageName, areas, directoryStyle, optionNav) {
    user.get(url, (req, res) => {
      try {
        const directoryRender = 'user/areas'
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
      'Áreas do conhecimento',
      knowledgeAreas.main,
      '../main-knowledge/css/main-knowledge.css'
  );
      // Pages
        // Humanas
        renderMainPage(
          '/knowledge-areas/humans',
          'Ciências humanas e sociais aplicadas',
          knowledgeAreas.humans
        );

        // Linguagens
        renderMainPage(
          '/knowledge-areas/languages',
          'Linguagens e suas tecnologias',
          knowledgeAreas.languages
        );

        // Natureza
        renderMainPage(
          '/knowledge-areas/nature',
          'Ciências da natureza e suas tecnologias',
          knowledgeAreas.nature
        );
          // Sub-pages
          function renderSubPages(url, pageName, findVariableByName, findVariableForDB, directoryStyle, optionNav) {
            user.get(url, async (req, res) => {
              try {
                const msgSuccess = 'Você está na página: ' + pageName;
                const directoryRender = 'user/pages/sub-pages/sub-areas'
                const content = await models[findVariableForDB].find().sort({ data: 'desc' });
          
                res.render(directoryRender, {
                  name: pageName,
                  title: `${pageName} - Page`,
                  content,
                  style: directoryStyle || '../../main-knowledge/sub-knowledge/sub-knowledge.css',
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
                'História',
                'history',
                'History'
              )
              // Geografia
              renderSubPages(
                '/knowledge-areas/humans/geography',
                'Geografia',
                'geography',
                'Geography'
              )
              // Filosofia
              renderSubPages(
                '/knowledge-areas/humans/philosophy',
                'Filosofia',
                'philosophy',
                'Philosophy',
              )
              // Sociologia
              renderSubPages(
                '/knowledge-areas/humans/sociology',
                'Sociologia',
                'sociology',
                'Sociology',
              )
              
          // Linguagens
            // Artes
            renderSubPages(
              '/knowledge-areas/languages/art',
              'Artes',
              'art',
              'Art'
            );

            // Redação
            renderSubPages(
              '/knowledge-areas/languages/essay',
              'Redação',
              'essay',
              'Essay'
            );

            // Literatura
            renderSubPages(
              '/knowledge-areas/languages/literature',
              'Literatura',
              'literature',
              'Literature'
            );

            // Português
            renderSubPages(
              '/knowledge-areas/languages/portuguese',
              'Português',
              'portuguese',
              'Portuguese'
            );

        // Natureza
          // Biologia
          renderSubPages(
          '/knowledge-areas/nature/biology',
          'Biologia',
          'biology',
          'Biology'
          );

          // Química
          renderSubPages(
          '/knowledge-areas/nature/chemical',
          'Química',
          'chemical',
          'Chemical'
          );

          // Física
          renderSubPages(
          '/knowledge-areas/nature/physical',
          'Física',
          'physical',
          'Physical'
          );  
        // Math
        renderSubPages(
          '/knowledge-areas/math',
          'Matemática',
          'math',
          'Math'
          ); 

module.exports = user