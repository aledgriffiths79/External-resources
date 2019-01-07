//Why doesn't our "console.log(data)" work?
//Well there's a very good reason for this which is that the "onreadystatechange" function only sets the data variable to
//contain the response text when the ready state equals 4 and the status equals 200.

/*var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "https://swapi.co/api/");
xhr.send();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        data = this.responseText;
        console.log(data);
    };
}*/

//The problem with this is it means that all of the work we need to do with data would have to be done inside the 
//"xhr.onreadystatechange" function, which could make things really messy and complicated because all of the code 
//for our application could potentially end up inside this function.So how do we get the data out of here?
//Well one thing that we could do is create a separate function.And we can parse our data to that function.


//BELOW text is for the example below it
//This is also called deserializing our JSON.
//But we have the same problem.If I move "console.log(data)" to the bottom of the file, it goes back to being undefined again.

var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "https://swapi.co/api/");
xhr.send();

function setData(jsonData) {
    data = jsonData
    console.log(data);
}

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        setData(JSON.parse(this.responseText));
    };
}

console.log(data); 

