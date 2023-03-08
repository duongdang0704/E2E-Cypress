describe('Book a flight', ()=>{
    before('Preconditions', ()=>{
        cy.on("uncaught:exception", (e, runnable) => {
            console.log("error", e);
            console.log("runnable", runnable);
            return false;
        });
    })
   
    it.only('Book a flight', ()=>{
        cy.visit('https://blazedemo.com/');
        cy.get('[name="fromPort"]').select('Boston')
        cy.get('[name="toPort"]').select('London')
        cy.get('input[value="Find Flights"]').click()
        cy.get('[name="AL969"]').next().click()
        cy.get('#inputName').type("Duong")
        cy.get('#address').type("58 Applestone")
        cy.get('#city').type("Edmonton")
        cy.get('#state').type("Ontario")
        cy.get('#zipCode').type("N3E 7TF")
        cy.get('#cardType').select('American Express')
        cy.get('#creditCardMonth').type('11')
        cy.get('#creditCardYear').type('2024')
        cy.get('#nameOnCard').type('John Smith')
        cy.get('#rememberMe').check()
        cy.get('input[value="Purchase Flight"]').click()
        cy.get('h1').should('contain.text', 'Thank you for your purchase today!')
    })
})