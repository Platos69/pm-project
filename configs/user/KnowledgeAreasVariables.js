const mongoose = require('mongoose')

// Automatizando
const knowledgeAreas = {
    main: [
        { name: 'Matemática e suas tecnologias', url: '/user/knowledge-areas/math' },
        { name: 'Ciências humanas e sociais aplicadas', url: '/user/knowledge-areas/humans' },
        { name: 'Ciências da natureza e suas tecnologias', url: '/user/knowledge-areas/nature' },
        { name: 'Linguagens e suas tecnologias', url: '/user/knowledge-areas/languages' }
    ],
    humans: [
        { name: 'Geografia', url: '/user/knowledge-areas/humans/geography' },
        { name: 'História', url: '/user/knowledge-areas/humans/history' },
        { name: 'Filosofia', url: '/user/knowledge-areas/humans/philosophy' },
        { name: 'Sociologia', url: '/user/knowledge-areas/humans/sociology' }
    ],
    languages: [
        { name: 'Artes', url: '/user/knowledge-areas/languages/art' },
        { name: 'Redação', url: '/user/knowledge-areas/languages/essay' },
        { name: 'Literatura', url: '/user/knowledge-areas/languages/literature' },
        { name: 'Português', url: '/user/knowledge-areas/languages/portuguese' }
    ],
    nature: [
        { name: 'Biologia', url: '/user/knowledge-areas/nature/biology' },
        { name: 'Química', url: '/user/knowledge-areas/nature/chemical' },
        { name: 'Física', url: '/user/knowledge-areas/nature/physical' }
    ]
};

module.exports = knowledgeAreas;
