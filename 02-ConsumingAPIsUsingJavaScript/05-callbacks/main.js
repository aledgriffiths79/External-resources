//A good thing to remember in JavaScript is that everything is made of objects.
//And a function is also an object.Because of this, it can be parsed as a parameter, or argument, to another function.
//And at its simplest, that's what a callback is: a function that's parsed as a parameter to another function and executed inside that function.


function getData(cb) {
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://swapi.co/api/");
    xhr.send();

    xhr.onreadystatechange = function() {

        // And inside the brackets, type "this.readyState".And this will print out the ready state every time the function is invoked.
        //As we said, this function gets called more than once, so we should see more than one log to the console.
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
    
}

function printDataToConsole(data) {
    console.log(data);
}

getData(printDataToConsole);
    

/* The folowing syntax is from the last lesson (04-timeout) and the sequence of change in code to
the end result which is above 
    
    function getData(cb) {
    
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://swapi.co/api/");
    xhr.send();

    xhr.onreadystatechange = function() {

        // And inside the brackets, type "this.readyState".And this will print out the ready state every time the function is invoked.
        //As we said, this function gets called more than once, so we should see more than one log to the console.
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

    getData(function(data) {
    console.log(data);
});
*/