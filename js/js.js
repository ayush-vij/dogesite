// api url
const api_url =
    "https://chain.so/api/v2/get_price/DOGE/USD";
// "https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=USD";
const jsonurl = "./assets/data.json";

// Defining async function
async function getapi(url) {
    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    var currprice = data.data.prices[0].price;
    console.log("Current Price: " + currprice);
    var text = document.createTextNode(currprice);
    //  document.write("<h1>" + currprice + "</h1>");
    // currentpricedoge.innerHTML = ;
    // document.querySelector(".dogeprice").innerHTML = text;
    var textbeforertprice = "Right now, DOGE is worth: $ ";
    document.getElementById("currentpricedoge").innerHTML = textbeforertprice += text.nodeValue;
    if (response) {}

    //table thing
    let displayResources = document.querySelector("#table");
    displayResources.textContent =
        "Loading data from JSON source...";
    fetch('../assets/data.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            let totalam = 0;
            let totaldc = 0
            let totalrate = 0;
            let avgrate = 0;
            let pl = 0;
            let output =
                "<table><thead><tr><th>Date</th><th>Quantity</th><th>Rate</th><th>Amount</th></thead><tbody>";
            for (let i in result) {
                output +=
                    "<tr><td>" +
                    result[i].Date +
                    "</td><td>" +
                    result[i].Qty +
                    "</td><td>" +
                    result[i].Rate +
                    "</td><td>" +
                    result[i].SpentAmount +
                    "</td></tr>";
                totaldc = totaldc + result[i].Qty;
                totalam = totalam + result[i].SpentAmount;
                totalrate = totalrate + result[i].Rate; //to be used for avgrate
                avgrate = totalrate / (result.length);
                let currentvalue = 0;
                currentvalue = (text.nodeValue) * totaldc;
                pl = currentvalue - totalam;

            }
            document.getElementById('totaldc').innerHTML = totaldc;
            document.getElementById('totalamt').innerHTML = totalam.toFixed(3);
            document.getElementById('avgrate').innerHTML = avgrate.toFixed(4);
            document.getElementById('plfield').innerHTML = pl.toFixed(4);
            // console.log("Total" + total);
            // output += "</tbody></table>";
            // let tabletwo =
            //     "<table><thead><tr><th>Total Amount Invested</th></tr></thead><tbody>";
            // tabletwo += "<tr><td>" + total + "</td></tr>";
            // tabletwo += "</tbody></table>";


            displayResources.innerHTML = output;
        });
}
setInterval(function() { getapi(api_url) }, 2000);
// document.write("<h1>" + getapi(api_url).text + "</h1>");
// var funcall = getapi(api_url);
// var timer = setInterval(1000); // Calling that async function