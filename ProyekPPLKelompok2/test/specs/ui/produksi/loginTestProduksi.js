// // 
// describe('Login Page Test', () => {
//     it('should display an error message for invalid login', async () => {
//         await browser.url('http://127.0.0.1:8000/login');

//         const inputEmail = await $('#email');
//         await inputEmail.setValue('invaliduser@gmail.com'); // Use an invalid email

//         const inputPassword = await $('#password');
//         await inputPassword.setValue('invalidpassword'); // Use an invalid password

//         const loginButton = await $('button[type="submit"]');
//         await loginButton.click();

//         // Modify this line based on how your application handles invalid login attempts
//         await expect(browser).toHaveText('.error-message', 'Invalid username or password');
//     });
// });

describe('Laravel Project Testing', () => {
    it('should not login with empty email and empty password', async () => {
        await testLogin('', '', 'http://127.0.0.1:8000/login');
        await pauseFor5Seconds();
    });
  
    it('should not login with valid email and invalid password', async () => {
        await testLogin('produksi@gmail.com', 'angel', 'http://127.0.0.1:8000/login');
        await pauseFor5Seconds();
    });
  
    it('should not login with invalid email and valid password', async () => {
        await testLogin('angel@gmail.com', 'Adminproduksi1234567890', 'http://127.0.0.1:8000/login');
        await pauseFor5Seconds();
    });
  
    it('should not login with invalid email and invalid password', async () => {
        await testLogin('angel@gmail.com', 'angel', 'http://127.0.0.1:8000/login');
        await pauseFor5Seconds();
    });
  
    it('should not login with empty email and valid password', async () => {
        await testLogin('', 'Adminproduksi1234567890', 'http://127.0.0.1:8000/login');
        await pauseFor5Seconds();
    });
  
    it('should not login with valid email and empty password', async () => {
        await testLogin('produksi@gmail.com', '', 'http://127.0.0.1:8000/login');
        await pauseFor5Seconds();
    });
  
    it('should login with valid email and valid password', async () => {
        await testLogin('produksi@gmail.com', 'Adminproduksi1234567890', 'http://127.0.0.1:8000/produksi/beranda');
        await pauseFor5Seconds();
    });
  });
  
  async function testLogin(email, password, expectedUrl) {
    // Mengunjungi halaman web
    await browser.url('http://127.0.0.1:8000/login');
  
    // Mengisi formulir login
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
