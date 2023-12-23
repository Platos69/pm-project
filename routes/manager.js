// CARREGANDO MÓDULOS
    // Módulos principais
    const express = require('express')
    const manager = express.Router()
    const handlebars = require('express-handlebars');

// CONFIGURAÇÕES
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

// ROTAS
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
            '/forms/humans/geography',
            'manager/pages/forms/humans/form-geography',
            'Geografia',
            'geography',
            'Geography'
            );
        // História
        renderForms(
            '/forms/humans/history',
            'manager/pages/forms/humans/form-history',
            'História',
            'history',
            'History'
            );
        // Filosofia
        renderForms(
            '/forms/humans/philosophy',
            'manager/pages/forms/humans/form-philosophy',
            'Filosofia',
            'philosophy',
            'Philosophy'
            );
        // Sociologia
        renderForms(
            '/forms/humans/sociology',
            'manager/pages/forms/humans/form-sociology',
            'Sociologia',
            'sociology',
            'Sociology',
            );
    // Linguagens 
        // Artes
        renderForms(
            '/forms/language/art',
            'manager/pages/forms/languages/form-art',
            'Artes',
            'art',
            'Art'
            );
        // Redação
        renderForms(
            '/forms/language/essay',
            'manager/pages/forms/languages/form-essay',
            'Redação',
            'essay',
            'Essay'
            );
        // Literatura
        renderForms(
            '/forms/language/literature',
            'manager/pages/forms/language/form-literature',
            'Literatura',
            'literature',
            'Literature'
            );
        // Português
        renderForms(
            '/forms/language/portuguese',
            'manager/pages/forms/languages/form-portuguese',
            'Português',
            'portuguese',
            'Portuguese'
            );
    // Natureza 
        // Química 
        renderForms(
            '/forms/nature/chemical',
            'manager/pages/forms/nature/form-chemical',
            'Química',
            'chemical',
            'Chemical'
            );
        // Física
        renderForms(
            '/forms/nature/physical',
            'manager/forms/nature/form-physical',
            'Física',
            'physical',
            'Physical'
            );
        // Biologia
        renderForms(
            '/forms/nature/biology',
            'manager/pages/forms/nature/form-biology',
            'Biologia',
            'biology',
            'Biology'
            );
    // Matemática
    renderForms(
        '/forms/math',
        'manager/pages/forms/form-math',
        'Matemática',
        'math',
        'Math'
    )

module.exports = manager