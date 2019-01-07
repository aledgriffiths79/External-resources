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
        var tableRows = [];
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item) {
            var dataRow = []; //empty array for each individual row

            Object.keys(item).forEach(function(key) {
                dataRow.push(`<td>${item[key]}</td>`);
            });
            tableRows.push(dataRow)
        });

        el.innerHTML = `<table>${tableHeaders}</table>`;
    });
} */ 


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
        tableHeaders.push(`<td>${key}</td>`);
    });

    return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument(type) {
    
    var tableRows = [];
    var el = document.getElementById("data");
    el.innerHTML = "";

    getData(type, function(data) {
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item) {
            
            var dataRow = [];
            
            Object.keys(item).forEach(function(key) {    //Use the forEach() method.
                                                         //The function inside that is going to push each element onto our data row.
                                                         //And what I want to do is create a new 'td', or tableCell element, for each of these 
                                                         //items.
                                                         //So we'll do that in our template literal here.
                                                         //And what we do is we have {$item}, and then we pass in [key] as the index, so this 
                                                         //will actually get us the data that's in each individual key. Rather than just the key 
                                                         //name itself, we'll get the value.
                                                         //Okay, so that's creating an individual row.
                dataRow.push(`<td>${item[key]}</td>`);
            });
            
            tableRows.push(dataRow);
        });

        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;
    });
}
