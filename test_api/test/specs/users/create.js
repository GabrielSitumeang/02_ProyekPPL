const axios = require("axios");
const { expect } = require('chai');

describe("API POST Testing", () => {
  // valid
  it("should perform a POST API request with JSON data (valid data)", async () => {
    try {
      const postData = {
        email: "gabriel@gmail.com",
        password:
          "$2y$10$0gOUtyUt5MNdNizpjyfzye8oz8VwOSsPLwUNV8cnJFmBDiTBkpqVy",
      };

      const response = await axios.post(
        "http://127.0.0.1:8000/user/",
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
