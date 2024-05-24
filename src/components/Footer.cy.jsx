import React from "react";
import Footer from "./Footer";
import { useStore } from "../data/store";

describe("<Footer />", () => {
  const day = "söndag";
  it("renders", () => {
    cy.mount(<Footer />);
    useStore.setState({ todayName: day });
    cy.get('[ data-cy="today"]').contains(day).should("be.visible");
  });
});
