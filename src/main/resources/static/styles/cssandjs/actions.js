function clearDetailsTable(){
    document.getElementById("detailstablebody").innerHTML = "";
}

function appendToTable(moviesNames, moviesScores, moviesRelease){
    clearDetailsTable();
    document.getElementById("tablebody").innerHTML = "";
    var table = document.getElementById("tablebody");

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
    clearDetailsTable();
    var title = document.getElementById('search_title').value;
    document.getElementById("tablebody").innerHTML = "";
    var table = document.getElementById("tablebody");

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
    clearDetailsTable();
    var date = document.getElementById('search_year').value;
    document.getElementById("tablebody").innerHTML = "";
    var table = document.getElementById("tablebody");
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

function searchByScore(moviesNames, moviesScores, moviesRelease){
    clearDetailsTable();
    var score = document.getElementById('search_score').value;
    document.getElementById("tablebody").innerHTML = "";
    var table = document.getElementById("tablebody");
    var counter = 0;

    for (i = 0; i < moviesNames.length; i++) {
        if(moviesScores[i] == score){
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

function getDetails(movieStudio, movieDirector, movieCast){
    document.getElementById("detailstablebody").innerHTML = "";
    var table = document.getElementById("detailstablebody");

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = movieStudio;
    cell2.innerHTML = movieDirector;
    cell3.innerHTML = movieCast[0];

    for(i = 1; i<movieCast.length; i++){
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = "";
        cell2.innerHTML = "";
        cell3.innerHTML = movieCast[i];
    }
}

function detailsAlert(){
    alert("Click GET DETAILS to get more informations");
}

function detailsByTitle(movieTitle, moviesNames, moviesScores, moviesRelease){

    document.getElementById("tablebody").innerHTML = "";
    var table = document.getElementById("tablebody");

    for (i = 0; i < moviesNames.length; i++) {
        if(moviesNames[i] == movieTitle){
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
