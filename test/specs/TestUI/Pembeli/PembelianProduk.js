describe('Membeli Produk | Pembeli', () => {
    it('should login with valid email and valid password before access page pembeli', async () => {
        // await browser.url('http://127.0.0.1:8000/login')
        // const inputEmail = await $('#email');
        // await inputEmail.setValue('produksi@gmail.com');
        // const inputPassword = await $('#password');
        // await inputPassword.setValue('Adminproduksi1234567890');
        // await testLogin('produksi@gmail.com', 'Adminproduksi1234567890', 'http://127.0.0.1:8000/produksi/beranda');
        // const registerButton = await $('button[type="submit"]');
        // await registerButton.click();
        // await browser.url('http://127.0.0.1:8000/produksi/beranda')
        // it('should login with valid email and valid password', async () => {
        await testLogin('pembeli@gmail.com', 'Pembeli2023', 'http://127.0.0.1:8000/');
        await pauseFor5Seconds();

    });
    it('Masukkan Produk Kekeranjang', async () => {
        await browser.url('http://127.0.0.1:8000/produk')
        await pauseFor5Seconds();
        await browser.url('http://127.0.0.1:8000/pembeli/keranjang/3');
        await pauseFor5Seconds();

        // const inputTanggal = await $('[name="tanggal"]');
        // await inputTanggal.setValue('');
        // const inputJumlahSusu = await $('[name="jumlah_susu"]');
        // await inputJumlahSusu.setValue('3');

        // // assert.strictEqual(actualImagePath, expectedImagePath);
        // // const submitButton = await driver.findElement ('.btn.btn-primary.btn-sm');
        // const simpanButton = await $('.btn.btn-primary.btn-sm[type="submit"]');
        // await simpanButton.click();
        // await pauseFor5Seconds();
    })


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
//     // it('add product', async () => {
//     await
// });


















