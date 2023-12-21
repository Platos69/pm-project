// CARREGANDO MÓDULOS
    // Módulos principais
    const express = require('express')
    const manager = express.Router()
    const handlebars = require('express-handlebars')

// ROTAS
    // Área de formulários
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

    // Formulários
    function renderForms(url, directoryRender, formsPage, postUrl, directoryStyle, optionNav) {
        manager.get(url, (req, res) => {
            try {
                let urlCorrection = '/manager' + postUrl
                const msgSuccess = 'Você está no formulário: ' + formsPage;
                const lowerCaseFormsPage = formsPage.toLowerCase();
                res.render(directoryRender, {
                    urlPost: urlCorrection,
                    name: formsPage,
                    title: `Formulário de ${lowerCaseFormsPage} - Page`,
                    style: directoryStyle || '../../main-forms/main-forms.css',
                    showNavbar: optionNav || true,
                    success_msg: msgSuccess
                });
            } catch (err) {
                console.error(`[PM] Houve um erro ao entrar no formulário "${formsPage}", erro:`, err);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
        // Humanas 
        // Geografia
        renderForms(
            '/forms/humans/geography',
            'manager/forms/humans/form-geography',
            'Geografia',
            '/forms/humans/geography/add'
            );
        // História
        renderForms(
            '/forms/humans/history',
            'manager/forms/humans/form-history',
            'História',
            '/forms/humans/history/add'
            );
        // Filosofia
        renderForms(
            '/forms/humans/philosophy',
            'manager/forms/humans/form-philosophy',
            'Filosofia',
            '/forms/humans/philosophy/add'
            );
        // Sociologia
        renderForms(
            '/forms/humans/sociology',
            'manager/forms/humans/form-sociology',
            'Sociologia',
            '/forms/humans/sociology/add'
            );
        // Linguagens 
        // Artes
        renderForms(
            '/forms/language/art',
            'manager/forms/languages/form-art',
            'Artes',
            '/forms/languages/arts/add'
            );
        // Redação
        renderForms(
            '/forms/language/essay',
            'manager/forms/languages/form-essay',
            'História',
            '/forms/languages/essay/add'
            );
        // Literatura
        renderForms(
            '/forms/language/literature',
            'manager/forms/language/form-literature',
            'Literatura',
            '/forms/languages/literature/add'
            );
        // Português
        renderForms(
            '/forms/language/portuguese',
            'manager/forms/languages/form-portuguese',
            'Português',
            '/forms/languages/portuguese/add'
            );
        // Natureza 
        // Química 
        renderForms(
            '/forms/nature/chemical',
            'manager/forms/nature/form-chemical',
            'Química',
            '/forms/nature/chemical/add'
            );
        // Física
        renderForms(
            '/forms/nature/physical',
            'manager/forms/nature/form-physical',
            'Física',
            '/forms/nature/physical/add'
            );
        // Biologia
        renderForms(
            '/forms/nature/biology',
            'manager/forms/nature/form-biology',
            'Biologia',
            '/forms/nature/biology/add'
            );
        // Matemática
        renderForms(
        '/forms/math',
        'manager/forms/form-math',
        'Matemática',
        '/forms/math/add' 
        )

// ROTAS POST
function renderPostForms (url, ...functions) {
manager.post(url, (req, res) => {
    res.redirect('/')
});
}
// Humanas 
    // Geografia
    renderPostForms(
    '/forms/humans/geography/add'
    );
    // História
    renderPostForms(
    '/forms/humans/history/add'
    );
    // Filosofia
    renderPostForms(
    '/forms/humans/philosophy/add'
    );
    // Sociologia
    renderPostForms(
    '/forms/humans/sociology/add'
    );

// Linguagens 
    // Artes
    renderPostForms(
    '/forms/languages/art/add'
    );
    // Redação
    renderPostForms(
    '/forms/languages/essay/add'
    );
    // Literatura
    renderPostForms(
    '/forms/language/literature/add'
    );
    // Português
    renderPostForms(
    '/forms/languages/portuguese/add'
    );

// Natureza 
    // Química 
    renderPostForms(
    '/forms/nature/chemical/add'
    );
    // Física
    renderPostForms(
    '/forms/nature/physical/add'
    );
    // Biologia
    renderPostForms(
    '/forms/nature/biology/add'
    );
    
// Matemática
renderPostForms(
    '/forms/math/add'
);     

module.exports = manager