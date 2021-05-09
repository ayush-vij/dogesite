// api url
const api_url =
    "https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=USD";

// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    var currprice = data.dogecoin.usd;
    console.log("Current Price: " + currprice);
    if (response) {
        hideloader();
    }
    show(data);
}
getapi(api_url); // Calling that async function

document.getElementById("employees").innerHTML = currprice;
// Function to hide the loader
// function hideloader() {
//     document.getElementById('loading').style.display = 'none';
// }

// document.getElementById("employees").innerHTML = currprice;
// // Function to define innerHTML for HTML table
// function show(data) {
//     let tab =
//         `<tr>
// 		<th>Name</th>
// 		<th>Office</th>
// 		<th>Position</th>
// 		<th>Salary</th>
// 		</tr>`;

//     // Loop to access all rows
//     for (let r of data) {
//         console.log(r.currprice.data);
//         tab += `<tr>
//     	<td>${r.usd} </td>
//     	<td>${r.office}</td>
//     	<td>${r.position}</td>
//     	<td>${r.salary}</td>		
//     </tr>`;
//     }
//     // Setting innerHTML as tab variable
//     document.getElementById("employees").innerHTML = tab;
// }