// CARREGANDO MÓDULOS
    // Módulos principais
    const express = require('express')
    const manager = express.Router()
    const handlebars = require('express-handlebars');
    // Exportando models
    const models = require('../configs/ModelsVariables.js');

// CONFIGURAÇÕES
  // Automatizando link automatico
  const formsAreas = require('../configs/manager/FormsAreasVariables.js')

// ROTAS
    // Área de formulários
    function renderMainForm(url, pageName, areas, directoryStyle, optionNav) {
    manager.get(url, (req, res) => {
        try {
            const directoryRender = 'manager/pages/forms/form-areas'
            const msgSuccess = 'Você está na página: ' + pageName
            res.render(directoryRender, {
            name: pageName,
            title: `${pageName} - Page`,
            areas: areas || false, 
            style: directoryStyle || '../../../../manager/main-forms/main-forms.css',
            showNavbar: optionNav || true,
            success_msg: msgSuccess });
        } catch (err) {
            console.error(`[PM] Houve um erro ao entrar na página "${pageName}", erro:`, err);
            res.status(500).send('Erro interno do servidor');
        }
        });
    }
        // Main
        renderMainForm(
            '/forms-main',
            'Home',
            formsAreas.main
        );
           // Area de ações de conteúdos
           renderMainForm(
            '/forms-main/forms-area',
            'Áreas de conhecimento',
            formsAreas.areas
        );
            // Areas especificas
                // Humanas
                renderMainForm(
                    '/forms-main/forms-area/humans',
                    'Humanas',
                    formsAreas.humans
                );
                // Linguagens
                renderMainForm(
                    '/forms-main/forms-area/languages',
                    'Linguagens',
                    formsAreas.languages
                );
                // Natureza
                renderMainForm(
                    '/forms-main/forms-area/nature',
                    'Natureza',
                    formsAreas.nature
                );

    // Formulários add
    function renderFormsAdd(url, formsPage, findVariableByName, findVariableForDB, directoryStyle, optionNav) {
        manager.route(url)
            .get(async (req, res) => {
                try {
                    const directoryRender = 'manager/pages/forms/add/form-add'
                    const lowerCaseFormsPage = formsPage.toLowerCase();
                    const findVariableByName = await models[findVariableForDB].find();
                    res.render(directoryRender, {
                        urlPost: '/manager' + url,
                        name: formsPage,
                        title: `Formulário de ${lowerCaseFormsPage} - Page`,
                        style: directoryStyle || '../../../../manager/main-forms/main-forms.css',
                        showNavbar: optionNav || true,
                        success_msg: msgSuccess = 'Você está no formulário: ' + formsPage,
                        findVariableByName
                    });
                } catch (err) {
                    console.error(`[PM] Houve um erro ao entrar no formulário "${formsPage}", erro:`, err);
                    res.status(500).send('Erro interno do servidor');
                }
            })
            .post(async (req, res) => {
                try {
                    const { titleContent, descriptionContent, documentationsContent, topic } = req.body;
                    const newEntity = new models[findVariableForDB]({
                        titleContent,
                        descriptionContent,
                        documentationsContent,
                        topics: topic
                    });
                    await newEntity.save();
                    res.redirect('/');
                } catch (err) {
                    console.error(`[PM] Houve um erro ao enviar o formulário "${formsPage}", erro:`, err);
                    res.status(500).send('Erro interno do servidor');
                }
            });
    }
    // Humanas 
        // Geografia
        renderFormsAdd(
            '/forms-main/forms-area/humans/geography/add',
            'Geografia',
            'geography',
            'Geography'
            );
        // História
        renderFormsAdd(
            '/forms-main/forms-area/humans/history/add',
            'História',
            'history',
            'History'
            );
        // Filosofia
        renderFormsAdd(
            '/forms-main/forms-area/humans/philosophy/add',
            'Filosofia',
            'philosophy',
            'Philosophy'
            );
        // Sociologia
        renderFormsAdd(
            '/forms-main/forms-area/humans/sociology/add',
            'Sociologia',
            'sociology',
            'Sociology',
            );
    // Linguagens 
        // Artes
        renderFormsAdd(
            '/forms-main/forms-area/language/art/add',
            'Artes',
            'art',
            'Art'
            );
        // Redação
        renderFormsAdd(
            '/forms-main/forms-area/language/essay/add',
            'Redação',
            'essay',
            'Essay'
            );
        // Literatura
        renderFormsAdd(
            '/forms-main/forms-area/language/literature/add',
            'Literatura',
            'literature',
            'Literature'
            );
        // Português
        renderFormsAdd(
            '/forms-main/forms-area/language/portuguese/add',
            'Português',
            'portuguese',
            'Portuguese'
            );
    // Natureza 
        // Química 
        renderFormsAdd(
            '/forms-main/forms-area/nature/chemical/add',
            'Química',
            'chemical',
            'Chemical'
            );
        // Física
        renderFormsAdd(
            '/forms-main/forms-area/nature/physical/add',
            'Física',
            'physical',
            'Physical'
            );
        // Biologia
        renderFormsAdd(
            '/forms-main/forms-area/nature/biology/add',
            'Biologia',
            'biology',
            'Biology'
            );
    // Matemática
    renderFormsAdd(
        '/forms-main/forms-area/math/add',
        'Matemática',
        'math',
        'Math'
    )    

module.exports = manager