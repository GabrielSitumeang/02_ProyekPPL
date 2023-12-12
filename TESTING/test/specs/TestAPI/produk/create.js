const axios = require("axios");
const { expect } = require('chai');

describe("API POST Testing", () => {
  // valid
  it("should perform a POST API request with JSON data (valid data)", async () => {
    try {
      const postData = {
        id: "1",
        nama_produk: "susu_krim",
        harga: "20000",
        stok: "20",
        keterangan: "pre-order"
      };

      const response = await axios.post(
        "http://127.0.0.1:8000/produk/",
        postData
      );
      console.log("API Response data valid:", response.data);

      expect(response.status).equal(200); // Adjust the expected status code as needed
    } catch (error) {
      console.error("Error making API request:", error.message);
      throw error;
    }
  });

  it("should perform a POST API request with JSON data (valid data)", async () => {
    try {
      const postData = {
        id: "2",
        nama_produk: "susu_fermentasi",
        harga: "45000",
        stok: "15",
        keterangan: "pre-order"
      };

      const response = await axios.post(
        "http://127.0.0.1:8000/produk/",
        postData
      );
      console.log("API Response data valid:", response.data);

      expect(response.status).equal(200); // Adjust the expected status code as needed
    } catch (error) {
      console.error("Error making API request:", error.message);
      throw error;
    }
  });

});
