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

    formsAreas.options = {
        humans: [
            { name: 'Geografia', url: '/manager/forms-main/forms-area/humans/geography/options' },
            { name: 'História', url: '/manager/forms-main/forms-area/humans/history/options' },
            { name: 'Filosofia', url: '/manager/forms-main/forms-area/humans/philosophy/options' },
            { name: 'Sociologia', url: '/manager/forms-main/forms-area/humans/sociology/options' }
        ],
        languages: [
            { name: 'Artes', url: '/manager/forms-main/forms-area/languages/art/options' },
            { name: 'Redação', url: '/manager/forms-main/forms-area/languages/essay/options' },
            { name: 'Literatura', url: '/manager/forms-main/forms-area/languages/literature/options' },
            { name: 'Português', url: '/manager/forms-main/forms-area/languages/portuguese/options' }
        ],
        nature: [
            { name: 'Biologia', url: '/manager/forms-main/forms-area/nature/biology/options' },
            { name: 'Química', url: '/manager/forms-main/forms-area/nature/chemical/options' },
            { name: 'Física', url: '/manager/forms-main/forms-area/nature/physical/options' }
        ]
    }    


module.exports = formsAreas;

