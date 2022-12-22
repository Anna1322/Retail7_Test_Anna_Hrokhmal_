describe('Log in', () => {
  it('Sign in', () => {
    cy.visit('https://annahrokhmal.retail7.io/')
	
	 cy.get('input[type="text"]').type('annahrokhmal@gmail.com')
	 cy.get('input[type="password"]').type('retail7Test!')
	 cy.get('button[type="submit"]').click ()
	})
})