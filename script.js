const products = [
    { img: "src/img/produtos/dog.jpg", name: "Dog", price: "R$100,00" },
    { img: "src/img/produtos/chair.jpg", name: "Wooden Chair", price: "R$80,00", oldPrice: "R$120,00" },
    { img: "src/img/produtos/sofa.jpg", name: "Dining Chair", price: "R$430,00" },
    { img: "src/img/produtos/chair2.jpg", name: "Wings Chair", price: "R$350,00" },
    { img: "src/img/produtos/clock.jpg", name: "Etsom Gravida", price: "R$420,00" },
    { img: "src/img/produtos/table.jpg", name: "Knotted Chair", price: "R$120,00" },
    { img: "src/img/produtos/stool.jpg", name: "Morris Chair", price: "R$220,00" },
    { img: "src/img/produtos/sofa2.jpg", name: "Egg Chair", price: "R$310,00" }
  ];
  
  function loadProducts() {
    const productContainer = document.getElementById("product-list");
    productContainer.innerHTML = "";
  
    products.forEach(product => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");
  
      productElement.innerHTML = `
        <img src="${product.img}" alt="${product.name}" loading="lazy">
        <p>${product.name}</p>
        <span>${product.price} ${product.oldPrice ? `<del>${product.oldPrice}</del>` : ""}</span>
      `;
  
      productContainer.appendChild(productElement);
    });
  }
  
  let currentIndex = 0;
  let slides;
  let slider;
  
  function updateSlide() {
    const offset = -currentIndex * 100;
    if (slider) {
      slider.style.transform = `translateX(${offset}%)`;
    }
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
  
    slides = document.querySelectorAll(".banner-img");
    slider = document.getElementById("banner-slider");
  
    if (slides.length && slider) {
      updateSlide();
      setInterval(nextSlide, 5000);
    }
  
    const hamburger = document.getElementById("hamburger-btn");
    const navMenu = document.querySelector("nav ul");
  
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  });