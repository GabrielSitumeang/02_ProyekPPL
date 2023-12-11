describe('Registration Page Test', () => {
    // it('register with all valid', async () => {
    //     await browser.url('http://127.0.0.1:8000/register');
    //     const inputName = await $('#name');
    //     await inputName.setValue('Produksi');
    //     const inputEmail = await $('#email');
    //     await inputEmail.setValue('produksi@gmail.com');
    //     const inputPassword = await $('#password');
    //     await inputPassword.setValue('Adminproduksi1234567890');
    //     const confirmPassword = await $('#password_confirmation');
    //     await confirmPassword.setValue('Adminproduksi1234567890');
    //     const registerButton = await $('button[type="submit"]');
    //     await registerButton.click();
    //     // Modify this line based on how your application handles successful registration
    //     await browser.url('http://127.0.0.1:8000/');
        // await pauseFor5Seconds();
    
    // it('register with empty all', async () => {
    //   await browser.url('http://127.0.0.1:8000/register');
    //   const inputName = await $('#name');
    //   await inputName.setValue('');
    //   const inputEmail = await $('#email');
    //   await inputEmail.setValue('');
    //   const inputPassword = await $('#password');
    //   await inputPassword.setValue('');
    //   const confirmPassword = await $('#password-confirmation');
    //   await confirmPassword.setValue('');
    //   const registerButton = await $('button[type="submit"]');
    //   await registerButton.click();
    //   // Modify this line based on how your application handles successful registration
    //   await browser.url('http://127.0.0.1:8000/');
    //   await pauseFor5Seconds();
    // });

    it('register with empty password ', async () => {
        await browser.url('http://127.0.0.1:8000/register');
        const inputName = await $('#name');
        await inputName.setValue('Produksi');
        const inputEmail = await $('#email');
        await inputEmail.setValue('produksi@gmail.com');
        const inputPassword = await $('#password');
        await inputPassword.setValue('');
        const confirmPassword = await $('#password_confirmation');
        await confirmPassword.setValue('');
        const registerButton = await $('button[type="submit"]');
        await registerButton.click();
        // Modify this line based on how your application handles successful registration
        // await pauseFor5Seconds();
      });

      it('register with empty name', async () => {
        await browser.url('http://127.0.0.1:8000/register');
        const inputName = await $('#name');
        await inputName.setValue('');
        const inputEmail = await $('#email');
        await inputEmail.setValue('produksi@gmail.com');
        const inputPassword = await $('#password');
        await inputPassword.setValue('Adminproduksi1234567890');
        const confirmPassword = await $('#password_confirmation');
        await confirmPassword.setValue('Adminproduksi1234567890');
        const registerButton = await $('button[type="submit"]');
        await registerButton.click();
      //   // Modify this line based on how your application handles successful registration
      //   await pauseFor5Seconds();
      });

      it('register with empty email ', async () => {
        await browser.url('http://127.0.0.1:8000/register');
        const inputName = await $('#name');
        await inputName.setValue('Produksi');
        const inputEmail = await $('#email');
        await inputEmail.setValue('');
        const inputPassword = await $('#password');
        await inputPassword.setValue('Adminproduksi1234567890');
        const confirmPassword = await $('#password_confirmation');
        await confirmPassword.setValue('Adminproduksi1234567890');
        const registerButton = await $('button[type="submit"]');
        await registerButton.click();
      //   // Modify this line based on how your application handles successful registration
      //   await pauseFor5Seconds();
      });

      it('register with empty email ', async () => {
        await browser.url('http://127.0.0.1:8000/register');
        const inputName = await $('#name');
        await inputName.setValue('Produksi');
        const inputEmail = await $('#email');
        await inputEmail.setValue('');
        const inputPassword = await $('#password');
        await inputPassword.setValue('Adminproduksi1234567890');
        const confirmPassword = await $('#password_confirmation');
        await confirmPassword.setValue('Adminproduksi1234567890');
        const registerButton = await $('button[type="submit"]');
        await registerButton.click();
      //   // Modify this line based on how your application handles successful registration
      //   await pauseFor5Seconds();
      });
      it('register with empty password confirmation ', async () => {
        await browser.url('http://127.0.0.1:8000/register');
        const inputName = await $('#name');
        await inputName.setValue('Produksi');
        const inputEmail = await $('#email');
        await inputEmail.setValue('produksi@gmail.com');
        const inputPassword = await $('#password');
        await inputPassword.setValue('Adminproduksi1234567890');
        const confirmPassword = await $('#password_confirmation');
        await confirmPassword.setValue('');
        const registerButton = await $('button[type="submit"]');
        await registerButton.click();
      //   // Modify this line based on how your application handles successful registration
      //   await pauseFor5Seconds();
      });

      it('register with success ', async () => {
        await browser.url('http://127.0.0.1:8000/register');
        const inputName = await $('#name');
        await inputName.setValue('Produksi');
        const inputEmail = await $('#email');
        await inputEmail.setValue('produksi@gmail.com');
        const inputPassword = await $('#password');
        await inputPassword.setValue('Adminproduksi1234567890');
        const confirmPassword = await $('#password_confirmation');
        await confirmPassword.setValue('Adminproduksi1234567890');
        const registerButton = await $('button[type="submit"]');
        await registerButton.click();
      //   // Modify this line based on how your application handles successful registration
      //   await pauseFor5Seconds();
      });
    

    });



    

    // it('register with valid name, invalid email, invalid password', async () => {
    //     await regisTest('produksi@gmail.com', 'aldline', 'qqqqq', 'http://127.0.0.1:8000/register')
    // });

    // it('should display an error message for invalid registration', async () => {
    //     await browser.url('http://127.0.0.1:8000/register');

    //     const inputName = await $('#name');
    //     await inputName.setValue('Produksi');

    //     const inputEmail = await $('#email');
    //     await inputEmail.setValue('produksi@gmail.com');

    //     const inputPassword = await $('#password');
    //     await inputPassword.setValue('Adminproduksi1234567890');

    //     const confirmPassword = await $('#password_confirmation');
    //     await confirmPassword.setValue('Adminproduksi1234567890'); // Invalid confirmation password

    //     const registerButton = await $('button[type="submit"]');
    //     await registerButton.click();

        // Modify this line based on how your application handles invalid registration attempts
        // await expect($('.error-message')).toHaveText('Passwords do not match');

        // async function regisTest(name, email, password, password_confirmation, expectedUrl) {
        //     // Mengunjungi halaman web
        //     await browser.url('http://127.0.0.1:8000/register');
          
        //     // Mengisi formulir registrasi
        //     const inputName = await $('#name');
        //     const inputEmail = await $('#email');
        //     const inputPassword = await $('#password');
        //     const confirmPassword = await $('#password_confirmation');

        //     await inputName.setValue(name);
        //     await inputEmail.setValue(email);
        //     await inputPassword.setValue(password);
        //     await confirmPassword.setValue(password_confirmation)
          
        //     const loginButton = await $('button[type="submit"]');
        //     await loginButton.click();
          
        //     await browser.url('http://127.0.0.1:8000/')
        //   }
          
          // async function pauseFor5Seconds() {
          //   await browser.pause(5000); // Pause for 5 seconds
          // }
        



// const assert = require('assert');

// describe('Password Validation and Strength Meter', () => {
//     // Let's assume your page is loaded and ready for testing

//     it('should display an error message for weak passwords', () => {
//         // Replace 'your-website.com' with the actual URL of your website
//         browser.url('http://127.0.0.1:8000/register');

//         // Input a weak password
//         const passwordInput = $('#password');
//         passwordInput.setValue('weakpassword');

//         // Click outside the password input to trigger the validation
//         // This may vary based on your actual implementation
//         browser.pause(1000); // Adjust the pause time as needed

//         // Verify that the error message is displayed
//         const errorMessage = $('#password-error');
//         assert.equal(errorMessage.getText(), 'Password harus kuat dan memenuhi persyaratan yang ditetapkan.');
//     });

//     it('should update the password strength meter', () => {
//         // Input a password
//         const passwordInput = $('#password');
//         passwordInput.setValue('strongpassword123');

//         // Wait for the strength meter to update
//         browser.pause(1000); // Adjust the pause time as needed

//         // Verify that the strength meter is updated
//         const strengthMeter = $('#password-strength');
//         const progressBar = strengthMeter.$('.progress-bar');
//         const strengthText = strengthMeter.$('.mt-1');

//         // Assuming you have a function to determine the expected color
//         const expectedColor = getProgressBarColor(4); // 4 for 'Very Strong'

//         assert.equal(progressBar.getCSSProperty('background-color').parsed.hex, expectedColor);
//         assert.equal(strengthText.getText(), 'Very Strong');
//     });

//     // Add more test cases for other features/functions as needed

//     // Don't forget to close the browser session after the tests
//     after(() => {
//         browser.closeWindow();
//     });
// });
