const productContainer = document.getElementById("product-container");

async function fetchProducts() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const products = response.data;

    productContainer.innerHTML = "";

    products.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="https://imgs.search.brave.com/6GEC7ePnrD1pea8FRxEcJYSw_ipZV44N-EXsw1l2Qvw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTE2/MjQ2ODk0L3Bob3Rv/L25ldy15b3JrLW55/LWd1ZXN0cy10YWtl/LXBob3Rvcy1vZi1q/dWRpdGgtbGVpYmVy/LXByb2R1Y3RzLWF0/LXRoZS1wYXB5cnVz/LWNhZiVDMyVBOS1k/dXJpbmctaW1nLW55/ZncuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUtHYWFZa21r/Q1JVOW9SeHBoZUl4/bUZ0anVPQjF1cmpN/RnplcE92MmdkV1U9" alt="img">
        <h3>${product.title}</h3>
        <p class="price"${product.price}</p>
      `;

      productContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    productContainer.innerHTML = `
      <p>Failed to load products.</p>
    `;
  }
}

fetchProducts();
