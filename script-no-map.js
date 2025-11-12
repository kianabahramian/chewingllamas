// Los Angeles Restaurant Data from Yelp Collection
const restaurants = [
    {
        id: 1,
        name: "Sun Nong Dan",
        cuisine: "Korean",
        neighborhood: "Koreatown",
        address: "3470 W 6th St, Los Angeles, CA 90020",
        lat: 34.0631,
        lng: -118.2970,
        rating: 4.5,
        description: "24-hour Korean comfort food specializing in hearty soups and traditional dishes. Famous for their galbitang and spicy ramyun.",
        image: "https://via.placeholder.com/300x200?text=Sun+Nong+Dan",
        photos: [
            { url: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400", caption: "Galbitang - signature beef short rib soup" },
            { url: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400", caption: "Spicy kimchi ramyun with soft egg" },
            { url: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400", caption: "Traditional Korean banchan side dishes" },
            { url: "https://images.unsplash.com/photo-1575032617377-9356d258b72b?w=400", caption: "Cozy 24-hour dining atmosphere" }
        ]
    },
    {
        id: 2,
        name: "Hae Jang Chon",
        cuisine: "Korean BBQ",
        neighborhood: "Koreatown",
        address: "3821 W 6th St, Los Angeles, CA 90020",
        lat: 34.0631,
        lng: -118.3047,
        rating: 4.0,
        description: "All-you-can-eat Korean BBQ with premium cuts of meat and traditional banchan. A Koreatown institution since 1988.",
        image: "https://via.placeholder.com/300x200?text=Hae+Jang+Chon",
        photos: [
            { url: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400", caption: "Premium marbled galbi on the grill" },
            { url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400", caption: "All-you-can-eat spread of meats" },
            { url: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400", caption: "Traditional Korean BBQ experience" },
            { url: "https://images.unsplash.com/photo-1598511726623-d2e9996892f0?w=400", caption: "Variety of fresh banchan" }
        ]
    },
    {
        id: 3,
        name: "hibi.",
        cuisine: "Japanese/Korean",
        neighborhood: "Arts District",
        address: "2434 Main St, Los Angeles, CA 90291",
        lat: 34.0195,
        lng: -118.4912,
        rating: 4.5,
        description: "Upscale Japanese-Korean fusion restaurant with innovative dishes and exceptional presentation. Known for their omakase experience.",
        image: "https://via.placeholder.com/300x200?text=hibi",
        photos: [
            { url: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=400", caption: "Omakase sashimi platter" },
            { url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400", caption: "Japanese-Korean fusion dishes" },
            { url: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400", caption: "Elegant plating and presentation" },
            { url: "https://images.unsplash.com/photo-1559847844-d721426d6edc?w=400", caption: "Modern upscale dining room" }
        ]
    },
    {
        id: 4,
        name: "My Lai Kitchen - Venice",
        cuisine: "Vietnamese",
        neighborhood: "Venice",
        address: "1629 Abbot Kinney Blvd, Los Angeles, CA 90291",
        lat: 34.0094,
        lng: -118.4745,
        rating: 4.5,
        description: "Modern Vietnamese restaurant with fresh ingredients and creative takes on traditional dishes. Popular for pho and banh mi.",
        image: "https://via.placeholder.com/300x200?text=My+Lai+Kitchen",
        photos: [
            { url: "https://images.unsplash.com/photo-1559847844-d721426d6edc?w=400", caption: "Fresh pho with herbs and lime" },
            { url: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400", caption: "Vietnamese spring rolls" },
            { url: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400", caption: "Banh mi sandwich with pickled vegetables" },
            { url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400", caption: "Modern Vietnamese dining space" }
        ]
    },
    {
        id: 5,
        name: "Si! Mon",
        cuisine: "Latin American",
        neighborhood: "Echo Park",
        address: "1931 Sunset Blvd, Los Angeles, CA 90026",
        lat: 34.0778,
        lng: -118.2589,
        rating: 4.5,
        description: "Vibrant Latin American seafood restaurant with Peruvian influences. Known for excellent ceviche and creative cocktails.",
        image: "https://via.placeholder.com/300x200?text=Si+Mon",
        photos: [
            { url: "https://images.unsplash.com/photo-1587739855897-9d6de9d6f147?w=400", caption: "Fresh ceviche with citrus and herbs" },
            { url: "https://images.unsplash.com/photo-1559847844-d721426d6edc?w=400", caption: "Peruvian seafood specialties" },
            { url: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400", caption: "Creative Latin American cocktails" },
            { url: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=400", caption: "Vibrant restaurant atmosphere" }
        ]
    },
    {
        id: 6,
        name: "Fitoor",
        cuisine: "Indian",
        neighborhood: "Santa Monica",
        address: "1533 Wilshire Blvd, Santa Monica, CA 90403",
        lat: 34.0259,
        lng: -118.4894,
        rating: 4.5,
        description: "Modern Indian cuisine with craft cocktails in an elegant setting. Featuring innovative dishes with traditional flavors.",
        image: "https://via.placeholder.com/300x200?text=Fitoor",
        photos: [
            { url: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400", caption: "Tandoori dishes with aromatic spices" },
            { url: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", caption: "Modern Indian curry presentation" },
            { url: "https://images.unsplash.com/photo-1606471191009-fee906de1bea?w=400", caption: "Craft cocktails with Indian spices" },
            { url: "https://images.unsplash.com/photo-1554998171-706f79d47346?w=400", caption: "Elegant modern dining room" }
        ]
    },
    {
        id: 7,
        name: "Bar Siesta",
        cuisine: "Spanish",
        neighborhood: "Silver Lake",
        address: "2718 Sunset Blvd, Los Angeles, CA 90026",
        lat: 34.0778,
        lng: -118.2739,
        rating: 4.0,
        description: "Authentic Spanish tapas bar with an extensive wine selection. Perfect for sharing small plates and experiencing Spanish culture.",
        image: "https://via.placeholder.com/300x200?text=Bar+Siesta",
        photos: [
            { url: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=400", caption: "Traditional Spanish tapas selection" },
            { url: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400", caption: "Jamón ibérico and cheese board" },
            { url: "https://images.unsplash.com/photo-1559847844-d721426d6edc?w=400", caption: "Spanish wine and small plates" },
            { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400", caption: "Intimate tapas bar atmosphere" }
        ]
    },
    {
        id: 8,
        name: "Dan Sung Sa",
        cuisine: "Korean",
        neighborhood: "Koreatown",
        address: "3317 W 6th St, Los Angeles, CA 90020",
        lat: 34.0631,
        lng: -118.2921,
        rating: 4.0,
        description: "Cozy Korean drinking house (pojangmacha) serving traditional anju (drinking snacks) and soju in an authentic atmosphere.",
        image: "https://via.placeholder.com/300x200?text=Dan+Sung+Sa",
        photos: [
            { url: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400", caption: "Korean anju (drinking snacks)" },
            { url: "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?w=400", caption: "Traditional soju and beer setup" },
            { url: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400", caption: "Authentic pojangmacha atmosphere" },
            { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400", caption: "Cozy late-night dining" }
        ]
    },
    {
        id: 9,
        name: "Quarters Korean BBQ",
        cuisine: "Korean BBQ",
        neighborhood: "Koreatown",
        address: "3465 W 6th St #20, Los Angeles, CA 90020",
        lat: 34.0631,
        lng: -118.2966,
        rating: 4.0,
        description: "Premium Korean BBQ experience with high-quality meats and modern atmosphere. Popular for date nights and celebrations.",
        image: "https://via.placeholder.com/300x200?text=Quarters+Korean+BBQ",
        photos: [
            { url: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400", caption: "Premium wagyu beef cuts" },
            { url: "https://images.unsplash.com/photo-1568096889942-6eedde686635?w=400", caption: "Modern Korean BBQ grills" },
            { url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400", caption: "High-quality meat selection" },
            { url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400", caption: "Upscale dining atmosphere" }
        ]
    },
    {
        id: 10,
        name: "Bistro 1968",
        cuisine: "Dim Sum",
        neighborhood: "San Gabriel",
        address: "423 N Atlantic Blvd #103, Monterey Park, CA 91754",
        lat: 34.0631,
        lng: -118.1312,
        rating: 3.5,
        description: "Traditional Cantonese dim sum restaurant serving authentic dumplings and tea service in the San Gabriel Valley.",
        image: "https://via.placeholder.com/300x200?text=Bistro+1968",
        photos: [
            { url: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400", caption: "Traditional dim sum steamers" },
            { url: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400", caption: "Handmade dumplings and bao" },
            { url: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400", caption: "Variety of dim sum dishes" },
            { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400", caption: "Traditional tea house setting" }
        ]
    }
];

// Variables for filtered restaurants
let filteredRestaurants = restaurants;

// Initialize the application
function initApp() {
    populateFilters();
    populateRestaurantList();
    setupSearchListeners();
}

// Show restaurant information in sidebar
function showRestaurantInfo(restaurant) {
    const stars = '★'.repeat(Math.floor(restaurant.rating)) + '☆'.repeat(5 - Math.floor(restaurant.rating));
    
    const infoDiv = document.getElementById('restaurant-info');
    infoDiv.innerHTML = `
        <div class="restaurant-name">${restaurant.name}</div>
        <span class="cuisine-type">${restaurant.cuisine}</span>
        <div class="address">📍 ${restaurant.address}</div>
        <div class="rating">
            <span class="stars">${stars}</span>
            <span>${restaurant.rating}/5</span>
        </div>
        <div class="description">${restaurant.description}</div>
    `;
    
    // Show photos in gallery
    showRestaurantPhotos(restaurant);
    
    // Show location details
    showRestaurantDetails(restaurant);
}

// Show restaurant photos in gallery
function showRestaurantPhotos(restaurant) {
    const photoGallery = document.getElementById('photo-gallery');
    
    if (!restaurant.photos || restaurant.photos.length === 0) {
        photoGallery.innerHTML = `
            <div class="gallery-placeholder">
                <h3>📸 Restaurant Photos</h3>
                <p>No photos available for ${restaurant.name}</p>
            </div>
        `;
        return;
    }
    
    photoGallery.innerHTML = `
        <h3 style="color: #007aff; margin-bottom: 16px; font-size: 20px; font-weight: 600;">
            📸 ${restaurant.name} Photos
        </h3>
        <div class="photo-grid">
            ${restaurant.photos.map((photo, index) => `
                <div class="photo-item" onclick="openPhotoModal('${photo.url}', '${photo.caption}')">
                    <img src="${photo.url}" alt="${photo.caption}" loading="lazy">
                    <div class="photo-caption">${photo.caption}</div>
                </div>
            `).join('')}
        </div>
    `;
}

// Show restaurant location details
function showRestaurantDetails(restaurant) {
    const detailsContainer = document.getElementById('restaurant-details');
    if (!detailsContainer) return;
    
    detailsContainer.innerHTML = `
        <div style="padding: 32px;">
            <h3 style="color: #007aff; margin-bottom: 20px; font-size: 22px; font-weight: 600;">
                📍 ${restaurant.name}
            </h3>
            <div style="background: rgba(0, 122, 255, 0.1); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                <h4 style="margin-bottom: 12px; color: #1d1d1f;">Address</h4>
                <p style="color: #86868b; margin-bottom: 16px;">${restaurant.address}</p>
                <a href="https://maps.google.com?q=${encodeURIComponent(restaurant.address)}" 
                   target="_blank" 
                   style="background: #007aff; color: white; padding: 12px 24px; border-radius: 12px; text-decoration: none; font-weight: 600; display: inline-block;">
                   Open in Google Maps
                </a>
            </div>
            <div style="background: rgba(255, 149, 0, 0.1); padding: 20px; border-radius: 12px;">
                <h4 style="margin-bottom: 12px; color: #1d1d1f;">Neighborhood</h4>
                <p style="color: #86868b; margin-bottom: 16px;">${restaurant.neighborhood}</p>
                <div style="color: #ff9500; font-size: 24px;">${'★'.repeat(Math.floor(restaurant.rating))}${'☆'.repeat(5 - Math.floor(restaurant.rating))}</div>
                <p style="color: #86868b; margin-top: 8px;">${restaurant.rating} out of 5 stars</p>
            </div>
        </div>
    `;
}

// Open photo modal
function openPhotoModal(imageUrl, caption) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('photo-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'photo-modal';
        modal.className = 'photo-modal';
        modal.innerHTML = `
            <span class="photo-close">&times;</span>
            <div class="photo-modal-content">
                <img id="modal-image" src="" alt="">
                <div id="modal-caption" style="color: white; text-align: center; padding: 1rem;"></div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Close modal when clicking outside or on close button
        modal.addEventListener('click', function(e) {
            if (e.target === modal || e.target.classList.contains('photo-close')) {
                modal.style.display = 'none';
            }
        });
    }
    
    // Set image and caption
    document.getElementById('modal-image').src = imageUrl;
    document.getElementById('modal-caption').textContent = caption;
    modal.style.display = 'block';
}

// Populate the restaurant list in sidebar
function populateRestaurantList() {
    const listContainer = document.getElementById('restaurant-list-container');
    listContainer.innerHTML = '';
    
    filteredRestaurants.forEach((restaurant) => {
        const listItem = document.createElement('div');
        listItem.className = 'restaurant-list-item';
        listItem.dataset.restaurantId = restaurant.id;
        
        listItem.innerHTML = `
            <h5>${restaurant.name}</h5>
            <div class="cuisine">${restaurant.cuisine} • ${restaurant.neighborhood}</div>
        `;
        
        // Add click listener to list item
        listItem.addEventListener('click', () => {
            showRestaurantInfo(restaurant);
            highlightRestaurantInList(restaurant.id);
        });
        
        listContainer.appendChild(listItem);
    });
}

// Populate filter dropdowns
function populateFilters() {
    const cuisineFilter = document.getElementById('cuisine-filter');
    const neighborhoodFilter = document.getElementById('neighborhood-filter');
    
    // Get unique cuisines and neighborhoods
    const cuisines = [...new Set(restaurants.map(r => r.cuisine))].sort();
    const neighborhoods = [...new Set(restaurants.map(r => r.neighborhood))].sort();
    
    // Populate cuisine filter
    cuisines.forEach(cuisine => {
        const option = document.createElement('option');
        option.value = cuisine;
        option.textContent = cuisine;
        cuisineFilter.appendChild(option);
    });
    
    // Populate neighborhood filter
    neighborhoods.forEach(neighborhood => {
        const option = document.createElement('option');
        option.value = neighborhood;
        option.textContent = neighborhood;
        neighborhoodFilter.appendChild(option);
    });
}

// Setup search and filter listeners
function setupSearchListeners() {
    const searchInput = document.getElementById('search-input');
    const cuisineFilter = document.getElementById('cuisine-filter');
    const neighborhoodFilter = document.getElementById('neighborhood-filter');
    const clearButton = document.getElementById('clear-filters');
    
    // Search input listener
    searchInput.addEventListener('input', filterRestaurants);
    
    // Filter dropdown listeners
    cuisineFilter.addEventListener('change', filterRestaurants);
    neighborhoodFilter.addEventListener('change', filterRestaurants);
    
    // Clear filters button
    clearButton.addEventListener('click', clearAllFilters);
}

// Filter restaurants based on search criteria
function filterRestaurants() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const selectedCuisine = document.getElementById('cuisine-filter').value;
    const selectedNeighborhood = document.getElementById('neighborhood-filter').value;
    
    filteredRestaurants = restaurants.filter(restaurant => {
        const matchesSearch = !searchTerm || 
            restaurant.name.toLowerCase().includes(searchTerm) ||
            restaurant.cuisine.toLowerCase().includes(searchTerm) ||
            restaurant.neighborhood.toLowerCase().includes(searchTerm) ||
            restaurant.description.toLowerCase().includes(searchTerm);
            
        const matchesCuisine = !selectedCuisine || restaurant.cuisine === selectedCuisine;
        const matchesNeighborhood = !selectedNeighborhood || restaurant.neighborhood === selectedNeighborhood;
        
        return matchesSearch && matchesCuisine && matchesNeighborhood;
    });
    
    // Update the restaurant list
    populateRestaurantList();
}

// Clear all filters
function clearAllFilters() {
    document.getElementById('search-input').value = '';
    document.getElementById('cuisine-filter').value = '';
    document.getElementById('neighborhood-filter').value = '';
    
    filteredRestaurants = restaurants;
    populateRestaurantList();
}

// Highlight selected restaurant in list
function highlightRestaurantInList(restaurantId) {
    // Remove previous highlights
    document.querySelectorAll('.restaurant-list-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add highlight to current restaurant
    const currentItem = document.querySelector(`[data-restaurant-id="${restaurantId}"]`);
    if (currentItem) {
        currentItem.classList.add('active');
    }
}

// Initialize the app when page loads
document.addEventListener('DOMContentLoaded', initApp);