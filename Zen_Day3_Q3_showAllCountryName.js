/* Question - 3 :
Use the same rest countries and print all countries names, regions,
sub-region and populations
*/

//Answer :


var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v2/all");
request.send();

request.onload = function (){
    var result = JSON.parse(request.response);
    /*
    console.log(result);
    console.log("Country's Name : ",result[0].name+ ", Country's Region : "+ result[0].region,
    ", Country's Sub-Region : "+ result[0].subregion, ", Country's Population : "+ result[0].population);
    */

    for(let i =0;i<result.length;i++){
        console.log("Country's Name : ",result[i].name+ ", Country's Region : "+ result[i].region,
    ", Country's Sub-Region : "+ result[i].subregion, ", Country's Population : "+ result[i].population);
    }
}