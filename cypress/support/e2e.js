// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// import './commands'

// Alternatively you can use CommonJS syntax:
require('./commands')


before(()=>{
    console.log('Before all tests');
})
beforeEach(()=>{
    cy.visit('/')
    console.log('Before each tests');
})
after(()=>{
    console.log('After all tests');
})
afterEach(()=>{
    console.log('after each tests');
})