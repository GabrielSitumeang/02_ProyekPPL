const axios = require("axios");
const { expect } = require('chai');

describe("API GET Testing", () => {
  it("should perform an API request", async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/produk/");
      console.log("API Response:", response.data); // Log the entire response for debugging

      // Add assertions based on the response
      expect(response.status).equal(200);
      // expect(response.data.result).toEqual("success");
    } catch (error) {
      // Log the error
      console.error("Error making API request:", error.message);

      // Throw the error again to mark the test as failed
      throw error;
    }
  });
});
