import { recurse } from 'cypress-recurse'
describe('Login test suite', ()=>{
    it('Login with valid username and password', ()=>{
        cy.visit('https://www.demoblaze.com/')
        cy.intercept("POST", "https://api.demoblaze.com/login").as("requestLogin")
        cy.get('#login2').click()
        clearAndType('#loginusername', 'duong-jmeter')
        cy.get('#loginpassword').type('test')
        cy.contains('button', 'Log in').click()
        cy.wait("@requestLogin").then((intercept)=>{
            cy.log(intercept.response.body)
        })
       
        cy.get('#nameofuser').should('have.text', 'Welcome duong-jmeter')
    })
})

function clearAndType(selector, text){
    recurse(
        () => cy.get(selector).clear().type(text),
        ($input) => $input.val() == text,
    )
}