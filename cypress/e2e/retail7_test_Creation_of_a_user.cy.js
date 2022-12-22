describe('Creation of a user', () => {
  it('Creation of a user', () => {
    cy.visit('https://annahrokhmal.retail7.io/')
	
	 cy.get('input[type="text"]').type('annahrokhmal@gmail.com')
	 cy.get('input[type="password"]').type('retail7Test!')
	 cy.get('button[type="submit"]').click ()

	 cy.get('.breadcrumb-link > .c0r_core_i18nclientui > :nth-child(1) > [pn="c0r_ui_components_menu"] > div > span').click()
	 cy.get('[data-key="access_rights9"] > .navbar-item > .c0r_core_i18nclientui > :nth-child(1) > [pn="c0r_core_menu_controller"] > div > span').click ()
	 cy.get('.navbar-item > .c0r_core_i18nclientui > :nth-child(1) > [pn="c0r_core_right_system_user_crud"] > div > span').click()
	 cy.get({waitForAnimations:10000})
	 cy.get('.main-button > :nth-child(1) > .btn-holder-primary > .btn > :nth-child(1) > .btn-text > .align-text > .c0r_core_i18nclientui > :nth-child(1) > [pn="c0r_core_crud"] > div > span').click()
	 cy.get({waitForAnimations:8000})
	 cy.get('.Email > .c0r_core_form_builder > .form-element-height').type('777777999@gmail.com')
	 cy.get('.FirstName > .c0r_core_form_builder > .form-element-height').type('Anna')
    cy.get(':nth-child(2) > .grid-style-wrap > .additional-column > .c0r_core_form_builder > .form-element-height').type('Hrokhmal')
    cy.get('.grid-style-wrap > .c0r_core_form_builder > .form-element-height > .c0r_ui_components_form_select_field > .select-field-group > .selections').click()
    cy.get(':nth-child(3) > .dropdown-item > .c0r_core_i18nclientui > :nth-child(1) > [pn="c0r_core_right_system_user_crud"] > div > span').click()
    cy.get('.password > .c0r_core_form_builder > .form-element-height').type('A12345678')
	 cy.get('.Password > :nth-child(1) > :nth-child(1) > .c0r_ui_components_form_renderer > .tab-content > .section > .arrangement > .grid-style-wrap > .additional-column > .c0r_core_form_builder > .form-element-height').type('A12345678')
	 cy.get('.modalDialogBtnSave > .btn-holder-primary > .btn > :nth-child(1) > .btn-text > .align-text > .c0r_core_i18nclientui > :nth-child(1) > [pn="c0r_core_crud"] > div > span').click()
	
})
})