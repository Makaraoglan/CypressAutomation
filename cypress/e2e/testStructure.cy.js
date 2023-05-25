/// <reference types="cypress" />

describe('My first case', () =>{
    beforeEach(() =>{

    })
    beforeEach(() =>{
        cy.clearCookies();
    })

    after(() =>{

    })
    afterEach(() =>{

    })

    it('Open a web app',()=>{
        cy.visit('/registration_form');
    })

    it('test 2',()=>{
        expect(false).to.equal(false);
    })

    it('test 3',()=>{
        expect(false).not.to.equal(true);
    })
    it('test 4',()=>{
        expect(5).to.equal(5);
    })
    it('test 5',()=>{
        expect(true).to.equal('5'==5);
    })

})





















