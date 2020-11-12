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