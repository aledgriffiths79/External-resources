//when usind the following syntax: We can confirm that if we do a console.log() and use the typeof() method, which will tell us what type of variable 
//we have here and pass in "this.responseText".When I inspect this page and go to the console, you can see that this is the type of "string".
// if it was a JSON it would be an object

/*var xhr = new XMLHttpRequest();

xhr.open("GET", "https://swapi.co/api/");
xhr.send();


xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(typeof(this.responseText));
    }
}; */

//So what we need to do is to read, or to parse, this string into a JSON data structure

/*var xhr = new XMLHttpRequest();

xhr.open("GET", "https://swapi.co/api/");
xhr.send();


xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(typeof(JSON.parse(this.responseText)));
    }
}; */

//So instead of just telling us that this is an object, let's actually see the data contained in that object.

/*var xhr = new XMLHttpRequest();

xhr.open("GET", "https://swapi.co/api/");
xhr.send();


xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(JSON.parse(this.responseText));
    }
}; */

//If we expand the little node, we can see each of the properties and the values associated with those properties inside the console.
//Now, what we would imagine then, is that we could maybe store this in a variable and manipulate the response text.
//Let's try that. We'll create one called data - "var data".

//Well, unfortunately, we don't get the result that we were expecting.
//We're going to see why this is the case in our next video.
//But right now, what we've seen is that the data coming back is a string.
//If we want to manipulate it so that we can display it in a pleasant format for our users, then we need to put it into JSON.
//In the next few videos, we'll tie all of this together.

var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "https://swapi.co/api/");
xhr.send();


xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        data = this.responseText;
    }
};

console.log(data);







