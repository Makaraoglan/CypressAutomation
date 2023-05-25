/// <reference types="cypress" />

describe('Buttons', () =>{
    
    beforeEach(() =>{
        cy.clearCookies();
        cy.visit('/multiple_buttons');
    })

    it('check diff button options',()=>{
        //select a button with text
        cy.contains('Button 2').should('be.visible').click();
        cy.contains('Clicked on button two!').should('be.visible');


        cy.get(".btn.btn-primary").then((buttons)=>{
            cy.wrap(buttons).eq(2).click();

            cy.contains('Clicked on button three!').should('be.visible');
        })

    })

})








