/// <reference types="cypress"/>

import LoginPage from '../pageObjects/LoginPage';

const loginPage = new LoginPage();

describe('Login Page Test', () => {
    it('should login successfully with valid credentials', () => {
        // Arrange
        const username = 'standard_user';
        const password = 'secret_sauce';

        // Act
        loginPage.visit();
        loginPage.login(username, password);

    });
});
