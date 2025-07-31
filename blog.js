document.getElementById('create-post-btn').addEventListener('click', createPost);

function createPost() {
const title = document.getElementById('post-title').value;
 const content = document.getElementById('post-content').value;
 const imageFile = document.getElementById('post-image').files[0];

 if (!title || !content) {
  alert('Please fill in both title and content.');
  return;
 }

 const reader = new FileReader();
 reader.onload = function (e) {
 const imageURL = imageFile ? e.target.result : '';

 const postElement = document.createElement('div');
 postElement.classList.add('blog-card');

 postElement.innerHTML = `
  ${imageURL ? `<img src="${imageURL}" alt="Post image">` : ''}
 <h3 class="post-title">${title}</h3>
 <p class="post-content">${content}</p>
 <button class="edit-btn">Edit</button>
 <button class="delete-btn">Delete</button>
 `;

document.getElementById('blog-posts').prepend(postElement);

 document.getElementById('post-title').value = '';
 document.getElementById('post-content').value = '';
 document.getElementById('post-image').value = '';

 // Event Listeners for edit and delete
 postElement.querySelector('.delete-btn').addEventListener('click', () => postElement.remove());

postElement.querySelector('.edit-btn').addEventListener('click', () => { const newTitle = prompt('Edit title:', postElement.querySelector('.post-title').textContent);
 const newContent = prompt('Edit content:', postElement.querySelector('.post-content').textContent);
    if (newTitle) postElement.querySelector('.post-title').textContent = newTitle;
 if (newContent) postElement.querySelector('.post-content').textContent = newContent;
  });
 };

 if (imageFile) { reader.readAsDataURL(imageFile);
 } else {
 reader.onload(); // Trigger manually if no image
 }
}

