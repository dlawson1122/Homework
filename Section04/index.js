// Array of zodiac signs with their elements
const zodiacSigns = [
  { name: "Aries", element: "Fire" },
  { name: "Taurus", element: "Earth" },
  { name: "Gemini", element: "Air" },
  { name: "Cancer", element: "Water" },
  { name: "Leo", element: "Fire" },
  { name: "Virgo", element: "Earth" },
  { name: "Libra", element: "Air" },
  { name: "Scorpio", element: "Water" },
  { name: "Sagittarius", element: "Fire" },
  { name: "Capricorn", element: "Earth" },
  { name: "Aquarius", element: "Air" },
  { name: "Pisces", element: "Water" }
];

// DOM elements
const showBtn = document.querySelector("#show-signs");
const fireBtn = document.querySelector("#filter-fire");
const earthBtn = document.querySelector("#filter-earth");
const airBtn = document.querySelector("#filter-air");
const waterBtn = document.querySelector("#filter-water");
const container = document.querySelector("#sign-container");

// Helper function to display an array of signs
function displaySigns(signArray) {
  container.innerHTML = ""; // Clear previous results
  const ul = document.createElement("ul");

  signArray.forEach(sign => {
    const li = document.createElement("li");
    li.textContent = `${sign.name} (${sign.element})`;
    ul.appendChild(li);
  });

  container.appendChild(ul);
}

// Show all signs + demo array method
showBtn.addEventListener("click", () => {
  displaySigns(zodiacSigns);

  // Array method demonstration: push a "13th sign"
  zodiacSigns.push({ name: "Ophiuchus", element: "Spirit" });
  console.log("Updated signs with bonus sign:", zodiacSigns);
});

// Filter Fire signs
fireBtn.addEventListener("click", () => {
  const fireSigns = zodiacSigns.filter(sign => sign.element === "Fire");
  displaySigns(fireSigns);
});

// Filter Earth signs
earthBtn.addEventListener("click", () => {
  const earthSigns = zodiacSigns.filter(sign => sign.element === "Earth");
  displaySigns(earthSigns);
});

// Filter Air signs
airBtn.addEventListener("click", () => {
  const airSigns = zodiacSigns.filter(sign => sign.element === "Air");
  displaySigns(airSigns);
});

// Filter Water signs
waterBtn.addEventListener("click", () => {
  const waterSigns = zodiacSigns.filter(sign => sign.element === "Water");
  displaySigns(waterSigns);
});
