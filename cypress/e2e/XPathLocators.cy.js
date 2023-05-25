require('@cypress/xpath');


describe('Xpath locators', () =>{

    it('find no of products', () =>{
        cy.visit("http://www.etsy.com/")

        cy.xpath("//a").should('have.length',461)

    })

})