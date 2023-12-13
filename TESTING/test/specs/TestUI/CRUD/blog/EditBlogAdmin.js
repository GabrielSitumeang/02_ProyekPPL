const assert = require('assert');

describe('Edit Blog | Manager', () => {
    it('should login with valid email and valid password before accessing the edit blog page', async () => {
        await testLogin('atalyars10@gmail.com', 'Atalya12345', 'http://127.0.0.1:8000/manager/beranda');
        await pauseFor5Seconds();
    });

    it('should edit blog with valid data', async () => {
        // Navigate to the edit page
        await browser.url('http://127.0.0.1:8000/manager/blog/edit/2'); 
        await pauseFor5Seconds();

        // Fill out the form with new data
        const judulInput = await $('input[name="judul"]');
        await judulInput.waitForExist();
        await judulInput.setValue("Susu Organik Baru");

        const isiInput = await $('textarea[name="isi"]');
        await isiInput.setValue('Susu organik murni dari peternakan terbaik. ');

        // Submit the form
        const btnSimpan = $('.btn.btn-primary'); // Fix the selector here
        await btnSimpan.waitForClickable();
        await btnSimpan.click();

        // Ensure successful navigation to Blog page
        await expect(browser).toHaveUrlContaining('/manager/blog');

        // Pause for 5 seconds
        await pauseFor5Seconds();

        // Navigate back to the previous page (you may need to adjust the URL)
        await browser.url('http://127.0.0.1:8000/manager/blog');
    });
});

async function testLogin(email, password, expectedUrl) {
    await browser.url('http://127.0.0.1:8000/login');
    const emailInput = await $('#email');
    const passwordInput = await $('#password');
    await emailInput.setValue(email);
    await passwordInput.setValue(password);
    const loginButton = await $('button[type="submit"]');
    await loginButton.click();
    await expect(browser).toHaveUrl(expectedUrl);
}

async function pauseFor5Seconds() {
    await browser.pause(5000);
}
