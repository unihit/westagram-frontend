function add_comment() {
  const feedComments = document.querySelector('ul.feed-comments');
}

const postButton = document.querySelector('.post-button');

function activatePostButton(e) {
  const postInput = e.target.value.length > 0;
  postButton.style.opacity = postInput ? 1 : 0.3;
  postButton.style.cursor = postInput ? 'pointer' : 'default';
}

const postCommentBox = document.querySelector('.post-comment-box');
postCommentBox.addEventListener('input', activatePostButton);

const feedElement = document.querySelector('.feed-element');
const feedActionHeartIcon = feedElement.querySelectorAll('.feed-action-heart');
const feedCommentHeartIcon = feedElement.querySelectorAll('.feed-comment-heart');
const feedActionTagIcon = feedElement.querySelectorAll('.feed-action-tag');

let iconImgSrcOriginal = {};
feedActionHeartIcon.forEach(el => iconImgSrcOriginal[el.className] = 'img/main/nav_menu_heart_icon.png');
feedCommentHeartIcon.forEach(el => iconImgSrcOriginal[el.className] = 'img/main/nav_menu_heart_icon.png');
feedActionTagIcon.forEach(el => iconImgSrcOriginal[el.className] = 'img/main/nav_menu_tag_icon.png');

let iconImgSrcAfterSelect = {};
feedActionHeartIcon.forEach(el => iconImgSrcAfterSelect[el.className] = 'img/main/onclick_icons/nav_menu_heart_icon_red.png');
feedCommentHeartIcon.forEach(el => iconImgSrcAfterSelect[el.className] = 'img/main/onclick_icons/nav_menu_heart_icon_red.png');
feedActionTagIcon.forEach(el => iconImgSrcAfterSelect[el.className] = 'img/main/onclick_icons/nav_menu_tag_icon_black.png');

function isIconSelected(e) {
  if (e.target.getAttribute('src') === iconImgSrcOriginal[e.target.className]) {
    return false;
  } else if (e.target.getAttribute('src') === iconImgSrcAfterSelect[e.target.className]) {
    return true;
  }
}

function changeIconColor(e) {
  if (!isIconSelected(e)) {
    e.target.setAttribute('src', iconImgSrcAfterSelect[e.target.className]);
    e.target.style.width = '120%';
  } else {
    e.target.setAttribute('src', iconImgSrcOriginal[e.target.className]);
    e.target.style.width = '100%';
  }
}

if (feedActionHeartIcon.length > 0) {
  feedActionHeartIcon.forEach(el => el.addEventListener('click', changeIconColor));
}

if (feedCommentHeartIcon.length > 0) {
  feedCommentHeartIcon.forEach(el => el.addEventListener('click', changeIconColor));
}

if (feedActionTagIcon.length > 0) {
  feedActionTagIcon.forEach(el => el.addEventListener('click', changeIconColor));
}

function postComment() {
  console.log('function started ok')
  if (postCommentBox.value.length > 0) {
    const feedComments = document.querySelector('.feed-comments');
    const newCommentPoster = document.createElement('a')
    newCommentPoster.setAttribute('href','');
    newCommentPoster.setAttribute('class', 'feed-profile-id');
    const currentAccountUser = document.querySelector('p.account-profile-id').innerText;
    newCommentPoster.innerHTML = currentAccountUser;
    const newCommentContent = document.createElement('p');
    newCommentContent.setAttribute('class', 'feed-comment');
    const commentContent = postCommentBox.value;
    newCommentContent.innerHTML = commentContent;
    const newCommentHeartIcon = document.createElement('img');
    newCommentHeartIcon.setAttribute('src', 'img/main/nav_menu_heart_icon.png');
    newCommentHeartIcon.setAttribute('alt', 'feed comment like heart icon');
    newCommentHeartIcon.setAttribute('class', 'feed-comment-heart');
    newCommentHeartIcon.addEventListener('click', changeIconColor);
    const newCommentHeartIconDiv = document.createElement('div');
    newCommentHeartIconDiv.setAttribute('class', 'feed-comment-like');
    newCommentHeartIconDiv.appendChild(newCommentHeartIcon);
    const newFeedComment = document.createElement('li');
    newFeedComment.setAttribute('class', 'feed-comment-item');
    newFeedComment.appendChild(newCommentPoster);
    newFeedComment.appendChild(newCommentContent);
    newFeedComment.appendChild(newCommentHeartIconDiv);
    feedComments.appendChild(newFeedComment);
    postCommentBox.value = '';
    postButton.style.opacity = 0.3;
    postButton.style.cursor = 'default';
    postButton.disabled = "true";
  }
}

postCommentBox.addEventListener('keyup', function(e) {
  if(e.keyCode === 13) {
    postComment();
  }
});

postButton.addEventListener('click', postComment);
