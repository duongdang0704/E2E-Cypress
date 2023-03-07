const{QueryPage} = require('../pages/query-page');

describe('Queries test suite', ()=>{
    it.only('Test query list', ()=>{
        cy.visit('/commands/querying');
        cy.get(QueryPage.queryList).contains('apples').should('have.class', 'first');
    })
})