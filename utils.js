function getCurrentDateFormatted() {
    const date = new Date();
    
    const year = date.getFullYear(); // Gets the current year
    const month = date.getMonth() + 1; // Gets the current month (0-based index, add 1 to adjust)
    const day = date.getDate(); // Gets the current day
    
    // Pad the month and day with leading zeros if necessary
    const formattedMonth = month < 10 ? '0' + month : month;
    const formattedDay = day < 10 ? '0' + day : day;
    
    return `${year}${formattedMonth}${formattedDay}`; // Combines parts into a single string
  }
  
    module.exports = { getCurrentDateFormatted }; // Exports the function for use in other files  