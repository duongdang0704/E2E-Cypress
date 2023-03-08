describe('Home page', ()=>{
    context('Hero section', ()=>{
        it('Navigate to correct page', ()=>{

            cy.getBySel('hero-heading')
            .should('exist')
            .contains('Testing Your First Application')
        })
    
        // it('Features on home page are correct', ()=>{
        //     cy.get('dt').then($items => {
        //         expect($items[0]).to.have.text('4 Courses')
        //         expect($items[1]).to.have.text('25+ Lessons')
        //         expect($items[2]).to.have.text('Free and Open Source')
        //     })
           
        //     cy.get('dt').eq(0).contains('4 Courses')
        //     let features = ['4 Courses', '25+ Lessons', 'Free and Open Source']
        //     cy.get('dt').each(($item, index) => {
        //         expect($item).to.have.text(features[index])
        //     })
        })
    })
    // context('Course section', ()=>{
    //     it('Navigate to Testing Your First Next.js Application course', ()=>{
    //         cy.getBySel('course-0').find('a').eq(3).click()
    //         cy.location('pathname').should('eq', '/testing-your-first-application')
    //     })
    //     it('Navigate to Testing Foundations course', ()=>{
    //         cy.getBySel('course-1').find('a').contains('Get started').click()
    //         cy.location('pathname').should('eq', '/testing-foundations')
    //     })
    //     it('Navigate to Cypress Fundamentals course', ()=>{
    //         cy.getBySel('course-2').find('a').contains('Get started').click()
    //         cy.location('pathname').should('eq', '/cypress-fundamentals')
    //     })
    // })
})