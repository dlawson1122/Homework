// User.js
// Fetch user data from JSONPlaceholder
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(users => {
    // 1. Create & print a list of phone numbers
    const phoneNumbers = users.map(user => user.phone);
    console.log("📱 Phone Numbers:", phoneNumbers);

    // 2. Create & print a list of website + email pairs
    const siteEmailPairs = users.map(user => `${user.website}, ${user.email}`);
    console.log("🌐 Website + Email Pairs:", siteEmailPairs);
  })
  .catch(err => console.error("Error fetching user data:", err));
