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
    })

})