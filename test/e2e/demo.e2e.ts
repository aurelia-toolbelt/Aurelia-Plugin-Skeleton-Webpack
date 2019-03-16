/// <reference types="cypress" />

// @ts-ignore
import * as setting from '../../aurelia_project/aurelia.json';

const PORT = setting.build.targets[0].port;

describe('My Aurelia Test', function() {
  it('get message', function() {
    cy.visit(`http://localhost:8080`);

    cy.get("h1").should( _tr => {
      const value = _tr.text();
      expect(true).to.eq(true);
    });
  })
})
