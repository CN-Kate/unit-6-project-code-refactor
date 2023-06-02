// Genre arrays 
let comedyShows=["https://m.media-amazon.com/images/M/MV5BYmMxNjM0NmItNGU1Mi00OGMwLTkzMzctZmE3YjU1ZDE4NmFjXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_FMjpg_UX1000_.jpg", "https://m.media-amazon.com/images/M/MV5BYWNkOTg0OTMtZTcyNy00MWU1LWJhZDQtYjQzMjU1NjBhYzI2XkEyXkFqcGdeQXVyOTE4NzcwNzI@._V1_.jpg"];

let dramaShows=["https://m.media-amazon.com/images/M/MV5BMjkwZjcwMGQtNDAzOC00YjJiLThiYTgtNWU3ZjRiZmY2YzEzXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg","https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_.jpg"];

let actionShows=["https://m.media-amazon.com/images/M/MV5BOGFlN2Y1OTQtMjBhMy00ODE0LTk0OTctMWFkMjkyZjJkYWE4XkEyXkFqcGdeQXVyMTMzNzIyNDc1._V1_.jpg","https://m.media-amazon.com/images/M/MV5BYWU4ZmI0NTItZjcyNy00MzQ5LThiNDQtZDZkNjg1NWUwN2RhXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"];

let showsDisplay = document.querySelector(".shows"); 

let submitButton = document.querySelector(".submit-button"); 
submitButton.onclick = function() {
  let genreInput = document.querySelector(".get-suggestions").value.toLowerCase();
	if (genreInput === "comedy") {
		showShows(comedyShows);
	} else if (genreInput === "drama") {
    	showShows(dramaShows);
    } else if (genreInput === "action") {
      showShows(actionShows);
    }
   // TODO: add else for default
  // else {
    // 
    // }
}; 

function showShows(shows){
  for (let show of shows) {
        showsDisplay.insertAdjacentHTML("afterbegin", "<img src=" + show + "/>"); 
  }
}

// Suggestion Button
let suggestionButton = document.querySelector(".suggestion-button"); 
suggestionButton.onclick = function() {
	let suggestion = document.querySelector(".give-suggestions").value; 
    showsDisplay.append("Thanks for your suggestion! Check the console to see that it was added!"); 
    comedyShows.push(suggestion); 
    dramaShows.push(suggestion);
    actionShows.push(suggestion);
    console.log(comedyShows);
    console.log(dramaShows);
    console.log(actionShows); 
}; 
