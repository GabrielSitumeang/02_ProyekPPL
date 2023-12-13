describe('Membeli Produk | Pembeli', () => {
    it('should login with valid email and valid password before accessing the pembeli page', async () => {
        await testLogin('sthevanimanurung29@gmail.com', '29Maret2002', 'http://127.0.0.1:8000/produk');
        await pauseFor5Seconds();
    });

    it('should add a product to the cart', async () => {
        await browser.url('http://127.0.0.1:8000/produk');
        await pauseFor5Seconds();

        await browser.url('http://127.0.0.1:8000/pembeli/keranjang/6');
        await pauseFor5Seconds();

        for (let i = 0; i < 2; i++) {
            const plusButton = await $('.btn-num-product-up');
            await plusButton.click();
            await pauseFor5Seconds();
        }

        const selectAlamat = await $('[name="address"]');
        await selectAlamat.selectByVisibleText('Kabupaten Tapanuli Utara');
        await pauseFor5Seconds();

        const masukkanKeranjangButton = await $('button[type="submit"]');
        await masukkanKeranjangButton.click();
        await pauseFor5Seconds();

        
    // Redirect to the cart page
    await browser.url('http://127.0.0.1:8000/keranjang');
    await pauseFor5Seconds();
    });

    it('should proceed to checkout and fill in profile information', async () => {
        await browser.url('http://127.0.0.1:8000/keranjang');
        await pauseFor5Seconds();

        const selectAddress = await $('#select2-address-yi-container');
        await selectAddress.click();
        const kabupatenTapanuliUtara = await $('span*=Kabupaten Tapanuli Utara');
        await kabupatenTapanuliUtara.click();

        const checkoutButton = await $('.flex-c-m.stext-101.cl0.size-116.bg3.bor14.hov-btn3.p-lr-15.trans-04.pointer');
        await checkoutButton.click();
        await pauseFor5Seconds();

        // Replace '4' with the actual order ID
        const orderId = '4'; // Replace with your logic to get the order ID
        await expect(browser).toHaveUrl(`http://127.0.0.1:8000/history/${orderId}`);
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

async function pauseFor5Seconds() {
    await browser.pause(5000); // Pause for 5 seconds
}
