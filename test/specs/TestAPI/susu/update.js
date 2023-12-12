const axios = require("axios");
const { expect } = require('chai');

describe("API PUT Testing", () => {
  // valid data
  it("should perform a PUT API request (valid data)", async () => {
    try {
      const putData = {
        id: "1",
        pelapor: "Edgar",
        tanggal: "12-12-2023",
        jumlah_susu: "35",
      };

      const response = await axios.put(
        "http://127.0.0.1:8000/susu/2",
        putData
      );
      console.log("API Response:", response.data);

      expect(response.status).equal(200); // Adjust the expected status code as needed
    } catch (error) {
      console.error("Error making API request:", error.message);
      throw error;
    }
  });

  // update hanya pelapor
  it("should perform a PUT API request (valid data)", async () => {
    try {
      const putData = {
        nama_susu: "susu_coklat",
      };

      const response = await axios.put(
        "http://127.0.0.1:8000/susu/1",
        putData
      );
      console.log("API Response:", response.data);

      expect(response.status).equal(200); // Adjust the expected status code as needed
    } catch (error) {
      console.error("Error making API request:", error.message);
      throw error;
    }
  });

  // update hanya tanggal
  it("should perform a PUT API request (valid data)", async () => {
    try {
      const putData = {
        tanggal: "21-12-2023",
      };

      const response = await axios.put(
        "http://127.0.0.1:8000/susu/1",
        putData
      );
      console.log("API Response:", response.data);

      expect(response.status).equal(200); // Adjust the expected status code as needed
    } catch (error) {
      console.error("Error making API request:", error.message);
      throw error;
    }
  });

  // jumlah susu
  it("should perform a PUT API request (valid data)", async () => {
    try {
      const putData = {
        jumlah_susu: "35",
      };

      const response = await axios.put(
        "http://127.0.0.1:8000/susu/1",
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