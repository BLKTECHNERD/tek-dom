// Select and cache elements
const mainEl = document.querySelector("main");
const topMenuEl = document.getElementById("top-menu");

// Set background color and content of mainEl
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

// Set height, background color, and class of topMenuEl
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

// Create menu links
menuLinks.forEach((link) => {
  const a = document.createElement("a");
  a.href = link.href;
  a.textContent = link.text;
  topMenuEl.appendChild(a);
});
