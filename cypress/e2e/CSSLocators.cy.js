describe('CSSLocators', () =>{
    it("csslocators", () => {

        cy.visit("https://practice.expandtesting.com/?utm_source=chatgpt.com")

        cy.get("#search-input").type("File Upload") //used id as locator if want can be use with tag cy.get("input#search-input").type("File Upload")
        //cy.get(.form-control).type("File Upload") //used class
        //cy.get("[placeholder='Search an example...']").type("File Upload") //used attribute (Name, placeholder etc.)
        //cy.get("input..form-control[placeholder='Search an example...']".type("File Upload") //used combination of tag, class and attribute for identify an element
        
        cy.get("[id='search-button']").click() //click action

        cy.get(".my-link").contains("File Upload") //verfying the result is displaying or not - assertions

    })
})