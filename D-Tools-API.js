const axios = require('axios')

async function makeRequest() {

let response = await axios.get('https://cat-fact.herokuapp.com/facts')
var CatFactArray = new Array()

for(var index in response.data.all){
   var catFactID = response.data.all[index]._id
//    if(response.data.all[index].hasOwnProperty('user')){
//    var CatFactFirstName = response.data.all[index].user['name'].first
//    var CatFactLastName = response.data.all[index].user['name'].last
//    }
   try{
    var CatFactFirstName = response.data.all[index].user['name'].first
    var CatFactLastName = response.data.all[index].user['name'].last
    // decodeURI("%%%");  // URIError
    // eval("alert('Hello)") // SyntaxError
    // newvar // ReferenceError
   }
   catch(err){
       if (err.name == "ReferenceError"){
        console.log("Error Occured: " + err.name)
        console.log("Error Description: " + err.message)
        console.log(err.stack)

       }
       if (err.name == "TypeError"){
        console.log("Error Occured: " + err.name)
        console.log("Error Description: " + err.message)
        console.log(err.stack)
       }
      if (err.name == "SyntaxError"){
        console.log("Error Occured: " + err.name)
        console.log("Error Description: " + err.message)
        console.log(err.stack)

       }
       if (err.name == "URIError"){
        console.log("Error Occured: " + err.name)
        console.log("Error Description: " + err.message)
        console.log(err.stack)
       }
    }
    //  finally{
    //      console.log("Error Check complete")
    //  }

//    console.log(index + " " + CatFactFirstName)
//    console.log(response.data.all[catFact].user['name'].first)
    CatFactArray.push({
        'id' : catFactID,
        'First Name' : CatFactFirstName,
        'Last Name' : CatFactLastName
    });
         
}
// console.table(CatFactArray)

}

makeRequest()
