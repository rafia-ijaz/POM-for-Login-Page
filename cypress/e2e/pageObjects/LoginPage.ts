/// <reference types="cypress"/>


class LoginPage {
    usernameInput = '#user-name'; //This property stores the CSS selector
    passwordInput = '#password';
    loginButton = '#login-button';
// Defining these selectors as properties makes it easy to reuse them in multiple methods within the class without hardcoding them repeatedly, reducing duplication and making updates simpler.


    visit() {
        cy.visit('https://www.saucedemo.com/');
    }

    enterUsername(username: string) {
        cy.get(this.usernameInput).type(username);
    }// This method types a given username string into the username input field

    enterPassword(password: string) {
        cy.get(this.passwordInput).type(password);
    }

    clickLogin() {
        cy.get(this.loginButton).click();
    }

    login(username: string, password: string) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    } // This method is useful for tests that need to log in with specific credentials, providing a single call to handle the entire login sequence.
}

export default LoginPage; // By exporting the class, tests can create instances of LoginPage to use its methods for interacting with the login page.

