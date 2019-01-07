var xhr = new XMLHttpRequest(); // And this XMLHttpRequest object is an inbuilt object that JavaScript provides to allow us to consume APIs.

xhr.onreadystatechange = function() {                       //function name xhr.onreadystatechange And whenever the state changes of our xhr object, we want to run a check.
    if (this.readyState == 4 && this.status == 200) {       //The HTTP status code of 200 means "OK".
        document.getElementById("data").innerHTML = this.responseText; //So once everything is okay, we then use some JavaScript to getElementById() 
                                                                       //from the DOM and change its innerHTML to the response text that comes back 
                                                                       //from our xhr object.
    }
};

//xhr.open() method, and the first argument that we parse in is "GET".
//Now there are several different methods that we can use to communicate with a web server.
//The two that you're going to use most often are GET and POST.
xhr.open("GET", "https://swapi.co/api/"); //I parse in the GET() method, And then I parse in the URL, which in this case is "http://www.swapi.co/api/".

xhr.send();