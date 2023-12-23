const mongoose = require('mongoose')

const formsAreas = {
    main: [
        { name: 'Adicionar conteúdo', url: '/manager/forms-main' }
    ],
    // humans: [
    //     { name: 'Geografia', url: '/manager/forms-main/forms-area/humans/geography' },
    //     { name: 'História', url: '/manager/forms-main/forms-area/humans/history' },
    //     { name: 'Filosofia', url: '/manager/forms-main/forms-area/humans/philosophy' },
    //     { name: 'Sociologia', url: '/manager/forms-main/forms-area/humans/sociology' }
    // ],
    // languages: [
    //     { name: 'Artes', url: '/manager/forms-main/forms-area/languages/art' },
    //     { name: 'Redação', url: '/manager/forms-main/forms-area/languages/essay' },
    //     { name: 'Literatura', url: '/manager/forms-main/forms-area/languages/literature' },
    //     { name: 'Português', url: '/manager/forms-main/forms-area/languages/portuguese' }
    // ],
    // nature: [
    //     { name: 'Biologia', url: '/manager/forms-main/forms-area/nature/biology' },
    //     { name: 'Química', url: '/manager/forms-main/forms-area/nature/chemical' },
    //     { name: 'Física', url: '/manager/forms-main/forms-area/nature/physical' }
    // ]
};

module.exports = formsAreas;
