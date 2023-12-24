const mongoose = require('mongoose')

const formsAreas = {
    main: [
        { name: 'Adicionar / Editar/ Excluir / Listar conteúdo', url: '/manager/forms-main/forms-area' }
    ],
    areas: [
        { name: 'Matemática e suas tecnologias', url: '/manager/forms-main/forms-area/math/add' },
        { name: 'Ciências humanas e sociais aplicadas', url: '/manager/forms-main/forms-area/humans' },
        { name: 'Ciências da natureza e suas tecnologias', url: '/manager/forms-main/forms-area/nature' },
        { name: 'Linguagens e suas tecnologias', url: '/manager/forms-main/forms-area/languages' }
    ],
    humans: [
        { name: 'Geografia', url: '/manager/forms-main/forms-area/humans/geography/add' },
        { name: 'História', url: '/manager/forms-main/forms-area/humans/history/add' },
        { name: 'Filosofia', url: '/manager/forms-main/forms-area/humans/philosophy/add' },
        { name: 'Sociologia', url: '/manager/forms-main/forms-area/humans/sociology/add' }
    ],
    languages: [
        { name: 'Artes', url: '/manager/forms-main/forms-area/languages/art/add' },
        { name: 'Redação', url: '/manager/forms-main/forms-area/languages/essay/add' },
        { name: 'Literatura', url: '/manager/forms-main/forms-area/languages/literature/add' },
        { name: 'Português', url: '/manager/forms-main/forms-area/languages/portuguese/add' }
    ],
    nature: [
        { name: 'Biologia', url: '/manager/forms-main/forms-area/nature/biology/add' },
        { name: 'Química', url: '/manager/forms-main/forms-area/nature/chemical/add' },
        { name: 'Física', url: '/manager/forms-main/forms-area/nature/physical/add' }
    ]
};

module.exports = formsAreas;

