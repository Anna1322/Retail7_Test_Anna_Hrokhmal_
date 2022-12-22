describe('Creation an item', () => {
  it('Creation an item', () => {
    cy.visit('https://annahrokhmal.retail7.io/')
	
	 cy.get('input[type="text"]').type('annahrokhmal@gmail.com')
	 cy.get('input[type="password"]').type('retail7Test!')
	 cy.get('button[type="submit"]').click ()

	 cy.get('.breadcrumb-link > .c0r_core_i18nclientui > :nth-child(1) > [pn="c0r_ui_components_menu"] > div > span').click()
	 cy.get('[data-key="masterdata0"] > .navbar-item > .c0r_core_i18nclientui > :nth-child(1) > [pn="c0r_core_menu_controller"] > div > span').click ()
	 cy.get('[data-key="items0"] > .navbar-item > .c0r_core_i18nclientui > :nth-child(1) > [pn="c0r_core_menu_controller"] > div > span').click ()
	 cy.get('.navbar-item > .c0r_core_i18nclientui > :nth-child(1) > [pn="c0r_core_item_crud"] > div > span').click ()
	 cy.get('.main-button > :nth-child(1) > .btn-holder-primary > .btn > :nth-child(1) > .btn-text > .align-text > .c0r_core_i18nclientui > :nth-child(1) > [pn="c0r_core_crud"] > div > span').click ()
	 cy.get(':nth-child(1) > .custom-control-description > label > .c0r_core_i18nclientui > :nth-child(1) > [pn="c0r_core_item_crud"] > div > span').click()
	 cy.get('.c0r_core_item_crud > .c0r_ui_components_wizard > .gk_ui_components_modal > .modal > .modal-dialog > .modal-content > .modal-footer > .right-btn-button-wrapper > .gk_ui_components_button > .btn-holder-primary > .btn').click ()
	 cy.get('.form-array-container > :nth-child(1) > :nth-child(1) > .c0r_ui_components_form_renderer > .tab-content > .section > :nth-child(1) > .grid-style-wrap > .text > .c0r_core_form_builder > .form-element-height').type('Item test Anna')
	 cy.get('.unitlistprice > .c0r_core_form_builder > .form-element-height').type('100')
	 cy.get('.additional-column > .c0r_core_form_builder > .form-element-height > .c0r_ui_components_form_select_field > .select-field-group > .dropdown > .input-group > .form-control').click()
	 cy.get(':nth-child(1) > .dropdown-item > .c0r_core_i18nclientui > :nth-child(1) > [pn="c0r_data_taxmanager"] > div > span').click ()
	 cy.get('.modalDialogBtnSave > .btn-holder-primary > .btn > :nth-child(1) > .btn-text > .align-text > .c0r_core_i18nclientui > :nth-child(1) > [pn="c0r_core_crud"] > div > span').click ()
	 
	 })
 })



