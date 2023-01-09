/**
 * - Login spec
 *   - should display login page correctly
 *   - should disable login button when email and password are empty
 *   - should disable login button when email is empty
 *   - should disable login button when password is empty
 *   - should show email invalid message when email format is wrong or empty
 *   - should show password invalid message when password is empty
 *   - should not show email invalid message when email format is correct
 *   - should not show password invalid message when password is not empty
 *   - should display alert when email and password are wrong
 *   - should display threads page when email and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display login page correctly', () => {
    cy.get('input[placeholder="Email"]').should('be.visible')
    cy.get('input[placeholder="Password"]').should('be.visible')
    cy.get('button')
      .contains(/^Login$/)
      .should('be.visible')
  })

  it('should disable button when email and password are empty', () => {
    cy.get('input[placeholder="Email"]').should('be.visible')
    cy.get('input[placeholder="Password"]').should('be.visible')
    cy.get('button')
      .contains(/^Login$/)
      .should('be.disabled')
  })

  it('should disable login button when email is empty', () => {
    cy.get('input[placeholder="Email"]').should('be.visible')
    cy.get('input[placeholder="Password"]').should('be.visible')

    cy.get('input[placeholder="Email"]').type('test1234asdf@gmail.com')

    cy.get('button')
      .contains(/^Login$/)
      .should('be.disabled')
  })

  it('should disable login button when password is empty', () => {
    cy.get('input[placeholder="Email"]').should('be.visible')
    cy.get('input[placeholder="Password"]').should('be.visible')

    cy.get('input[placeholder="Password"]').type('12345678')

    cy.get('button')
      .contains(/^Login$/)
      .should('be.disabled')
  })

  it('should show email invalid message when email format is wrong or empty', () => {
    cy.get('input[placeholder="Email"]').click()
    cy.get('body').click(0, 0)

    cy.get('small')
      .contains(/^Email tidak valid$/)
      .should('be.visible')

    cy.get('input[placeholder="Email"]').type('test1234asdf')
    cy.get('body').click(0, 0)

    cy.get('small')
      .contains(/^Email tidak valid$/)
      .should('be.visible')
  })

  it('should show password invalid message when password is empty', () => {
    cy.get('input[placeholder="Password"]').click()
    cy.get('body').click(0, 0)

    cy.get('small')
      .contains(/^Password tidak valid$/)
      .should('be.visible')
  })

  it('should not show email invalid message when email format is correct', () => {
    cy.get('input[placeholder="Email"]').type('test1234asdf@gmail.com')
    cy.get('body').click(0, 0)

    cy.get('small')
      .contains(/^Email tidak valid$/)
      .should('not.exist')
  })

  it('should not show password invalid message when password is not empty', () => {
    cy.get('input[placeholder="Password"]').type('12345678')
    cy.get('body').click(0, 0)

    cy.get('small')
      .contains(/^Password tidak valid$/)
      .should('not.exist')
  })

  it('should display alert when email and password are wrong', () => {
    cy.get('input[placeholder="Email"]').type('asdf@gmail.com')
    cy.get('input[placeholder="Password"]').type('wrong_password')
    cy.get('button')
      .contains(/^Login$/)
      .click()

    cy.on('window:alert', (message) => {
      expect(message).to.equal('email or password is wrong')
    })
  })

  it('should display threads page when email and password are correct', () => {
    cy.get('input[placeholder="Email"]').type('test1234asdf@gmail.com')
    cy.get('input[placeholder="Password"]').type('12345678')
    cy.get('button')
      .contains(/^Login$/)
      .click()

    cy.get('header')
      .contains(/^Discussy$/)
      .should('be.visible')
    cy.get('h1')
      .contains(/^Diskusi Tersedia$/)
      .should('be.visible')
    cy.get('h2')
      .contains(/^Pilih kategori terkini$/)
      .should('be.visible')
    cy.get('a')
      .contains(/^Threads$/)
      .should('be.visible')
    cy.get('a')
      .contains(/^Leaderboard$/)
      .should('be.visible')
    cy.get('a')
      .contains(/^Create$/)
      .should('be.visible')
    cy.get('button').contains('Logout').should('be.visible')
  })
})
