describe("Payment", () => {
  it("allows user to add products to basket, log in and then pay.", () => {
    cy.visit("/");

    // find product in list and click
    cy.findAllByAltText("Final Fantasy XIV").click();

    // click add to cart
    cy.findByRole("button", { name: /add to cart/i }).click();

    // click cart icon
    cy.findByRole("link", { name: /go to cart/i }).click();

    // click continue to checkout
    cy.findByRole("button", { name: /continue to checkout/i }).click();

    // log in
    cy.findByRole("textbox", { name: /email/i }).type("test@test.com");
    cy.findByLabelText("Password:").type("testing123");
    cy.findByRole("button", { name: /sign in/i }).click();

    // enter address and payment details
    cy.findByRole("textbox", { name: /first name/i }).type("John");
    cy.findByRole("textbox", { name: /last name/i }).type("Doe");
    cy.findByRole("textbox", { name: /address line 1/i }).type("1 Test Street");
    cy.findByRole("textbox", { name: /city/i }).type("Testville");
    cy.findByRole("textbox", { name: /county/i }).type("Testshire");
    cy.findByRole("textbox", { name: /postal code/i }).type("TE333ST");
    cy.findByRole("textbox", { name: /card number/i }).type("4242424242424242");
    cy.findByRole("textbox", { name: /expiration/i }).type("1223");
    cy.findByRole("textbox", { name: /cvc/i }).type("123");
    cy.findByPlaceholderText(/ws11 1db/i).type("TE333ST");

    // click pay
    cy.findByRole("button", { name: /pay/i }).click();
  });
});
