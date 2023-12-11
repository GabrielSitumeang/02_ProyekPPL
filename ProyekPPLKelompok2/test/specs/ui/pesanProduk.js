describe('Buy Product Test', () => {
    it('should allow user to login', async () => {
        await browser.url('http://127.0.0.1:8000/login'); 

        const inputEmail = await $('#email');
        await inputEmail.setValue('manager@gmail.com'); 

        const inputPassword = await $('#password');
        await inputPassword.setValue('Adminmanager1234567890'); 

        const loginButton = await $('button[type="submit"]');
        await loginButton.click();

        await expect(browser).toHaveUrlContaining('http://127.0.0.1:8000/'); 
        
        await expect(browser).toHaveUrlContaining('http://127.0.0.1:8000/produk'); 

        await expect(browser).toHaveUrlContaining('http://127.0.0.1:8000/pembeli/keranjang/1'); 
        




    });
});