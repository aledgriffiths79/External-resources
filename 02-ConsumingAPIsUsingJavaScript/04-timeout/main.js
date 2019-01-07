/* var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "https://swapi.co/api/");
xhr.send();

function setData(jsonData) {
    data = jsonData;
}

xhr.onreadystatechange = function() {
    
// And inside the brackets, type "this.readyState".And this will print out the ready state every time the function is invoked.
//As we said, this function gets called more than once, so we should see more than one log to the console.
    console.log(this.readyState)    
    if (this.readyState == 4 && this.status == 200) {
        setData (JSON.parse(this.responseText));
    }
};

setTimeout(function() {
    console.log(data);
    
}, 500); */

/* So what we'll do is give it a timeout of 500 milliseconds.
That should be plenty of time to allow our function to do its thing.
And as we can see there now, console.log is actually printing our data.
And that's because we're telling the console.log to wait, to hold off from being executed for 500 milliseconds.
This gives our "onreadystatechange" function plenty of time to reach a ready state of 4. */

// that means we can get rid of the following :

var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "https://swapi.co/api/");
xhr.send();

xhr.onreadystatechange = function() {
    
// And inside the brackets, type "this.readyState".And this will print out the ready state every time the function is invoked.
//As we said, this function gets called more than once, so we should see more than one log to the console.
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
    }
};

setTimeout(function() {
    console.log(data);
    
}, 500);


