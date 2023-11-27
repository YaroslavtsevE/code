import consts from './consts.js';
import { parameters } from './test_params.js';

describe("drom", function () {

  function deleteSlots() {
    cy.wait(parameters.WAITING);
  }

  it("find_auto", function () {
    cy.visit(consts.URL_DROM)
    cy.get(consts.HEADER_REGION_ELEMENT).should('have.text',consts.HEADER_REGION)
    cy.get(consts.NAV_AUTO).should('have.text',consts.NAV_AUTO_TEXT).click()
    cy.get(consts.NAV_AUTO).should('have.text',consts.NAV_AUTO_TEXT).click()
    cy.get(consts.DROPBOX_MODEL).click()
    cy.wait(parameters.WAITING)
    cy.get(consts.DROPBOX_MODEL_TOYOTA).should('include.text',consts.DROPBOX_MODEL_TOYOTA_TEXT).click()
    cy.wait(parameters.WAITING)
    cy.get(consts.INPUT_PRICE_FROM).type(consts.INPUT_PRICE_FROM_VALUE)
    cy.get(consts.INPUT_PRICE_TO).type(consts.INPUT_PRICE_TO_VALUE)
    cy.get(consts.CHECKBOX_PHOTO).click({ force: true })
    cy.get(consts.CHECKBOX_PHOTO).should('be.checked')
    cy.get(consts.BUTTON_SUBMIT).click()
  });
});
