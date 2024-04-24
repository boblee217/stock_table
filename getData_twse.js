const axios = require("axios"); // Include this line if you are using Node.js
const { getCurrentDateFormatted } = require("./utils");

const stockNo = "0050"; // 台灣50
// current date

/**
 * @returns 
 * {
  "Code": "string",
  "Name": "string",
  "ClosingPrice": "string",
  "MonthlyAveragePrice": "string"
} */
async function getAllStockToday() {
    try {
    const currentDate = getCurrentDateFormatted();
    const response = await axios(`https://www.twse.com.tw/exchangeReport/STOCK_DAY_AVG_ALL?response=json&date=${currentDate}`);
    const rawData = response.data;
    return rawData.data;
    } catch (error) {
        console.error(error);
    }
}

module.exports = { getAllStockToday };