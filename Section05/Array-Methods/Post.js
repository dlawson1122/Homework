// Post.js
// Fetch posts from JSONPlaceholder
fetch("https://jsonplaceholder.typicode.com/posts?_limit=50")
  .then(res => res.json())
  .then(posts => {
    // 1. Get a list of user 5's posts
    const user5Posts = posts.filter(post => post.userId === 5);
    console.log("📄 User 5's Posts:", user5Posts);

    // 2. Create a list of title + body pairs
    const titleBodyPairs = user5Posts.map(post => ({
      title: post.title,
      body: post.body
    }));
    console.log("📌 Title + Body Pairs:", titleBodyPairs);
  })
  .catch(err => console.error("Error fetching posts:", err));
