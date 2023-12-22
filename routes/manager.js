// CARREGANDO MÓDULOS
    // Módulos principais
    const express = require('express')
    const manager = express.Router()
    const handlebars = require('express-handlebars');

// CONFIGURAÇÕES
const models = {
    Geography: require('../models/knowledge-areas/humans/Geography'),
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
            'História'
            );
        // Filosofia
        renderForms(
            '/forms/humans/philosophy',
            'manager/pages/forms/humans/form-philosophy',
            'Filosofia'
            );
        // Sociologia
        renderForms(
            '/forms/humans/sociology',
            'manager/pages/forms/humans/form-sociology',
            'Sociologia'
            );
    // Linguagens 
        // Artes
        renderForms(
            '/forms/language/art',
            'manager/pages/forms/languages/form-art',
            'Artes'
            );
        // Redação
        renderForms(
            '/forms/language/essay',
            'manager/pages/forms/languages/form-essay',
            'História'
            );
        // Literatura
        renderForms(
            '/forms/language/literature',
            'manager/pages/forms/language/form-literature',
            'Literatura'
            );
        // Português
        renderForms(
            '/forms/language/portuguese',
            'manager/pages/forms/languages/form-portuguese',
            'Português'
            );
    // Natureza 
        // Química 
        renderForms(
            '/forms/nature/chemical',
            'manager/pages/forms/nature/form-chemical',
            'Química'
            );
        // Física
        renderForms(
            '/forms/nature/physical',
            'manager/forms/nature/form-physical',
            'Física'
            );
        // Biologia
        renderForms(
            '/forms/nature/biology',
            'manager/pages/forms/nature/form-biology',
            'Biologia'
            );
        // Matemática
        renderForms(
        '/forms/math',
        'manager/pages/forms/form-math',
        'Matemática' 
        )

module.exports = manager