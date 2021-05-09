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
}
setInterval(function() { getapi(api_url) }, 500);
// document.write("<h1>" + getapi(api_url).text + "</h1>");
// var funcall = getapi(api_url);
// var timer = setInterval(1000); // Calling that async function