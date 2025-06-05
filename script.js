document.getElementById("navToggle").addEventListener("click", function () {
  const nav = document.getElementById("nav");
  nav.classList.toggle("show");
});
fetch('posts.json')
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById('blog-container');
    posts.forEach(post => {
      const article = document.createElement('article');
      article.classList.add('post');
      article.innerHTML = `
        <h3><a href="${post.link}">${post.title}</a></h3>
        <small>${post.date}</small>
        <p>${post.summary}</p>
        <a href="${post.link}">Read more →</a>
      `;
      container.appendChild(article);
    });
  })
  .catch(error => console.error('Error loading blog posts:', error));
