describe('test', () => {
      it("validation", () => {

         cy.visit("https://google.com/")
         cy.title().should('eq','Google')


      })


})
