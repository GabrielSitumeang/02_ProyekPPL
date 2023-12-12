describe('Tambah Laporan Kerbau Jantan | Peternak', () => {
    it('should login with valid email and valid password before access page peternak', async () => {

        await testLogin('peternak@gmail.com', 'Peternak2023', 'http://127.0.0.1:8000/peternak/beranda');
        await pauseFor5Seconds();

    });
    it('edit laporan with valid data', async () => {
        // Navigate to the page where editing is done
        await browser.url('http://127.0.0.1:8000/peternak/kerbau');
        await pauseFor5Seconds();

        // Identify the laporan you want to edit (assuming there's an existing laporan)
        // This might involve finding the element that represents the laporan in the list and clicking on it

        // Navigate to the edit page for the identified laporan
        // Replace 'YOUR_LAPORAN_ID' with the actual ID of the laporan you want to edit
        await browser.url('http://127.0.0.1:8000/peternak/kerbau/13/edit');
        await pauseFor5Seconds();

        // Update the laporan with new data
        const inputTanggal = await $('[name="tanggal"]');
        await inputTanggal.setValue('2023-12-30'); // Update tanggal

        const inputJumlahKerbau = await $('[name="jumlah_kerbau"]');
        await inputJumlahKerbau.setValue('12'); // Update jumlah_kerbau

        // Submit the updated laporan
        const simpanButton = await $('.btn.btn-primary.btn-sm[type="submit"]');
        await simpanButton.click();
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
