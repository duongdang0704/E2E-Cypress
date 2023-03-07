
describe.only('actions test suite', () => {
  it.only('can type on textbox', () => {
    cy.visit('/');
    cy.contains('Actions').scrollIntoView().click({force: true});
    cy.get('#email1').type('duong@gmail.com');
    cy.get('#email1').should('have.value', 'duong@gmail.com');
  })

  it.only('can type on disabled textarea with force option', () => {
    cy.visit('/');
    cy.contains('Actions').scrollIntoView().click({force: true});
    cy.get('.form-control.action-disabled').type('duong@gmail.com', {force:true});
    cy.get('.form-control.action-disabled').should('have.value','duong@gmail.com');
    cy.document().then((doc)=>{
      debugger;
      var cssStyle = getComputedStyle(doc.querySelector('.form-control.action-disabled'), "");
      for(var i = 0; i < cssStyle.length; i++){
        console.log(cssStyle.getPropertyValue(cssStyle[i]));
      }
    })
  })
})