describe('CSSLocators', () =>{
    it("csslocators", () => {

        cy.visit("https://practice.expandtesting.com/?utm_source=chatgpt.com")

        cy.get("#search-input").type("File Upload") //used id as locator if want can be use with tag cy.get("input#search-input").type("File Upload")

        cy.get("[id='search-button']").click() //click action

        cy.get(".my-link").contains("File Upload") //verfying the result is displaying or not - assertions

    })
})