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

function appendToTable(moviesList){
var table = document.getElementById("results");
for (i = 0; i < moviesList.length; i++) {
        var row = table.insertRow(i+1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = moviesList[i];
        cell2.innerHTML = moviesList[i];
        cell3.innerHTML = moviesList[i];
    }
}