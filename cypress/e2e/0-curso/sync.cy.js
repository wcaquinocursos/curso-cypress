/// <reference types="cypress" />

describe('Esperas...', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    it('Deve aguardar elemento estar disponivel', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })

    it('Deve fazer retrys', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo')
            // .should('not.exist')
            .should('exist')
            .type('funciona')

    })

    it('Uso do find', () => {
        cy.get('#buttonListDOM').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        // cy.get('#lista li')
        //     .find('span')
        //     .should('contain', 'Item 2')
        cy.get('#lista li span')
            .should('contain', 'Item 2')

    })

    it('Uso do timeout', () => {
        // cy.get('#buttonDelay').click()
        // cy.get('#novoCampo', { timeout: 1000 }).should('exist')

        // cy.get('#buttonListDOM').click()
        // // cy.wait(5000)
        // cy.get('#lista li span', { timeout: 30000 })
        //     .should('contain', 'Item 2')

        cy.get('#buttonListDOM').click()
        cy.get('#lista li span')
            .should('have.length', 1)
        cy.get('#lista li span')
            .should('have.length', 2)
    })

    it('Click retry', () => {
        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value', '111')
    })

    it('Should vs Then', () => {
        cy.get('#buttonListDOM').then($el => {
            // .should('have.length', 1)
            // console.log($el)
            expect($el).to.have.length(1)
            cy.get('#buttonList')
        })
    })

})
