// // // ./test/api/apiTest.js

// // const axios = require("axios");
// // const assert = require('assert');

// // describe("API Testing", () => {
// //   it("should perform an API request", async () => {
// //     try{
// //       const response = await axios.get("http://localhost:9060/jenis_gereja");
// //     console.log(response.data);

// //     // Add assertions based on the response
// //     expect(response.status).toEqual(200);
// //     expect(response.data.result).toEqual("success");
// //     } catch(error){
// //       console.error('Error making API request:', error.message);

// //       throw error;
// //     }
// //   });
// // });
// const axios = require("axios");

// describe("API Testing", () => {
//   it("should perform an API request", async () => {
//     try {
//       const response = await axios.get("http://localhost:9060/jenis_gereja");
//       console.log("API Response:", response.data); // Log the entire response for debugging

//       // Add assertions based on the response
//       expect(response.status).toEqual(200);
//       // expect(response.data.result).toEqual("success");
//     } catch (error) {
//       // Log the error
//       console.error("Error making API request:", error.message);

//       // Throw the error again to mark the test as failed
//       throw error;
//     }
//   });

// });

// describe("Create",()=> {
//   it("should perform a POST API request with JSON data", async () => {
//     try {
//       const postData = {
//         jenis_gereja: "Nama Gereja",
//         keterangan: "Deskripsi Gereja",
//       };

//       const response = await axios.post(
//         "http://localhost:9060/jenis_gereja/",
//         postData
//       );
//       console.log("API Response:", response.data);

//       expect(response.status).toEqual(200); // Adjust the expected status code as needed
//     } catch (error) {
//       console.error("Error making API request:", error.message);
//       throw error;
//     }
//   });
// })

// describe("Delete", () => {
//   it("should perform a POST API request with JSON data", async () => {
//     try {
//       const postData = {
//         jenis_gereja: "Nama Gereja",
//         keterangan: "Deskripsi Gereja",
//       };

//       const response = await axios.post(
//         "http://localhost:9060/jenis_gereja/",
//         postData
//       );
//       console.log("API Response:", response.data);

//       expect(response.status).toEqual(200); // Adjust the expected status code as needed
//     } catch (error) {
//       console.error("Error making API request:", error.message);
//       throw error;
//     }
//   });
// });