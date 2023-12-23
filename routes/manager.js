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
    function renderMainForm(url, directoryRender, pageName, areas, directoryStyle, optionNav) {
    manager.get(url, (req, res) => {
        try {
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
            'manager/areas',
            'Página principal',
            formsAreas.main
        );
            // ADICIONAR O BGL DE AREA FORM

    // Formulários
    function renderForms(url, directoryRender, formsPage, findVariableByName, findVariableForDB, directoryStyle, optionNav) {
        manager.route(url)
            .get(async (req, res) => {
                try {
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
        renderForms(
            '/forms-main/forms-area/humans/geography',
            'manager/pages/forms/humans/form-geography',
            'Geografia',
            'geography',
            'Geography'
            );
        // História
        renderForms(
            '/forms-main/forms-area/humans/history',
            'manager/pages/forms/humans/form-history',
            'História',
            'history',
            'History'
            );
        // Filosofia
        renderForms(
            '/forms-main/forms-area/humans/philosophy',
            'manager/pages/forms/humans/form-philosophy',
            'Filosofia',
            'philosophy',
            'Philosophy'
            );
        // Sociologia
        renderForms(
            '/forms-main/forms-area/humans/sociology',
            'manager/pages/forms/humans/form-sociology',
            'Sociologia',
            'sociology',
            'Sociology',
            );
    // Linguagens 
        // Artes
        renderForms(
            '/forms-main/forms-area/language/art',
            'manager/pages/forms/languages/form-art',
            'Artes',
            'art',
            'Art'
            );
        // Redação
        renderForms(
            '/forms-main/forms-area/language/essay',
            'manager/pages/forms/languages/form-essay',
            'Redação',
            'essay',
            'Essay'
            );
        // Literatura
        renderForms(
            '/forms-main/forms-area/language/literature',
            'manager/pages/forms/language/form-literature',
            'Literatura',
            'literature',
            'Literature'
            );
        // Português
        renderForms(
            '/forms-main/forms-area/language/portuguese',
            'manager/pages/forms/languages/form-portuguese',
            'Português',
            'portuguese',
            'Portuguese'
            );
    // Natureza 
        // Química 
        renderForms(
            '/forms-main/forms-area/nature/chemical',
            'manager/pages/forms/nature/form-chemical',
            'Química',
            'chemical',
            'Chemical'
            );
        // Física
        renderForms(
            '/forms-main/forms-area/nature/physical',
            'manager/forms/nature/form-physical',
            'Física',
            'physical',
            'Physical'
            );
        // Biologia
        renderForms(
            '/forms-main/forms-area/nature/biology',
            'manager/pages/forms/nature/form-biology',
            'Biologia',
            'biology',
            'Biology'
            );
    // Matemática
    renderForms(
        '/forms-main/forms-area/math',
        'manager/pages/forms/form-math',
        'Matemática',
        'math',
        'Math'
    )

module.exports = manager