const axios = require("axios");
const { expect } = require('chai');

describe("API POST Testing", () => {
  // valid
  it("should perform a POST API request with JSON data (valid data)", async () => {
    try {
      const postData = {
        id : "1",
        pelapor : "sadrakh",
        tanggal : "23-11-2023",
        jumlah_susu : "150",
      };

      const response = await axios.post(
        "http://127.0.0.1:8000/susu/",
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
        id : "2",
        pelapor : "Albertus",
        tanggal : "04-11-2023",
        jumlah_susu : "200",
      };

      const response = await axios.post(
        "http://127.0.0.1:8000/susu/",
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
