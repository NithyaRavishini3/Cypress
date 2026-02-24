describe('XPathLocators', () =>{

    it('find total no of blocks', () =>{

        cy.visit("https://practice.expandtesting.com/?utm_source=chatgpt.com")
        cy.xpath("//section[@id='examples']/div").should('have.length',22)
    })

     it('chained xpath', () =>{ //another way with mutiple xpaths

        cy.visit("https://practice.expandtesting.com/?utm_source=chatgpt.com")
        cy.xpath("//section[@id='examples']").xpath("./div").should('have.length',22) 

        //outputs are not correct but code is correct
    })
})