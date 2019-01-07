const baseURL = "https://swapi.co/api/";

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

function getTableHeaders(obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`)
    });

    return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument(type) {
    var el = document.getElementById("data");
    el.innerHTML = "";

    getData(type, function(data) {
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item) {
            // el.innerHTML += "<p>" + item.name + "</p>";
        });

        el.innerHTML = `<table>${tableHeaders}</table>`;
    });
}



/*const baseURL = "https://swapi.co/api/";

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

function getTableHeaders(obj) {
    var tableHeaders = [];
    
    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`)    //Notice I'm using this backtick, or back quote, formation here. Those are not standard 
                                                //single quotes.This is something called a template literal, which allows us to interpolate 
                                                //variables and strings like this.
    });
    
    return `<tr>${tableHeaders}</tr>`;
}

//in the below example when we conole.log(data) it doesnt come up with names of films as the property name isnt names like the rest of the
//buttons objects, its title, so we sort the problem in the following:
//It has "title" instead, which becomes a problem because we're dealing specifically with a name.But what we want to do is use this kind of 
//approach to iterate over the keys to build ourselves a table full of data without actually explicitly specifying a property.
//And we can allow JavaScript to do that for us.

function writeToDocument(type) {
    var el = document.getElementById("data");
    el.innerHTML = "";          // And then every time the button is clicked, I'm going to set the innerHTML of our element to an empty string.
                                // So that will clear it every time the button is clicked.    
    
    getData(type, function(data) {
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);  //here we are invoking the getTableHeaders function
        
        data.forEach(function(item) {
            //Object.keys(item).forEach(function(data) {
                //console.log(data); 
            });
        el.innerHTML = `<table>${tableHeaders}</table>`            

        });
    };
} */








