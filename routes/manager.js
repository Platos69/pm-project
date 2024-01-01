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
            res.render(directoryRender, {
            name: pageName,
            title: `${pageName} - Page`,
            areas: areas || false, 
            style: directoryStyle || '../../../../manager/main-forms/main-forms.css',
            showNavbar: optionNav || true});
        } catch (err) {
            req.flash('error_msg', '[INTERNAL ERROR] Erro ao entrar na página ', pageName, '! Error: ' + err);
            res.redirect('/manager/forms-main/'); 
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
                    formsAreas.subAreas.humans
                );
                // Linguagens
                renderMainForm(
                    '/forms-main/forms-area/languages',
                    'Linguagens',
                    formsAreas.subAreas.languages
                );
                // Natureza
                renderMainForm(
                    '/forms-main/forms-area/nature',
                    'Natureza',
                    formsAreas.subAreas.nature
                );
        
        // Formulário opções
        function renderOptionsForm(url, pageName, area, findVariableByName, findVariableForDB, directoryStyle, optionNav) {
            manager.get(url, async (req, res) => {
                try {
                    const directoryRender = 'manager/pages/forms/options/main';
                    const content = await models[findVariableForDB].find().sort({ data: 'desc' });

                    const mappedArea = {
                        name: area.name,
                        options: {
                            edit: `${area.options.edit}`,
                            list: area.options.list,
                            add: area.options.add,
                        },
                    };
        
                    res.render(directoryRender, {
                        name: pageName,
                        modelName: findVariableForDB,
                        title: `${pageName} - Page`,
                        areas: [mappedArea] || false, 
                        content,
                        style: directoryStyle || '../../../../../../manager/main-forms/main-forms.css',
                        showNavbar: optionNav || true,
                    });
                } catch (err) {
                    req.flash('error_msg', '[INTERNAL ERROR] Erro ao entrar na página ', pageName, '! Error: ' + err);
                    res.redirect('/manager/forms-main/'); 
                }
            });
        }

         // Areas do conhecimento 
             // Humanas 
                // Geografia
                renderOptionsForm(
                    '/forms-main/forms-area/humans/geography/options',
                    'Geografia',
                    formsAreas.subAreas.humans.find(area => area.name === 'Geografia'),
                    'geography',
                    'Geography'
                    );
                // História
                renderOptionsForm(
                    '/forms-main/forms-area/humans/history/options',
                    'História',
                    formsAreas.subAreas.humans.find(area => area.name === 'História'),
                    'history',
                    'History'
                    );
                // Filosofia
                renderOptionsForm(
                    '/forms-main/forms-area/humans/philosophy/options',
                    'Filosofia',
                    formsAreas.subAreas.humans.find(area => area.name === 'Filosofia'),
                    'philosophy',
                    'Philosophy',
                    );
                // Sociologia
                renderOptionsForm(
                    '/forms-main/forms-area/humans/sociology/options',
                    'Sociologia',
                    formsAreas.subAreas.humans.find(area => area.name === 'Sociologia'),
                    'sociology',
                    'Sociology',
                    );
            // Linguagens 
                // Artes
                renderOptionsForm(
                    '/forms-main/forms-area/language/art/options',
                    'Artes',
                    formsAreas.subAreas.languages.find(area => area.name === 'Artes'),
                    'art',
                    'Art'
                    );
                // Redação
                renderOptionsForm(
                    '/forms-main/forms-area/language/essay/options',
                    'Redação',
                    formsAreas.subAreas.languages.find(area => area.name === 'Redação'),
                    'essay',
                    'Essay'
                    );
                // Literatura
                renderOptionsForm(
                    '/forms-main/forms-area/language/literature/options',
                    'Literatura',
                    formsAreas.subAreas.languages.find(area => area.name === 'Literatura'),
                    'literature',
                    'Literature'
                    );
                // Português
                renderOptionsForm(
                    '/forms-main/forms-area/language/portuguese/options',
                    'Português',
                    formsAreas.subAreas.languages.find(area => area.name === 'Português'),
                    'portuguese',
                    'Portuguese'
                    );
            // Natureza 
                // Química 
                renderOptionsForm(
                    '/forms-main/forms-area/nature/chemical/options',
                    'Química',
                    formsAreas.subAreas.nature.find(area => area.name === 'Química'),
                    'chemical',
                    'Chemical'
                    );
                // Física
                renderOptionsForm(
                    '/forms-main/forms-area/nature/physical/options',
                    'Física',
                    formsAreas.subAreas.nature.find(area => area.name === 'Física'),
                    'physical',
                    'Physical'
                    );
                // Biologia
                renderOptionsForm(
                    '/forms-main/forms-area/nature/biology/options',
                    'Biologia',
                    formsAreas.subAreas.nature.find(area => area.name === 'Biologia'),
                    'biology',
                    'Biology'
                    );
            // Matemática
            renderOptionsForm(
                '/forms-main/forms-area/math/options',
                'Matemática',
                formsAreas.subAreas.math.find(area => area.name === 'Matemática'),
                'math',
                'Math'
            )    

                // Formulários add
                function renderFormsAdd(url, formsPage, findVariableByName, findVariableForDB, directoryStyle, optionNav) {
                    manager.route(url)
                        .get(async (req, res) => {
                            try {
                                const directoryRender = 'manager/pages/forms/options/add/form-add'
                                const lowerCaseFormsPage = formsPage.toLowerCase();
                                const findVariableByName = await models[findVariableForDB].find();
                                res.render(directoryRender, {
                                    urlPost: '/manager' + url,
                                    name: formsPage,
                                    title: `Formulário de ${lowerCaseFormsPage} - Page`,
                                    style: directoryStyle || '../../../../manager/main-forms/main-forms.css',
                                    showNavbar: optionNav || true
                                });
                            } catch (err) {
                                req.flash('error_msg', '[INTERNAL ERROR] Houve um erro ao tentar entrar no formulário' + err);
                                res.redirect('/manager/forms-main/'); 
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
                                req.flash('success_msg', 'Conteúdo adicionado com sucesso.');
                                res.redirect('/manager/forms-main/'); 
                            } catch (err) {
                                req.flash('error_msg', '[INTERNAL ERROR] Houve um erro tentar ao enviar o formulário! Error: ' + err);
                                res.redirect('/manager/forms-main/'); 
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
    // Editar conteúdos

    // Deletar conteúdos
    manager.post('/forms-main/forms-area/options/forms-delete/:model/:id', async (req, res) => {
        const modelName = req.params.model;
        const contentId = req.params.id;
    
        try {
            // Verifique se o modelo existe
            if (!models[modelName]) {
                req.flash('error_msg', '[INTERNAL ERROR] Modelo do banco de dados não encontrado.');
                return res.redirect('/manager/forms-main/');
            }
    
            // Encontre o conteúdo pelo ID e remova-o
            const result = await models[modelName].findByIdAndRemove(contentId);
    
            if (!result) {
                req.flash('error_msg', '[INTERNAL ERROR] Conteúdo não encontrado no banco de dados.');
                return res.redirect('/manager/forms-main/');
            }
    
            req.flash('success_msg', 'Conteúdo removido com sucesso.');
            res.redirect('/manager/forms-main/');  // Redirecione para a página principal após a remoção
        } catch (err) {
            console.error('Erro ao deletar conteúdo:', err);
            req.flash('error_msg', '[INTERNAL ERROR] Erro ao deletar conteúdo: ' + err);
            res.redirect('/manager/forms-main/');
        }
    });

module.exports = manager