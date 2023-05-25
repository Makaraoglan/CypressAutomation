

describe('CSSLocators', () =>{

it("csslocators",  () => {
    cy.visit("http://www.etsy.com/")

    cy.get("#global-enhancements-search-query").type("T-shirts")

    cy.get("button[value='Search']").click()

    cy.get("h2[class='wt-text-title-01 wt-mb-xs-4']").contains("discover")

    cy.xpath()
    


})

})