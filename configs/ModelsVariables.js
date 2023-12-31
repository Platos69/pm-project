mongoose = require('mongoose')

// Exportando modelos
      // Humanas
        // História
        require('../models/knowledge-areas/humans/History.js');
        const history = mongoose.model('History');
        // Geografia
        require('../models/knowledge-areas/humans/Geography.js');
        const geography = mongoose.model('Geography');
        // Filosofia
        require('../models/knowledge-areas/humans/Philosophy.js');
        const philosophy = mongoose.model('Philosophy');
        // Sociologia
        require('../models/knowledge-areas/humans/Sociology.js');
        const sociology = mongoose.model('Sociology');
      // Linguagens
        // Artes
        require('../models/knowledge-areas/languages/Art.js');
        const art = mongoose.model('Art');
        // Redação
        require('../models/knowledge-areas/languages/Essay.js');
        const essay = mongoose.model('Essay');
        // Literature
        require('../models/knowledge-areas/languages/Literature.js');
        const literature = mongoose.model('Literature');
        // Português
        require('../models/knowledge-areas/languages/Portuguese.js');
        const portuguese = mongoose.model('Portuguese');
      // Natureza
        // Biologia
        require('../models/knowledge-areas/nature/Biology.js');
        const biology = mongoose.model('Biology');
        // Química
        require('../models/knowledge-areas/nature/Chemical.js');
        const chemical = mongoose.model('Chemical');
        // Física
        require('../models/knowledge-areas/nature/Physical.js');
        const physical = mongoose.model('Physical');  
      // Matemática
        require('../models/knowledge-areas/Math.js')
        const math = mongoose.model('Math');

// CONFIGURAÇÕES
  // Carregando modulos
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

module.exports = models;