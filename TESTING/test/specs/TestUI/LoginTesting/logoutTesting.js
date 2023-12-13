//Melakukan Login
const assert = require('assert');

describe('Laravel Project Testing', () => {
it('should login with valid email and valid password', async () => {
    await testLogin('atalyars10@gmail.com', 'Atalya12345', 'http://127.0.0.1:8000/dashboard');
    await pauseFor5Seconds();
});
});


async function testLogin(email, password, expectedUrl) {
// Mengunjungi halaman website
await browser.url('http://127.0.0.1:8000/login');

// Mengisi form login
const emailInput = await $('#email');
const passwordInput = await $('#password');

await emailInput.setValue(email);
await passwordInput.setValue(password);

const loginButton = await $('button[type="submit"]');
await loginButton.click();

await expect(browser).toHaveUrl(expectedUrl);
}

async function pauseFor5Seconds() {
await browser.pause(5000); // Pause for 5 seconds
}

//Melakukan logout
describe('Pengujian Tombol Logout', () => {
    it('Memeriksa fungsi logout setelah tombol Logout diklik', async () => {
      await browser.url('http://127.0.0.1:8000/dashboard'); 
  
      const logoutButton = await $('button.btn.btn-danger');
  
      // Melakukan klik pada tombol logout
      await logoutButton.click();

      const currentUrl = await browser.getUrl();
  
      const assert = require('assert');
      assert.strictEqual(currentUrl, 'http://127.0.0.1:8000/');

    });
  });