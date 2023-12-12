describe('Tambah Laporan Kerbau Jantan | Peternak', () => {
    it('should login with valid email and valid password before access page peternak', async () => {
        await testLogin('peternak@gmail.com', 'Peternak2023', 'http://127.0.0.1:8000/peternak/beranda');
        await pauseFor5Seconds();

    });
    it('delete laporan', async () => {
        // Navigate to the page where deleting is done
        await browser.url('http://127.0.0.1:8000/peternak/susu');
        await pauseFor5Seconds();

        const deleteButton = await $('.btn.btn-danger.btn-sm.text-center.btndelete');
        await deleteButton.click();
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
