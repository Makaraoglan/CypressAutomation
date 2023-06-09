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

        cy.get('button').each((item,index,list)=>{

            expect(list).to.have.length(6);
            expect(item).to.have.attr('onclick');
        })
        cy.get('button').each((item)=>{

            if(item.text()=="Button 4"){

                cy.log(item.text());
                //item.click();
                cy.wrap(item).click();
                cy.contains('Clicked on button four!').should('be.visible');
            }
          
        })

    })

})








