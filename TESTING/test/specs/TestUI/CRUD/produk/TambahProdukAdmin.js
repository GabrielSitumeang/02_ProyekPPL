const assert = require('assert');
const path = require('path');

describe('Testing Tambah Produk | Manager', () => {
    it('should login with valid email and valid password before accessing the product page', async () => {
        await testLogin('atalyars10@gmail.com', 'Atalya12345', 'http://127.0.0.1:8000/manager/beranda');
        await pauseFor5Seconds();
    })

    it('should not send data with an empty All Data', async () => {
        await fillAndSubmitForm('', '', '', '', '', '');
    })

    it('should not send data with an empty InputProductname', async () => {
        await fillAndSubmitForm('', '20000', 'Susu Kerbau Segar Morrah Farm', '10', '01-10-2024', 'D:\\ProjekPPL\\ProjectPPLBenar\\02_ProyekPPL\\TestMocha\\image\\susu.jpg');
    });

    it('should not send data with an empty hargaInput', async () => {
        await fillAndSubmitForm('Susu Vanilla', '', 'Susu Kerbau Segar Morrah Farm', '10', '01-10-2024', 'D:\\ProjekPPL\\ProjectPPLBenar\\02_ProyekPPL\\TestMocha\\image\\susu.jpg');
    });

    it('should not send data with an empty inputDeskripsi', async () => {
        await fillAndSubmitForm('Susu Vanilla', '2000', '', '10', '01-10-2024', 'D:\\ProjekPPL\\ProjectPPLBenar\\02_ProyekPPL\\TestMocha\\image\\susu.jpg');
    });

    it('should not send data with an empty inputStok', async () => {
        await fillAndSubmitForm('Susu Vanilla', '2000', 'Susu Kerbau Segar Morrah Farm', '', '01-10-2024', 'D:\\ProjekPPL\\ProjectPPLBenar\\02_ProyekPPL\\TestMocha\\image\\susu.jpg');
    });

    it('should not send data with an empty inputTanggal', async () => {
        await fillAndSubmitForm('Susu Vanilla', '2000', 'Susu Kerbau Segar Morrah Farm', '10', '', 'D:\\ProjekPPL\\ProjectPPLBenar\\02_ProyekPPL\\TestMocha\\image\\susu.jpg');
    });

    it('should not send data with an empty inputImage', async () => {
        await fillAndSubmitForm('Susu Vanilla', '2000', 'Susu Kerbau Segar Morrah Farm', '10', '01-10-2024', '');
    });

    it('should add product with valid data', async () => {
        const imagePath = 'D:\\ProjekPPL\\ProjectPPLBenar\\02_ProyekPPL\\TestMocha\\image\\susu.jpg';
        await fillAndSubmitForm('Susu Vanilla', '2000', 'Susu Kerbau Segar Morrah Farm', '10', '01-10-2024', imagePath);
        await pauseFor5Seconds();
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

async function fillAndSubmitForm(namaProduk, harga, deskripsi, stok, tanggal, imagePath) {
    await browser.url('http://127.0.0.1:8000/manager/produk');
    await pauseFor5Seconds();
    await browser.url('http://127.0.0.1:8000/manager/produk/create');
    await pauseFor5Seconds();

    const inputNamaBarang = await $('[name="nama_produk"]');
    await inputNamaBarang.setValue(namaProduk);

    const inputHarga = await $('[name="harga"]');
    await inputHarga.setValue(harga);

    const inputDeskripsi = await $('[name="keterangan"]');
    await inputDeskripsi.setValue(deskripsi);

    const inputStok = await $('[name="stok"]');
    await inputStok.setValue(stok);

    const inputTanggal = await $('[name="kadaluwarsa"]');
    await inputTanggal.setValue(tanggal);

    const inputImage = $('[name="gambar"]');
    
    // Check if imagePath is not empty before setting the value
    if (imagePath) {
        await inputImage.setValue(imagePath);
    }

    const simpanButton = $('.btn.btn-primary.btn-sm[type="submit"]');
    await simpanButton.click();

    // Change the pause duration to 3000 milliseconds
    await browser.pause(3000);

    // Navigate back to the 'create' page
    await browser.url('http://127.0.0.1:8000/manager/produk/create');

    // Pause for 3000 milliseconds
    await browser.pause(3000);
}

async function pauseFor5Seconds() {
    await browser.pause(5000);
}
