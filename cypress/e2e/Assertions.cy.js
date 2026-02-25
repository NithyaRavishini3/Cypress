describe("Assertions demo", ()=>{
//asssertions use to check validations
    it("Implicit assertions", ()=>{
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") //longe the url

        //1.should
        //example 1 - validation on url
        //usage of include, eq, and contain keywords with should
        cy.url().should('include', 'orangehrmlive.com') //include is a keyword; check whether"orangehrmlive.com" text is included in the url want to check
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //to check whether captured url is exactly similar to expected url
        cy.url().should('contain', 'orangehrm')//contain is doing the same thing in did include. check whether "orangehrm" text included in the url

        //another simple way of writing above code
        // cy.url().should('include', 'orangehrmlive.com') 
        // .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain', 'orangehrm')


        //2.and - used with multiple assertions
        // cy.url().should('include', 'orangehrmlive.com') //include is a keyword; check whether"orangehrmlive.com" text is included in the url want to check
        // .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //to check whether captured url is exactly similar to expected url
        // .and('contain', 'orangehrm')
        // .and('not.contain', 'greenhrm') //not keyword use in negetive assertions


        //example 2 - validation on title
        cy.title().should('include', 'Orange')//verify the title has 'Orange' text.
        .and('eq', 'OrangeHRM')
        .and('contain', 'HRM')

        //example 3 - validation on logo (using web elements)
        cy.get('.orangehrm-login-branding > img').should('be.visible')//check whether logo element is visible
        .and('exist')// to check the logo element is exist in the page

        //example 4 - check how many links available in the web page
        // "//a" use to go through with all links
        cy.xpath("//a").should('have.length', '5') // check whethere the page have 5 links (expected links count is 5)

    })
})