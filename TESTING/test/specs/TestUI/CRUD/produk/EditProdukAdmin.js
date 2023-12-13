const assert = require('assert');

describe('Edit Produk | Manager', () => {
    it('should login with valid email and valid password before accessing the edit product page', async () => {
        await testLogin('atalyars10@gmail.com', 'Atalya12345', 'http://127.0.0.1:8000/manager/beranda');
        await pauseFor5Seconds();
    });

    it('should edit product with valid data', async () => {
        // Navigate to the edit page
        await browser.url('http://127.0.0.1:8000/manager/produk/1/edit'); // Update the product ID accordingly
        await pauseFor5Seconds();

        // Fill out the form with new data
        const namaProdukInput = await $('input[name="nama_produk"]');
        await namaProdukInput.waitForExist();
        await namaProdukInput.setValue("Susu Organik Baru");

        const hargaInput = await $('input[name="harga"]');
        await hargaInput.setValue('30000');

        const keteranganInput = await $('textarea[name="keterangan"]');
        await keteranganInput.setValue('Susu organik murni dari peternakan terbaik. Lebih baik dan lebih segar!');


        // Submit the form
        const btnSimpan = $('.btn.btn-primary.btn-sm');
        await btnSimpan.waitForClickable();
        await btnSimpan.click();

        // Ensure successful navigation to Produk page
        await expect(browser).toHaveUrlContaining('/manager/produk');
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
