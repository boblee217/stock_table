const { getAllStockToday } = require("./getData_twse");

const todayDataMap = {};

async function processData(){
    const rawData = await getAllStockToday();
    rawData.forEach((stock) => {
        let obj = {};
        obj["id"] = stock[0];
        obj["name"] = stock[1];
        obj["closingPrice"] = stock[2];
        obj["monthlyAveragePrice"] = stock[3];
        todayDataMap[stock[0]] = obj;
    });
}

processData();


