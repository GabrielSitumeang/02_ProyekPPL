describe('Testing Tambah Produk|Produksi', () => {
    it('should login with valid email and valid password before access page produksi', async () => {
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
        await testLogin('produksi@gmail.com', 'Adminproduksi1234567890', 'http://127.0.0.1:8000/produksi/beranda');
        await pauseFor5Seconds();
    });
    it('add product with empty nama barang', async () => {
        await browser.url('http://127.0.0.1:8000/produksi/produksiproduk')
        await browser.url('http://127.0.0.1:8000/produksi/produksiproduk/create');
        const inputNamaBarang = await $('#nama_produk');
        await inputNamaBarang.setValue('');
        const inputHarga = await $('#harga'); 
        await inputHarga.setValue('100000');
        const inputDeskripsi = await $('#keterangan');
        await inputDeskripsi.setValue('segar dan enak');
        const inputStok = await $('#stok');
        await inputStok.setValue('10');
        // const 
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
    // it('add product', async () => {
    //     await
    // });
