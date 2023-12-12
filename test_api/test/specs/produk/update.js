const axios = require("axios");
const { expect } = require('chai');

describe("API PUT Testing", () => {
  // valid data
  it("should perform a PUT API request (valid data)", async () => {
    try {
      const putData = {
        id: "1",
        nama_produk: "susu_kuat",
        harga: "40000",
        stok: "35",
        keterangan: "dijual",
      };

      const response = await axios.put(
        "http://127.0.0.1:8000/produk/2",
        putData
      );
      console.log("API Response:", response.data);

      expect(response.status).equal(200); // Adjust the expected status code as needed
    } catch (error) {
      console.error("Error making API request:", error.message);
      throw error;
    }
  });

  // update hanya nama produk
  it("should perform a PUT API request (valid data)", async () => {
    try {
      const putData = {
        nama_produk: "susu_coklat",
      };

      const response = await axios.put(
        "http://127.0.0.1:8000/produk/1",
        putData
      );
      console.log("API Response:", response.data);

      expect(response.status).equal(200); // Adjust the expected status code as needed
    } catch (error) {
      console.error("Error making API request:", error.message);
      throw error;
    }
  });

  // update hanya harga
  it("should perform a PUT API request (valid data)", async () => {
    try {
      const putData = {
        harga: "50000",
      };

      const response = await axios.put(
        "http://127.0.0.1:8000/produk/1",
        putData
      );
      console.log("API Response:", response.data);

      expect(response.status).equal(200); // Adjust the expected status code as needed
    } catch (error) {
      console.error("Error making API request:", error.message);
      throw error;
    }
  });
  // update hanya stok
  it("should perform a PUT API request (valid data)", async () => {
    try {
      const putData = {
        stok: "5",
      };

      const response = await axios.put(
        "http://127.0.0.1:8000/produk/1",
        putData
      );
      console.log("API Response:", response.data);

      expect(response.status).equal(200); // Adjust the expected status code as needed
    } catch (error) {
      console.error("Error making API request:", error.message);
      throw error;
    }
  });

  // update hanya keterangan
  it("should perform a PUT API request (valid data)", async () => {
    try {
      const putData = {
        keterangan: "habis",
      };

      const response = await axios.put(
        "http://127.0.0.1:8000/produk/1",
        putData
      );
      console.log("API Response:", response.data);

      expect(response.status).equal(200); // Adjust the expected status code as needed
    } catch (error) {
      console.error("Error making API request:", error.message);
      throw error;
    }
  });
});