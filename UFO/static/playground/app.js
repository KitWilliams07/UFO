// Import the data from data.js
const tableData = data;

// Looks for tbdoy tag in HTML using d3 library
var tbody = d3.select('tbody');


function buildTable(data){
    // Clear the table by pointing directly to the the table in the HTML file
    tbody.html("")

    // Loop through each object in data to create a row 
    data.forEach((dataRow) => {
        let row = tbody.append('tr');

        // Loop through each field in dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append('td');
            cell.text(val);
        });
});
}


function handleClick(){

    // .select looks for instance in HTML, # relates to HTML ID tag

    let date = d3.select('#datetime').property('value');
    let filteredData = tableData;

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
      };

      buildTable(filteredData);

}


// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);


// Build the table when the page loads
buildTable(tableData);