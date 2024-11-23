// Product data for both TikTok and Shopee platforms and different categories
const productsData = {
    TikTok: {
        "For You": [
            { name: "TikTok Product 1", price: "$10", link: "#", image: "https://via.placeholder.com/150" },
            { name: "TikTok Product 2", price: "$15", link: "#", image: "https://via.placeholder.com/150" },
        ],
        Pants: [
            { name: "TikTok Pants 1", price: "$20", link: "#", image: "https://via.placeholder.com/150" },
        ],
        Shirts: [
            { name: "TikTok Shirt 1", price: "$25", link: "#", image: "https://via.placeholder.com/150" },
        ],
        Croptops: [
            { name: "TikTok Croptop 1", price: "$12", link: "#", image: "https://via.placeholder.com/150" },
        ]
    },
    Shopee: {
        "For You": [
            { name: "Shopee Product 1", price: "$12", link: "#", image: "https://via.placeholder.com/150" },
            { name: "Shopee Product 2", price: "$18", link: "#", image: "https://via.placeholder.com/150" },
        ],
        Pants: [
            { name: "Shopee Pants 1", price: "$22", link: "#", image: "https://via.placeholder.com/150" },
        ],
        Shirts: [
            { name: "Shopee Shirt 1", price: "$30", link: "#", image: "https://via.placeholder.com/150" },
        ],
        Croptops: [
            { name: "Shopee Croptop 1", price: "$14", link: "#", image: "https://via.placeholder.com/150" },
        ]
    }
};

let currentPlatform = 'TikTok';
let currentCategory = 'For You';

// Function to display products based on selected platform and category
function displayProducts(platform, category) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = ''; // Clear current products

    const products = productsData[platform][category];
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="content">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <a href="${product.link}" class="btn-buy">Buy</a>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });

    // Update platform name and highlight the active button
    document.getElementById('platform-name').textContent = platform;
    const buttons = document.querySelectorAll('.platform-buttons .btn');
    buttons.forEach(button => button.classList.remove('active'));
    document.getElementById(platform.toLowerCase() + 'Btn').classList.add('active');
}

// Filter products by category
function filterCategory(category) {
    currentCategory = category;
    displayProducts(currentPlatform, currentCategory);
}

// Event listeners for platform buttons
document.getElementById('tiktokBtn').addEventListener('click', function() {
    currentPlatform = 'TikTok';
    displayProducts(currentPlatform, currentCategory);
});

document.getElementById('shopeeBtn').addEventListener('click', function() {
    currentPlatform = 'Shopee';
    displayProducts(currentPlatform, currentCategory);
});

// Initially display products for the TikTok platform and 'For You' category
displayProducts(currentPlatform, currentCategory);
