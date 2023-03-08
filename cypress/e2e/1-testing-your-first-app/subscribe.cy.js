describe('Subscribe for update', ()=>{
    it('User can subscribe with valid email', ()=>{
        cy.getBySel('email-input').type('duong@gmail.com')
        cy.getBySel('submit-button').click();
        cy.getBySel('success-message').should('exist').contains('duong@gmail.com')
    })
    it('User cannot subscribe with invalid email', ()=>{
        cy.getBySel('email-input').type('duong')
        cy.getBySel('submit-button').click();
        cy.getBySel('success-message').should('not.exist')
    })

    it.only('User cannot subscribe with the existed email', ()=>{
        cy.getBySel('email-input').type('john@example.com')
        cy.getBySel('submit-button').click();
        cy.getBySel('server-error-message').should('exist').contains('john@example.com')
    })
})