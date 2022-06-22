import fetch from "cross-fetch";
import commentUrl from "../src/commentApi";
import LikesApi from "../src/likesApi";

export default class Movies {
  static url = "https://api.tvmaze.com/search/shows?q=drama";
  static counterMovies = async () => {
    const response = await fetch(this.url);
    const data = await response.json();
    let count = 0;
    data.forEach((item) => {
      if (item.show.image !== null) {
        count += 1;
      }
      const title = document.querySelector(".title");
      if (title) title.textContent = `MovieHub (${count}) Movies `;
    });

    return count;
  };

  static displayMovies = async () => {
    const response = await fetch(this.url);
    const data = await response.json();
    const movieContainer = document.querySelector(".movie-container");
    const title = document.querySelector(".title");

    data.forEach((item) => {
      if (item.show.image !== null) {
        const div = document.createElement("div");
        div.classList.add("each-movie");
        div.innerHTML = `
        <img src="${item.show.image.medium}" alt="movie-image">
      <div class="each">
        <li>${item.show.name}</li>
        <div class="likes">
         <i class="fa-regular fa-heart" id="${item.show.id}"></i>
          <p>0 Likes</p>
        </div>
      </div>      
      <button id="${item.show.id}" class="button">Comments</button>`;
        movieContainer.appendChild(div);
      }
      this.likes();
      this.addLikes();
    });
    const commentBtns = document.querySelectorAll(".button");
    commentBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.target.getAttribute("id");
        const popup = data.filter(
          (elem) => elem.show.id === parseInt(id, 10)
        )[0].show;
        const popupDiv = `<div class="show-popup">
        <div class= "popups">
        <div class="closebtn" id="delete">
        <i class="fas fa-times"></i>
        </div>  
           <div class="firstPopUpDetails">
           <div class="popup-image">
           <img src="${popup.image.medium}" alt="character">
               </div>
               <div class="title">
                 <h1>${popup.name}</h1>
                   </div> 
           </div>
            
           <div class="contents">
           <div class="card">
             
             <ul class="details">
               <li><p>Genre:</p> <span>${
                 popup.genres.toString() || "Not Available"
               }</span></li>
               <li><p>Language:</p> <span>${popup.language}</span></li>
               <li> <p>Premiered:</p> <span>${popup.premiered}</span></li>
               <li> <p>Rating:</p> <span>${popup.rating.average}</span></li>
               <li> <p>Official site:</p> <span><a class="link" href="${
                 popup.officialSite
               }">Watch</a></span></li>
             </ul>  
           </div>


           <div class="summary">
           <h5 class="center">Summary</h5>
           <p>${popup.summary}</p>
         </div>
         <div class="d-comments">
         <h5 class="comment-count center">Comments 0</h5>
         <ul class="display-comments"></ul>
       </div>
         
           <div class="form-div">
           <h5 class="center">Add comments</h5>
           <form class = "form" action="">
             <input class="username" type="text" placeholder="Your name ...">
             <input class="comment" type="text" placeholder="Your comment ...">
             <button class="add-comment button" type="submit">comment</button>
           </form>
           </div>



        </div>
        </div>`;

        document.body.insertAdjacentHTML("beforeend", popupDiv);
        const closeBtn = document.querySelector("#delete");
        closeBtn.addEventListener("click", () => {
          document.querySelector(".show-popup").remove();
        });
        this.commentCounter(id);
        this.displayComment(id);
      });
    });
  };

  // comment section
  static displayComment = (id) => {
    const username = document.querySelector(".username");
    const comment = document.querySelector(".comment");
    const addCommentBtn = document.querySelector(".add-comment");
    addCommentBtn.addEventListener("click", (e) => {
      e.preventDefault();

      commentUrl.setComments(id, username.value, comment.value).then((data) => {
        if (data === "Created") {
          this.commentCounter(id);
          username.value = "";
          comment.value = "";
        }
      });
    });
  };

  static commentCounter = (id) => {
    commentUrl.getComments(id).then((data) => {
      const display = document.querySelector(".display-comments");
      const count = document.querySelector(".comment-count");
      count.textContent = `Comments (${commentUrl.counterComments(data)})`;
      display.innerHTML = "";
      data.forEach((item) => {
        const commentList = document.createElement("li");

        commentList.textContent = `${item.creation_date} ${item.username} : ${item.comment}`;
        display.appendChild(commentList);
      });
    });
  };

  // likes-section
  static addLikes = () => {
    const icons = document.querySelectorAll(".fa-heart");
    icons.forEach((icon) => {
      icon.addEventListener("click", () => {
        LikesApi.setLikes(Number(icon.id)).then(() => {
          this.likes();
        });
      });
    });
  };

  static likes = () => {
    LikesApi.getLikes().then((data) => {
      data.forEach((item) => {
        const icon = document.getElementById(`${item.item_id}`);
        if (icon) {
          icon.nextElementSibling.innerHTML = `${item.likes} likes`;
        }
      });
    });
  };
}