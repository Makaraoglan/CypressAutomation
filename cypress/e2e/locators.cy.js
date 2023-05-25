/// <reference types="cypress" />

describe('find or get elements by diff locators', () =>{
    
    beforeEach(() =>{
        cy.clearCookies();
        cy.visit('/login');
    })

    it('different locators',()=>{
        cy.get("input[name='username']").type('CydeoStudent');

        cy.get("[type='text']").clear();

        cy.get("input").each((item, index, list)=>{

            expect(list).to.have.length(2);
            expect(item).to.have.attr("type");

        })

        //attribute name
        cy.get("[type]");

        //by className locator
        cy.get('.btn.btn-primary');

        //by id locator
        cy.get("#wooden_spoon");

        cy.get('button').should('contain','Login').click();

    })

})