const axios = require('axios');
const { expect } = require('chai');

describe('API DELETE Testing', () => {
  it('should perform a DELETE API request', async () => {
    try {
      // Specify the ID you want to delete
      const deleteId = 30;

      // Make the DELETE request
      const response = await axios.delete(
        `http://127.0.0.1:8000/pesananDetails/${deleteId}`
      );

      console.log('API Response:', response.data);

      // Expect a successful response (adjust the expected status code as needed)
      expect(response.status).to.equal(200);
    } catch (error) {
      console.error('Error making API request:', error.message);
      throw error;
    }
  });
});
