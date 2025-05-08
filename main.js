fetch('products.json')
  .then(res => res.json())
  .then(products => {
    const list = document.getElementById('product-list');
    products.forEach(p => {
      const card = document.createElement('div');
      card.className = "bg-white p-4 rounded shadow";

      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}" class="w-full h-48 object-cover mb-4 rounded">
        <h2 class="text-xl font-semibold">${p.name}</h2>
        <p class="text-gray-700 mb-2">${p.description}</p>
        <p class="text-green-600 font-bold mb-4">${p.price}</p>
        <a href="mailto:kamilpusiu2008@email.com?subject=Zamówienie - ${encodeURIComponent(p.name)}"
           class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Zamów przez Gmail
        </a>
      `;
      list.appendChild(card);
    });
  });
