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
    cy.get(consts.DROP_BOX_MODEL).click()
    cy.wait(parameters.WAITING)
  });
});
