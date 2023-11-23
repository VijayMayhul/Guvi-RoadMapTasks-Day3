/* Question - 2 :
Use the rest countries' API URL -> https://restcountries.com/v2/all and
display all the country flags in the console
*/

//Answer :

var request = new XMLHttpRequest();
// console.log(req);
request.open("GET", "https://restcountries.com/v2/all");
request.send();
// console.log(req.onload);
request.onload = function (){
    var result = JSON.parse(request.response);
    // console.log(result);
    // console.log(result[0].flags);

    console.log("All Country flags :");
    for(let i =0;i<result.length;i++){
        console.log(result[i].flags);
    }
}