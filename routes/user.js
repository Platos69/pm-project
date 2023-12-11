// CARREGANDO MÓDULOS
    // Módulos principais
    const express = require('express')
    const router = express.Router()
    const path = require('path')

// ROTAS
    // Áreas do conhecimento 
    router.get('/knowledge-areas', (req, res) => {
        try {
            const pageName = 'Áreas do conhecimento'
            res.render('user/areas', {  
                title: pageName +' - Page',
                style: 'areasKnowledge.css',
                showNavbar: true
            }, (err, html) => {
              if (err) {
                console.error('[PM] Houve um erro ao renderizar a página "', pageName ,'" erro:', err);
                res.status(500).send('Erro interno do servidor');
                return;
              }
              console.log('[PM] Você entrou na aba "', pageName ,'"');
              res.send(html);
            });
          } catch (err) {
            console.error('[PM] Houve um erro ao entrar na página "', pageName ,'", erro:', err);
            res.status(500).send('Erro interno do servidor');
          }
    })
        // Matemática 
        router.get('/knowledge-areas/math', (req, res) => {
            try {
                const pageName = 'Matemática'
                res.render('user/pages/math', {  
                    title: pageName +' - Page',
                    style: 'general/area.css',
                    showNavbar: true
                }, (err, html) => {
                  if (err) {
                    console.error('[PM] Houve um erro ao renderizar a página "', pageName ,'" erro:', err);
                    res.status(500).send('Erro interno do servidor');
                    return;
                  }
                  console.log('[PM] Você entrou na aba "', pageName ,'"');
                  res.send(html);
                });
              } catch (err) {
                console.error('[PM] Houve um erro ao entrar na página "', pageName ,'", erro:', err);
                res.status(500).send('Erro interno do servidor');
              }
        })
        // Humanas 
        router.get('/knowledge-areas/humans', (req, res) => {
            try {
                const pageName = 'Ciências Humanas'
                res.render('user/pages/humans', {  
                    title: pageName +' - Page',
                    style: 'general/area.css',
                    showNavbar: true
                }, (err, html) => {
                  if (err) {
                    console.error('[PM] Houve um erro ao renderizar a página "', pageName ,'" erro:', err);
                    res.status(500).send('Erro interno do servidor');
                    return;
                  }
                  console.log('[PM] Você entrou na aba "', pageName ,'"');
                  res.send(html);
                });
              } catch (err) {
                console.error('[PM] Houve um erro ao entrar na página "', pageName ,'", erro:', err);
                res.status(500).send('Erro interno do servidor');
              }
        })
        // Natureza 
        router.get('/knowledge-areas/nature', (req, res) => {
            try {
                const pageName = 'Ciências da Natureza'
                res.render('user/pages/nature', {  
                    title: pageName +' - Page',
                    style: 'general/area.css',
                    showNavbar: true
                }, (err, html) => {
                  if (err) {
                    console.error('[PM] Houve um erro ao renderizar a página "', pageName ,'" erro:', err);
                    res.status(500).send('Erro interno do servidor');
                    return;
                  }
                  console.log('[PM] Você entrou na aba "', pageName ,'"');
                  res.send(html);
                });
              } catch (err) {
                console.error('[PM] Houve um erro ao entrar na página "', pageName ,'", erro:', err);
                res.status(500).send('Erro interno do servidor');
              }
        })
        // Linguagens
        router.get('/knowledge-areas/languages', (req, res) => {
            try {
                const pageName = 'Linguagens'
                res.render('user/pages/languages', {  
                    title: pageName +' - Page',
                    style: 'general/area.css',
                    showNavbar: true
                }, (err, html) => {
                  if (err) {
                    console.error('[PM] Houve um erro ao renderizar a página "', pageName ,'" erro:', err);
                    res.status(500).send('Erro interno do servidor');
                    return;
                  }
                  console.log('[PM] Você entrou na aba "', pageName ,'"');
                  res.send(html);
                });
              } catch (err) {
                console.error('[PM] Houve um erro ao entrar na página "', pageName ,'", erro:', err);
                res.status(500).send('Erro interno do servidor');
              }
        })
        // Math 
        router.get('/knowledge-areas/essay', (req, res) => {
            try {
                const pageName = 'Redação'
                res.render('user/pages/essay', {  
                    title: pageName +' - Page',
                    style: 'general/area.css',
                    showNavbar: true
                }, (err, html) => {
                  if (err) {
                    console.error('[PM] Houve um erro ao renderizar a página "', pageName ,'" erro:', err);
                    res.status(500).send('Erro interno do servidor');
                    return;
                  }
                  console.log('[PM] Você entrou na aba "', pageName ,'"');
                  res.send(html);
                });
              } catch (err) {
                console.error('[PM] Houve um erro ao entrar na página "', pageName ,'", erro:', err);
                res.status(500).send('Erro interno do servidor');
              }
        })
        // Math 
        router.get('/knowledge-areas/math', (req, res) => {
            try {
                const pageName = 'Matemática'
                res.render('user/pages/math', {  
                    title: pageName +' - Page',
                    style: 'general/area.css',
                    showNavbar: true
                }, (err, html) => {
                  if (err) {
                    console.error('[PM] Houve um erro ao renderizar a página "', pageName ,'" erro:', err);
                    res.status(500).send('Erro interno do servidor');
                    return;
                  }
                  console.log('[PM] Você entrou na aba "', pageName ,'"');
                  res.send(html);
                });
              } catch (err) {
                console.error('[PM] Houve um erro ao entrar na página "', pageName ,'", erro:', err);
                res.status(500).send('Erro interno do servidor');
              }
        })

module.exports = router