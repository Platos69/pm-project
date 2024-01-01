const mongoose = require('mongoose')

const formsAreas = {
    main: [
        { name: 'Adicionar / Editar/ Excluir / Listar conteúdo', url: '/manager/forms-main/forms-area' }
    ],
    areas: [
        { name: 'Matemática e suas tecnologias', url: '/manager/forms-main/forms-area/math/options' },
        { name: 'Ciências humanas e sociais aplicadas', url: '/manager/forms-main/forms-area/humans' },
        { name: 'Ciências da natureza e suas tecnologias', url: '/manager/forms-main/forms-area/nature' },
        { name: 'Linguagens e suas tecnologias', url: '/manager/forms-main/forms-area/languages' }
    ]
};

formsAreas.subAreas = {
    humans: [
        {
            name: 'Geografia',
            url: '/manager/forms-main/forms-area/humans/geography/options',
            options: {
                edit: '/manager/forms-main/forms-area/humans/geography/edit',
                list: '/manager/forms-main/forms-area/humans/geography/list',
                add: '/manager/forms-main/forms-area/humans/geography/add'
            }
        },
        {
            name: 'História',
            url: '/manager/forms-main/forms-area/humans/history/options',
            options: {
                edit: '/manager/forms-main/forms-area/humans/history/edit',
                list: '/manager/forms-main/forms-area/humans/history/list',
                add: '/manager/forms-main/forms-area/humans/history/add'
            }
        },
        {
            name: 'Filosofia',
            url: '/manager/forms-main/forms-area/humans/philosophy/options',
            options: {
                edit: '/manager/forms-main/forms-area/humans/philosophy/edit',
                list: '/manager/forms-main/forms-area/humans/philosophy/list',
                add: '/manager/forms-main/forms-area/humans/philosophy/add'
            }
        },
        {
            name: 'Sociologia',
            url: '/manager/forms-main/forms-area/humans/sociology/options',
            options: {
                edit: '/manager/forms-main/forms-area/humans/sociology/edit',
                list: '/manager/forms-main/forms-area/humans/sociology/list',
                add: '/manager/forms-main/forms-area/humans/sociology/add'
            }
        },
    ],
    languages: [
        {
            name: 'Artes',
            url: '/manager/forms-main/forms-area/languages/art/options',
            options: {
                edit: '/manager/forms-main/forms-area/languages/art/edit',
                list: '/manager/forms-main/forms-area/languages/art/list',
                add: '/manager/forms-main/forms-area/languages/art/add'
            }
        },
        {
            name: 'Redação',
            url: '/manager/forms-main/forms-area/languages/essay/options',
            options: {
                edit: '/manager/forms-main/forms-area/languages/essay/edit',
                list: '/manager/forms-main/forms-area/languages/essay/list',
                add: '/manager/forms-main/forms-area/languages/essay/add'
            }
        },
        {
            name: 'Literatura',
            url: '/manager/forms-main/forms-area/languages/literature/options',
            options: {
                edit: '/manager/forms-main/forms-area/languages/literature/edit',
                list: '/manager/forms-main/forms-area/languages/literature/list',
                add: '/manager/forms-main/forms-area/languages/literature/add'
            }
        },
        {
            name: 'Português',
            url: '/manager/forms-main/forms-area/languages/portuguese/options',
            options: {
                edit: '/manager/forms-main/forms-area/languages/portuguese/edit',
                list: '/manager/forms-main/forms-area/languages/portuguese/list',
                add: '/manager/forms-main/forms-area/languages/portuguese/add'
            }
        },
    ],
    nature: [
        {
            name: 'Biologia',
            url: '/manager/forms-main/forms-area/nature/biology/options',
            options: {
                edit: '/manager/forms-main/forms-area/nature/biology/edit',
                list: '/manager/forms-main/forms-area/nature/biology/list',
                add: '/manager/forms-main/forms-area/nature/biology/add'
            }
        },
        {
            name: 'Química',
            url: '/manager/forms-main/forms-area/nature/chemical/options',
            options: {
                edit: '/manager/forms-main/forms-area/nature/chemical/edit',
                list: '/manager/forms-main/forms-area/nature/chemical/list',
                add: '/manager/forms-main/forms-area/nature/chemical/add'
            }
        },
        {
            name: 'Física',
            url: '/manager/forms-main/forms-area/nature/physical/options',
            options: {
                edit: '/manager/forms-main/forms-area/nature/physical/edit',
                list: '/manager/forms-main/forms-area/nature/physical/list',
                add: '/manager/forms-main/forms-area/nature/physical/add'
            }
        },
    ],
    math: [
        {
            name: 'Matemática',
            url: '/manager/forms-main/forms-area/math/options',
            options: {
                edit: '/manager/forms-main/forms-area/math/edit',
                list: '/manager/forms-main/forms-area/math/list',
                add: '/manager/forms-main/forms-area/math/add'
            }
        },
    ]
};

module.exports = formsAreas;

