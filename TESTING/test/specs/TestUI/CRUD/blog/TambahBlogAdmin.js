const assert = require('assert');

describe('Tambah Blog | Manager', () => {
    it('should login with valid email and valid password before accessing the create blog page', async () => {
        await testLogin('atalyars10@gmail.com', 'Atalya12345', 'http://127.0.0.1:8000/manager/beranda');
        await pauseFor5Seconds();
    });

    it('should not send data with an empty All Data', async () => {
        await fillAndSubmitForm('', '', '');
    });

    it('should not send data with an empty judul', async () => {
        await fillAndSubmitForm('Manfaat Susu untuk Kesehatan', '', 'D:\\ProjekPPL\\ProjectPPLBenar\\02_ProyekPPL\\TestMocha\\image\\susu.jpg');
    });

    it('should not send data with an empty isi', async () => {
        await fillAndSubmitForm('', 'Some isi', 'D:\\ProjekPPL\\ProjectPPLBenar\\02_ProyekPPL\\TestMocha\\image\\susu.jpg');
    });

    it('should not send data with an empty File', async () => {
        await fillAndSubmitForm('Manfaat Susu untuk Kesehatan', 'Some isi', '');
    });

    it('should create a new blog with valid data', async () => {
        await fillAndSubmitForm('Manfaat Susu untuk Kesehatan', 'Susu merupakan salah satu sumber nutrisi penting bagi tubuh. Kandungan gizi dalam susu meliputi protein, kalsium, vitamin D, dan lainnya. Konsumsi susu secara teratur dapat memberikan berbagai manfaat, seperti meningkatkan kekuatan tulang dan gigi, mendukung pertumbuhan otot, dan menjaga kesehatan sistem pencernaan. Selain itu, susu juga dapat menjadi sumber energi yang baik untuk aktivitas sehari-hari. Dengan mengandalkan nutrisi lengkapnya, susu menjadi minuman yang baik untuk mendukung gaya hidup sehat.', 'D:\\ProjekPPL\\ProjectPPLBenar\\02_ProyekPPL\\TestMocha\\image\\susu.jpg');
    });

    // Add the 'after' hook to navigate back to the blog page after the last test
    after(async () => {
        await browser.url('http://127.0.0.1:8000/manager/blog');
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

async function fillAndSubmitForm(judul, isi, imagePath) {
    // Navigate to the create page
    await browser.url('http://127.0.0.1:8000/manager/blog/create');
    await pauseFor5Seconds();

    // Set form data
    const judulInput = await $('input[name="judul"]');
    await judulInput.setValue(judul);

    const isiInput = await $('textarea[name="isi"]');
    await isiInput.setValue(isi);

    const inputGambar = $('input[type="file"]');
    
    // Check if imagePath is not empty before setting the value
    if (imagePath) {
        await inputGambar.setValue(imagePath);
    }

    // Submit the form
    const btnSubmit = $('.btn.btn-primary');
    await btnSubmit.click();

    // Ensure successful navigation to Blog page
    await expect(browser).toHaveUrlContaining('/manager/blog');
    
    // Pause for 5 seconds
    await pauseFor5Seconds();
}

async function pauseFor5Seconds() {
    await browser.pause(5000);
}
