/*const baseURL = "https://swapi.co/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + type + "/");
    xhr.send();
}

function writeToDocument(type) {
    var el = document.getElementById("data");
    el.innerHTML = "";

    getData(type, function(data) {
        data = data.results;

        data.forEach(function(item) {
            el.innerHTML += "<p>" + item.name + "</p>";
        });
    });
} */

const baseURL = "https://swapi.co/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();
    
     xhr.open("GET", baseURL + type + "/");
     xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

}

function writeToDocument(type) {
    var el = document.getElementById("data");
    el.innerHTML = "";          // And then every time the button is clicked, I'm going to set the innerHTML of our element to an empty string.
                                // So that will clear it every time the button is clicked.    
    
    getData(type, function(data) {
        data = data.results;
        
        data.forEach(function(item) {
        //document.getElementById("data").innerHTML += "<p>" + item.name + "</p>"; this will be change for the syntax below
        el.innerHTML += "<p>" + item.name + "</p>";            
        })
    });
}




