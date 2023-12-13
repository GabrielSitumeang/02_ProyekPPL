describe('Laravel Project Production Login Testing', () => {
    it('should not login with empty email and empty password', async () => {
        await testLogin('', '', 'http://127.0.0.1:8000/login');
        await pauseFor5Seconds();
    });

    it('should not login with valid email and invalid password', async () => {
        await testLogin('productionmorrahfarm@gmail.com', 'invalidPassword', 'http://127.0.0.1:8000/login');
        await pauseFor5Seconds();
    });

    it('should not login with invalid email and valid password', async () => {
        await testLogin('invalidEmail@gmail.com', 'ProductionMorrah12345', 'http://127.0.0.1:8000/login');
        await pauseFor5Seconds();
    });

    it('should not login with invalid email and invalid password', async () => {
        await testLogin('invalidEmail@gmail.com', 'invalidPassword', 'http://127.0.0.1:8000/login');
        await pauseFor5Seconds();
    });

    it('should not login with empty email and valid password', async () => {
        await testLogin('', 'ProductionMorrah12345', 'http://127.0.0.1:8000/login');
        await pauseFor5Seconds();
    });

    it('should not login with valid email and empty password', async () => {
        await testLogin('productionmorrahfarm@gmail.com', '', 'http://127.0.0.1:8000/login');
        await pauseFor5Seconds();
    });

    it('should login with valid email and password for produksi', async () => {
        await testLogin('productionmorrahfarm@gmail.com', 'ProductionMorrah12345', 'http://127.0.0.1:8000/produksi/beranda');
        await pauseFor5Seconds();
    });
});

async function testLogin(email, password, expectedUrl) {
    // Visit the login page
    await browser.url('http://127.0.0.1:8000/login');

    // Fill in the login form
    const emailInput = await $('#email');
    const passwordInput = await $('#password');

    await emailInput.setValue(email);
    await passwordInput.setValue(password);

    // Click the login button
    const loginButton = await $('button[type="submit"]');
    await loginButton.click();

    // Check if the URL matches the expected URL after successful login
    await expect(browser).toHaveUrl(expectedUrl);
}

async function pauseFor5Seconds() {
    await browser.pause(5000); // Pause for 5 seconds
}
