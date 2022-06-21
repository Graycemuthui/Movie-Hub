export default class Movies {
  static url = "https://api.tvmaze.com/search/shows?q=space";
  static counterMovies = async () => {
    const response = await fetch(this.url);
    const data = await response.json();
    let count = 0;
    data.forEach((item) => {
      if (item.show.image !== null) {
        count += 1;
      }
    });

    return count;
  };

  static displayMovies = async () => {
    const response = await fetch(this.url);
    const data = await response.json();
    const movieContainer = document.querySelector(".movie-container");
    const title = document.querySelector(".title");
    title.textContent = `Movie (${count}) Hub Movies `;

    data.forEach((item) => {
      if (item.show.image !== null) {
        const div = document.createElement("div");
        div.classList.add("each-movie");
        div.innerHTML = `
        <img src="${item.show.image.medium}" alt="movie-image">
      <div class="each">
        <li>${item.show.name}</li>
        <div class="likes">
         <i class="fa-regular fa-heart" ${item.show.id}></i>
          <p>0 Likes</p>
        </div>
      </div>      
      <button id="${item.show.id}" class="button">Comments</button>`;
        movieContainer.appendChild(div);
      }
    });
  };
}

const title = document.querySelector(".title");
title.textContent = `Movie (${count}) Hub Movies `;
