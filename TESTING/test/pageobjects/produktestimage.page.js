const fs = require('fs');

class TambahProdukAdminPage {
    get namaProduk() {
        return $('#nama_produk');
    }

    get harga() {
        return $('#harga');
    }

    get deskripsi() {
        return $('#keterangan');
    }

    get stok() {
        return $('#stok');
    }

    get kadaluwarsa() {
        return $('#kadaluwarsa');
    }

    get gambarInput() {
        return $('input[type="file"]');
    }

    get submitButton() {
        return $('button[type="submit"]');
    }

    async addProduct(namaProduk, harga, deskripsi, stok, kadaluwarsa, imagePath) {
        await this.namaProduk.setValue(namaProduk);
        await this.harga.setValue(harga);
        await this.deskripsi.setValue(deskripsi);
        await this.stok.setValue(stok);
        await this.kadaluwarsa.setValue(kadaluwarsa);

        // Upload image
        const imageBuffer = fs.readFileSync(imagePath);
        const base64Image = imageBuffer.toString('base64');
        await browser.execute((selector, value) => {
            document.querySelector(selector).style = 'display: block;';
            const input = document.querySelector(selector);
            const blob = new Blob([new Uint8Array(atob(value).split('').map(char => char.charCodeAt(0)))], { type: 'image/jpeg' });
            const file = new File([blob], 'susu.jpg', { type: 'image/jpeg' });
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            input.files = dataTransfer.files;
        }, this.gambarInput, base64Image);
    }

    async submitForm() {
        await this.submitButton.click();
    }
}

module.exports = new TambahProdukAdminPage();
