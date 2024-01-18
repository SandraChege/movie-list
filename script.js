document.addEventListener("DOMContentLoaded", function () {
  const list = document.querySelector("#movie-list ul");
  const forms = document.forms;

  // delete movies
  list.addEventListener("click", (e) => {
    if (e.target.className == "delete") {
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  });
  // add movies
  const addForm = forms["add-movie"];
  addForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // create elements
    const value = addForm.querySelector('input[type="text"]').value;
    const date = addForm.querySelector('input[type="date"]').value;
    //1. Retrieve the whole list from local storage
       const movies = JSON.parse(localStorage.getItem("movies")) || [];
    //1. save in local storage
    movies.push({ value, date });
    // save the updated array back to local storage
    localStorage.setItem("movies", JSON.stringify(movies));
    const li = document.createElement("li");
    const movieName = document.createElement("span");
    const moviedate = document.createElement("span");
    const deleteBtn = document.createElement("span");

    //retrive last added movie
    const lastMovie = movies[movies.length - 1];
    // add text content
    movieName.textContent = lastMovie.value;
    moviedate.textContent = lastMovie.date;
    deleteBtn.textContent = "delete";
    // add classes
    movieName.classList.add("name");
    moviedate.classList.add("release-date");
    deleteBtn.classList.add("delete");
    // append to DOM
    li.appendChild(movieName);
    li.appendChild(moviedate);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    // clear input
    addForm.querySelector('input[type="text"]').value = "";
    addForm.querySelector('input[type="date"]').value = "";
  });
});
