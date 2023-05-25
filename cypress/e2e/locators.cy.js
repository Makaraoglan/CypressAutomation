/// <reference types="cypress" />

describe('find or get elements by diff locators', () =>{
    
    beforeEach(() =>{
        cy.clearCookies();
        cy.visit('/login');
    })

    xit('different locators',()=>{
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

    xit('Check finding elements by traveling through DOM',()=>{

        cy.get('input[name="username"]').parents('form').find('button').should('contain','Login').click();
    })
    it('Check different type of assertions',()=>{

        //should assertions
        cy.get('#wooden_spoon').should('contain','Login').and('have.class','btn btn-primary');
       //expect assertions
        cy.get('#wooden_spoon').then((buttonElement)=>{
            expect(buttonElement).to.have.text('Login');
            expect(buttonElement).to.have.class('btn btn-primary');

        })
    })
        
})