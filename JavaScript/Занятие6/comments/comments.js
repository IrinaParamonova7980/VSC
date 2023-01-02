"use strict";

let comments = ["Привет!", "Как дела?"];

function addComment() {
  let newComment = document.querySelector("#newComment").value;

  function checkSpam() {
    let lowerComment = newComment.toLowerCase();
    if (lowerComment.includes("viagra")) {
      newComment = lowerComment.replace("viagra", "***");
    } else if (lowerComment.includes("xxx")) {
      newComment = lowerComment.replace("xxx", "***");
    }
  }
  checkSpam();
  comments.push(newComment);
  generateComment();
  document.querySelector("#newComment").value = "";
}

function generateComment() {
  let commentsBlock = "";
  for (let comment of comments) {
    commentsBlock += `<p class="text">${comment}</p>`;
  }
  document.querySelector("#container").innerHTML = commentsBlock;
}

document.addEventListener("DOMContentLoaded", function () {
  generateComment();
});
