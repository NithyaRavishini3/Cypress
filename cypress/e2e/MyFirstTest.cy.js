describe('My First Test', () => { //describe keyword is to write a test suite

  it('verify title-positive test', () => { //you can write multipe "it" clauses inside a suite - it representing a "Test"
    //steps
    cy.visit("https://opensource-demo.orangehrmlive.com/") //longe to the web page
    cy.title().should('eq', 'OrangeHRM') //assetion to verify title of the web page
  })

    it('verify title-Negative test', () => { //you can write multipe "it" clauses inside a suite - it representing a "Test"
    //steps
    cy.visit("https://opensource-demo.orangehrmlive.com/") //longe to the web page
    cy.title().should('eq', 'OrangeHRM123') //verify title of the web page
  })
})

//this is another way to write above one
// describe('My First Test', function() {
//   it('Does not do much!', function() {
//     expect(true).to.equal(true)
//   })
// })