const axios = require("axios");
const { expect } = require('chai');

describe("API PUT Testing", () => {
  // valid data
  it("should perform a PUT API request (valid data)", async () => {
    try {
      const putData = {
        id: 6,
        produk_id: 1,
        pesanan_id: "2",
        ongkir_id: "2",
       jumlah: "3",
        jumlah_harga: "120000",
      };

      const response = await axios.put(
        "http://127.0.0.1:8000/pesananDetails/6",
        putData
      );
      console.log("API Response:", response.data);

      expect(response.status).equal(200); // Adjust the expected status code as needed
    } catch (error) {
      console.error("Error making API request:", error.message);
      throw error;
    }
  });

  // valid data
  it("should perform a PUT API request (valid data)", async () => {
    try {
      const putData = {
        produk_id: "5",
      };

      const response = await axios.put(
        "http://127.0.0.1:8000/pesananDetails/6",
        putData
      );
      console.log("API Response:", response.data);

      expect(response.status).equal(200); // Adjust the expected status code as needed
    } catch (error) {
      console.error("Error making API request:", error.message);
      throw error;
    }
  });

  // valid data
  it("should perform a PUT API request (valid data)", async () => {
    try {
      const putData = {
        pesanan_id: "5",
      };

      const response = await axios.put(
        "http://127.0.0.1:8000/pesananDetails/6",
        putData
      );
      console.log("API Response:", response.data);

      expect(response.status).equal(200); // Adjust the expected status code as needed
    } catch (error) {
      console.error("Error making API request:", error.message);
      throw error;
    }
  });
  // valid data
  it("should perform a PUT API request (valid data)", async () => {
    try {
      const putData = {
        ongkir_id: "5",
      };

      const response = await axios.put(
        "http://127.0.0.1:8000/pesananDetails/6",
        putData
      );
      console.log("API Response:", response.data);

      expect(response.status).equal(200); // Adjust the expected status code as needed
    } catch (error) {
      console.error("Error making API request:", error.message);
      throw error;
    }
  });

  // valid data
  it("should perform a PUT API request (valid data)", async () => {
    try {
      const putData = {
        jumlah: 70,
      };

      const response = await axios.put(
        "http://127.0.0.1:8000/pesananDetails/6",
        putData
      );
      console.log("API Response:", response.data);

      expect(response.status).equal(200); // Adjust the expected status code as needed
    } catch (error) {
      console.error("Error making API request:", error.message);
      throw error;
    }
  });

  // valid data
  it("should perform a PUT API request (valid data)", async () => {
    try {
      const putData = {
        jumlah_harga: 1800000,
      };

      const response = await axios.put(
        "http://127.0.0.1:8000/pesananDetails/6",
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
