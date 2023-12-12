const axios = require("axios");
const { expect } = require('chai');

describe("API POST Testing", () => {
  // valid
  it("Valid data for pesanan details ", async () => {
    try {
      const postData = {
        id: 30,
        produk_id: 1,
        pesanan_id: "1",
        ongkir_id: "1",
        jumlah: "3",
        jumlah_harga: "80000",
        // user_id: 240
      };

      const response = await axios.post(
        "http://127.0.0.1:8000/pesananDetails/",
        postData
      );
      console.log("API Response data valid:", response.data);

      expect(response.status).equal(200); // Adjust the expected status code as needed
    } catch (error) {
      console.error("Error making API request:", error.message);
      throw error;
    }
  });

  // invalid
  it("Invalid data for pesanan_details create data without id", async () => {
    try {
      const postData = {
        // id: 1,
        produk_id: 1,
        pesanan_id: "1",
        ongkir_id: "1",
        jumlah: "3",
        jumlah_harga: "80000",
      };

      const response = await axios.post(
        "http://127.0.0.1:8000/pesananDetails/",
        postData,
        {
          // Define a custom validateStatus function
          validateStatus: function (status) {
            // Only consider HTTP status codes less than 500 as successful
            return status < 500;
          },
        }
      );
      // console.log(status)
      console.log("API Response data:", response.status);
      // Check if the response status is 400
      if (response.status === 400) {
        // Handle the error within the try block
        console.error("Received a 400 Bad Request error:", response.data);

        // Perform any additional actions based on the error response
        // For example, you might want to check specific error messages in the response
        if (
          response.data &&
          response.data.includes("Field validation failed")
        ) {
          // Handle validation error specific to your application
          console.error("Field validation failed.");
        }

        // Continue with other logic or throw a new custom error if needed
      } else {
        // Continue with processing the response if the status is not 400
        console.log("API Response data:", response.data);
      }
    } catch (error) {
      // Handle other errors or log them as needed
      console.error("Error making API request:", error.message);
      throw error;
    }
  });

  // invalid
  it("Invalid data for pesanan_details create data without produk_id", async () => {
    try {
      const postData = {
        id: 31,
        // produk_id: 1,
        pesanan_id: "1",
        ongkir_id: "1",
        jumlah: "3",
        jumlah_harga: "80000",
      };

      const response = await axios.post(
        "http://127.0.0.1:8000/pesananDetails/",
        postData,
        {
          // Define a custom validateStatus function
          validateStatus: function (status) {
            // Only consider HTTP status codes less than 500 as successful
            return status < 500;
          },
        }
      );
      // console.log(status)
      console.log("API Response data:", response.status);
      // Check if the response status is 400
      if (response.status === 400) {
        // Handle the error within the try block
        console.error("Received a 400 Bad Request error:", response.data);

        // Perform any additional actions based on the error response
        // For example, you might want to check specific error messages in the response
        if (
          response.data &&
          response.data.includes("Field validation failed")
        ) {
          // Handle validation error specific to your application
          console.error("Field validation failed.");
        }

        // Continue with other logic or throw a new custom error if needed
      } else {
        // Continue with processing the response if the status is not 400
        console.log("API Response data:", response.data);
      }
    } catch (error) {
      // Handle other errors or log them as needed
      console.error("Error making API request:", error.message);
      throw error;
    }
  });

  // invalid
  it("Invalid data for pesanan_details create data without pesanan_id", async () => {
    try {
      const postData = {
        id: 32,
        produk_id: 1,
        // pesanan_id: "1",
        ongkir_id: "1",
        jumlah: "3",
        jumlah_harga: "80000",
      };

      const response = await axios.post(
        "http://127.0.0.1:8000/pesananDetails/",
        postData,
        {
          // Define a custom validateStatus function
          validateStatus: function (status) {
            // Only consider HTTP status codes less than 500 as successful
            return status < 500;
          },
        }
      );
      // console.log(status)
      console.log("API Response data:", response.status);
      // Check if the response status is 400
      if (response.status === 400) {
        // Handle the error within the try block
        console.error("Received a 400 Bad Request error:", response.data);

        // Perform any additional actions based on the error response
        // For example, you might want to check specific error messages in the response
        if (
          response.data &&
          response.data.includes("Field validation failed")
        ) {
          // Handle validation error specific to your application
          console.error("Field validation failed.");
        }

        // Continue with other logic or throw a new custom error if needed
      } else {
        // Continue with processing the response if the status is not 400
        console.log("API Response data:", response.data);
      }
    } catch (error) {
      // Handle other errors or log them as needed
      console.error("Error making API request:", error.message);
      throw error;
    }
  });

  // invalid
  it("Invalid data for pesanan_details create data without ongkir_id", async () => {
    try {
      const postData = {
                id: 32,
                produk_id: 1,
                pesanan_id: "1",
                // ongkir_id: "1",
                jumlah: "3",
                jumlah_harga: "80000",
      };

      const response = await axios.post(
        "http://127.0.0.1:8000/pesanaDetails/",
        postData,
        {
          // Define a custom validateStatus function
          validateStatus: function (status) {
            // Only consider HTTP status codes less than 500 as successful
            return status < 500;
          },
        }
      );
      // console.log(status)
      console.log("API Response data:", response.status);
      // Check if the response status is 400
      if (response.status === 400) {
        // Handle the error within the try block
        console.error("Received a 400 Bad Request error:", response.data);

        // Perform any additional actions based on the error response
        // For example, you might want to check specific error messages in the response
        if (
          response.data &&
          response.data.includes("Field validation failed")
        ) {
          // Handle validation error specific to your application
          console.error("Field validation failed.");
        }

        // Continue with other logic or throw a new custom error if needed
      } else {
        // Continue with processing the response if the status is not 400
        console.log("API Response data:", response.data);
      }
    } catch (error) {
      // Handle other errors or log them as needed
      console.error("Error making API request:", error.message);
      throw error;
    }
  });

  // invalid
  it("Invalid data for pesanan_details create data without jumlah", async () => {
    try {
      const postData = {
                id: 33,
                produk_id: 1,
                pesanan_id: "1",
                ongkir_id: "1",
                // jumlah: "3",
                jumlah_harga: "80000",
      };

      const response = await axios.post(
        "http://127.0.0.1:8000/pesananDetails/",
        postData,
        {
          // Define a custom validateStatus function
          validateStatus: function (status) {
            // Only consider HTTP status codes less than 500 as successful
            return status < 500;
          },
        }
      );
      // console.log(status)
      console.log("API Response data:", response.status);
      // Check if the response status is 400
      if (response.status === 400) {
        // Handle the error within the try block
        console.error("Received a 400 Bad Request error:", response.data);

        // Perform any additional actions based on the error response
        // For example, you might want to check specific error messages in the response
        if (
          response.data &&
          response.data.includes("Field validation failed")
        ) {
          // Handle validation error specific to your application
          console.error("Field validation failed.");
        }

        // Continue with other logic or throw a new custom error if needed
      } else {
        // Continue with processing the response if the status is not 400
        console.log("API Response data:", response.data);
      }
    } catch (error) {
      // Handle other errors or log them as needed
      console.error("Error making API request:", error.message);
      throw error;
    }
  });

  // valid
  it("should perform a POST API request with JSON data (valid data)", async () => {
    try {
      const postData = {
        id: 2,
        produk_id: 2,
        pesanan_id: "2",
        ongkir_id: "2",
       jumlah: "3",
        jumlah_harga: "80000",
      };

      const response = await axios.post(
        "http://127.0.0.1:8000/pesananDetails/",
        postData
      );
      console.log("API Response data valid:", response.data);

      expect(response.status).equal(200); // Adjust the expected status code as needed
    } catch (error) {
      console.error("Error making API request:", error.message);
      throw error;
    }
  });

  // invalid
  it("should perform a POST API request with JSON data (valid data)", async () => {
    try {
      const postData = {
        id: 34,
        produk_id: 3,
        pesanan_id: "3",
        ongkir_id: "3",
       jumlah: "3",
        jumlah_harga: "80000",
        // user_id: 240,
      };

      const response = await axios.post(
        "http://127.0.0.1:8000/pesananDetails/",
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
