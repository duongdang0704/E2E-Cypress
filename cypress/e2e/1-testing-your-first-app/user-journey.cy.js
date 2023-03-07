describe('User journey', ()=>{
    it('User selects a course and study', ()=>{
        cy.getBySel('course-0').find('a').eq(3).click()
        cy.location('pathname').should('eq', '/testing-your-first-application')
        cy.getBySel('next-lesson-button').click()
        cy.location('pathname').should('eq', '/testing-your-first-application/app-install-and-overview')
        cy.getBySel('challenge-answer-0').check()
        cy.getBySel('next-lesson-button').find('a').click()
        cy.location('pathname').should('eq', '/testing-your-first-application/installing-cypress-and-writing-our-first-test')
    })
})