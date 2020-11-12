function showAlert() {
    alert("The button was clicked!");
}

function showMovies(moviesList){
var html;
for (i = 0; i < moviesList.length; i++) {
        html += '<a>' + moviesList[i] + '</a><br>';
    }

    document.getElementById("movies").innerHTML = html;
}

function appendToTable(moviesNames, moviesScores, moviesRelease){
var table = document.getElementById("results");
for (i = 0; i < moviesNames.length; i++) {
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = moviesNames[i];
        cell2.innerHTML = moviesRelease[i];
        cell3.innerHTML = moviesScores[i];
    }
}

function searchByTitle(moviesNames, moviesScores, moviesRelease){
    var title = document.getElementById('search_title').value;
    document.getElementById("results").innerHTML = "";
    var table = document.getElementById("results");

    for (i = 0; i < moviesNames.length; i++) {
        if(moviesNames[i] == title){
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = moviesNames[i];
            cell2.innerHTML = moviesRelease[i];
            cell3.innerHTML = moviesScores[i];
        }
    }
}

function searchByYear(moviesNames, moviesScores, moviesRelease){
    var date = document.getElementById('search_year').value;
    document.getElementById("results").innerHTML = "";
    var table = document.getElementById("results");
    var counter = 0;

    for (i = 0; i < moviesNames.length; i++) {
        if(moviesRelease[i] == date){
            var row = table.insertRow(counter);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = moviesNames[i];
            cell2.innerHTML = moviesRelease[i];
            cell3.innerHTML = moviesScores[i];
            counter++;
        }
    }
}

