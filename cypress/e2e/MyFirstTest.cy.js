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

//--Execution Types--
// 1. execute from the cypress application -> npx cypress open
// 2. execte through the command prompt (headless mode) -> npx cypress run
// 3. execute with the the browser directly (headed mode) -> npx cypress run --headed
// 4. execute specific file -> npx cypress run --spec --cypress\e2e\MyFirstTest.cy.js(location of the specification file)
// 5. execute through a browser you want (headless mode) -> npx cypress run --browser chrome
// 6. execute from the browser directly (headed mode) -> npx cypress run --browser chrome --headed