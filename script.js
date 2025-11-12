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
    },
    {
        id: 11,
        name: "Lasung House",
        cuisine: "Korean",
        neighborhood: "Koreatown",
        address: "2620 W 7th St, Los Angeles, CA 90057",
        lat: 34.0573,
        lng: -118.2773,
        rating: 4.5,
        description: "Homestyle Korean comfort food restaurant known for their hearty stews and traditional home-cooked meals.",
        image: "https://via.placeholder.com/300x200?text=Lasung+House",
        photos: [
            { url: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400", caption: "Korean comfort food stews" },
            { url: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400", caption: "Home-style Korean dishes" },
            { url: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400", caption: "Traditional banchan variety" },
            { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400", caption: "Cozy family dining atmosphere" }
        ]
    },
    {
        id: 12,
        name: "LEE GA",
        cuisine: "Korean",
        neighborhood: "Koreatown", 
        address: "3821 W 6th St #F, Los Angeles, CA 90020",
        lat: 34.0631,
        lng: -118.3047,
        rating: 4.5,
        description: "Specialty Korean soup restaurant famous for their rich broths and traditional gukbap (soup with rice).",
        image: "https://via.placeholder.com/300x200?text=LEE+GA",
        photos: [
            { url: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400", caption: "Rich Korean soup broths" },
            { url: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=400", caption: "Traditional gukbap with rice" },
            { url: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400", caption: "Fresh side dishes" },
            { url: "https://images.unsplash.com/photo-1575032617377-9356d258b72b?w=400", caption: "Authentic Korean dining" }
        ]
    },
    {
        id: 13,
        name: "Yeems Coffee",
        cuisine: "Coffee & Tea",
        neighborhood: "Koreatown",
        address: "3200 W 6th St, Los Angeles, CA 90020",
        lat: 34.0631,
        lng: -118.2904,
        rating: 4.5,
        description: "Korean-style coffee shop with specialty drinks, pastries, and a cozy atmosphere perfect for studying or meetings.",
        image: "https://via.placeholder.com/300x200?text=Yeems+Coffee",
        photos: [
            { url: "https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?w=400", caption: "Korean specialty coffee drinks" },
            { url: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400", caption: "Fresh pastries and baked goods" },
            { url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400", caption: "Cozy cafe atmosphere" },
            { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400", caption: "Perfect for studying and meetings" }
        ]
    },
    {
        id: 14,
        name: "Kissaten Corazon",
        cuisine: "Coffee & Tea",
        neighborhood: "Downtown",
        address: "917 E 2nd St, Los Angeles, CA 90012",
        lat: 34.0513,
        lng: -118.2368,
        rating: 4.5,
        description: "Japanese-inspired kissaten (coffee house) with speakeasy vibes, serving exceptional coffee and light bites.",
        image: "https://via.placeholder.com/300x200?text=Kissaten+Corazon",
        photos: [
            { url: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?w=400", caption: "Japanese coffee preparation" },
            { url: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400", caption: "Speakeasy atmosphere" },
            { url: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400", caption: "Artisanal coffee drinks" },
            { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400", caption: "Intimate coffee house setting" }
        ]
    },
    {
        id: 15,
        name: "Ryla",
        cuisine: "Asian Fusion",
        neighborhood: "Hermosa Beach",
        address: "26 14th St, Hermosa Beach, CA 90254",
        lat: 33.8619,
        lng: -118.4001,
        rating: 4.5,
        description: "Upscale Asian fusion restaurant with ocean views, creative cocktails, and modern interpretations of Asian classics.",
        image: "https://via.placeholder.com/300x200?text=Ryla",
        photos: [
            { url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400", caption: "Modern Asian fusion dishes" },
            { url: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400", caption: "Creative craft cocktails" },
            { url: "https://images.unsplash.com/photo-1559847844-d721426d6edc?w=400", caption: "Ocean view dining" },
            { url: "https://images.unsplash.com/photo-1554998171-706f79d47346?w=400", caption: "Upscale beachside atmosphere" }
        ]
    }
];

// Google Maps variables
let map;
let markers = [];
let infoWindow;
let filteredRestaurants = restaurants;

// Initialize the map
function initMap() {
    console.log('initMap called - Google Maps API loaded successfully');
    
    // Center the map on Los Angeles
    const losAngeles = { lat: 34.0522, lng: -118.2437 };
    
    try {
        // Create the map
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 11,
            center: losAngeles,
            styles: [
                {
                    featureType: "poi.business",
                    stylers: [{ visibility: "off" }]
                },
                {
                    featureType: "transit",
                    elementType: "labels.icon",
                    stylers: [{ visibility: "off" }]
                }
            ]
        });

        console.log('Map created successfully');

        // Create info window
        infoWindow = new google.maps.InfoWindow();

        // Preload babyllama icon and compute scaled height to preserve aspect ratio
        (function preloadBabyIconAndAddMarkers() {
            const img = new Image();
            img.src = './babyllama.png';

            img.onload = function() {
                try {
                    const targetWidth = 48;
                    const scaledHeight = Math.round(img.naturalHeight * (targetWidth / img.naturalWidth));
                    const babyIcon = {
                        url: './babyllama.png',
                        scaledSize: new google.maps.Size(targetWidth, scaledHeight),
                        anchor: new google.maps.Point(Math.round(targetWidth / 2), scaledHeight)
                    };

                    addRestaurantMarkers(babyIcon);
                } catch (e) {
                    console.warn('Failed to compute babyllama icon size, falling back to default markers', e);
                    addRestaurantMarkers();
                }
            };

            img.onerror = function() {
                console.warn('Could not load babyllama.png, using default markers');
                addRestaurantMarkers();
            };
        })();
        
        // Populate restaurant list and filters
        populateFilters();
        populateRestaurantList();
        setupSearchListeners();
        
        console.log('All map features initialized');
    } catch (error) {
        console.error('Error creating map:', error);
        handleMapError();
    }
}

// Add markers for all restaurants
function addRestaurantMarkers(icon) {
    restaurants.forEach((restaurant) => {
        const markerOptions = {
            position: { lat: restaurant.lat, lng: restaurant.lng },
            map: map,
            title: restaurant.name
        };

        if (icon) {
            markerOptions.icon = icon;
        }

        const marker = new google.maps.Marker(markerOptions);

        // Add click listener to marker
        marker.addListener("click", () => {
            showRestaurantInfo(restaurant);
            highlightRestaurantInList(restaurant.id);
            
            // Create info window content
            const infoContent = createInfoWindowContent(restaurant);
            infoWindow.setContent(infoContent);
            infoWindow.open(map, marker);
        });

        // Store marker with restaurant ID for easy access
        markers.push({ marker, restaurant });
    });
}

// Create info window content
function createInfoWindowContent(restaurant) {
    const stars = '★'.repeat(Math.floor(restaurant.rating)) + '☆'.repeat(5 - Math.floor(restaurant.rating));
    
    return `
        <div class="info-window">
            <h4>${restaurant.name}</h4>
            <span class="cuisine-badge">${restaurant.cuisine}</span>
            <div class="address">${restaurant.address}</div>
            <div class="rating">
                <span class="stars">${stars}</span>
                <span>${restaurant.rating}</span>
            </div>
        </div>
    `;
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
        <h3 style="color: #d32323; margin-bottom: 1rem; font-size: 1.1rem;">
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
    listContainer.innerHTML = ''; // Clear existing items
    
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
            // Find the corresponding marker
            const markerData = markers.find(m => m.restaurant.id === restaurant.id);
            if (markerData) {
                // Pan to marker location
                map.panTo(markerData.marker.getPosition());
                map.setZoom(15);
                
                // Show restaurant info
                showRestaurantInfo(restaurant);
                highlightRestaurantInList(restaurant.id);
                
                // Open info window
                const infoContent = createInfoWindowContent(restaurant);
                infoWindow.setContent(infoContent);
                infoWindow.open(map, markerData.marker);
            }
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
    
    // Update map markers visibility
    updateMapMarkers();
}

// Update map markers based on filtered restaurants
function updateMapMarkers() {
    const filteredIds = new Set(filteredRestaurants.map(r => r.id));
    
    markers.forEach(({ marker, restaurant }) => {
        marker.setVisible(filteredIds.has(restaurant.id));
    });
    
    // Adjust map view to show filtered restaurants
    if (filteredRestaurants.length > 0) {
        const bounds = new google.maps.LatLngBounds();
        filteredRestaurants.forEach(restaurant => {
            bounds.extend({ lat: restaurant.lat, lng: restaurant.lng });
        });
        
        if (filteredRestaurants.length === 1) {
            map.setCenter({ lat: filteredRestaurants[0].lat, lng: filteredRestaurants[0].lng });
            map.setZoom(15);
        } else {
            map.fitBounds(bounds);
        }
    }
}

// Clear all filters
function clearAllFilters() {
    document.getElementById('search-input').value = '';
    document.getElementById('cuisine-filter').value = '';
    document.getElementById('neighborhood-filter').value = '';
    
    filteredRestaurants = restaurants;
    populateRestaurantList();
    
    // Show all markers
    markers.forEach(({ marker }) => {
        marker.setVisible(true);
    });
    
    // Reset map view
    map.setCenter({ lat: 34.0522, lng: -118.2437 });
    map.setZoom(11);
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

// Error handling for maps
function handleMapError() {
    const mapDiv = document.getElementById('map');
    mapDiv.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #f8f9fa; color: #6c757d; flex-direction: column; padding: 2rem; text-align: center;">
            <h3 style="color: #d32323; margin-bottom: 1rem;">🗺️ Map Not Loading</h3>
            <div style="background: white; padding: 1.5rem; border-radius: 12px; border: 2px solid #ffe6e6; max-width: 400px;">
                <p style="margin-bottom: 1rem;"><strong>To fix the map:</strong></p>
                <ol style="text-align: left; line-height: 1.6;">
                    <li>Get a Google Maps API key from <a href="https://console.cloud.google.com/" target="_blank" style="color: #d32323;">Google Cloud Console</a></li>
                    <li>Enable "Maps JavaScript API"</li>
                    <li>Replace "YOUR_ACTUAL_API_KEY_HERE" in index.html with your key</li>
                    <li>Refresh this page</li>
                </ol>
                <p style="margin-top: 1rem; font-size: 0.9rem; color: #666;">
                    The restaurant list and search still work without the map!
                </p>
            </div>
        </div>
    `;
}

// Add error handling and improved initialization
function initializeApp() {
    console.log('App initializing...');
    
    // Check if Google Maps loaded
    if (typeof google === 'undefined' || !google.maps) {
        console.error('Google Maps API not loaded');
        handleMapError();
        // Still initialize the rest of the app
        populateFilters();
        populateRestaurantList();
        setupSearchListeners();
        return;
    }
    
    console.log('Google Maps API available, initializing map...');
    // Google Maps loaded successfully, initialize normally
    initMap();
}

// Multiple ways to detect when page is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, checking for Google Maps...');
    
    // Try to initialize immediately
    if (typeof google !== 'undefined' && google.maps) {
        console.log('Google Maps already loaded');
        initMap();
    } else {
        console.log('Google Maps not ready, waiting...');
        // Wait a bit and try again
        setTimeout(() => {
            if (typeof google !== 'undefined' && google.maps) {
                console.log('Google Maps loaded after delay');
                initMap();
            } else {
                console.error('Google Maps failed to load after timeout');
                handleMapError();
                // Initialize without map
                populateFilters();
                populateRestaurantList();
                setupSearchListeners();
            }
        }, 3000);
    }
});

// Add error handling
window.addEventListener('load', () => {
    console.log('Window loaded');
    // Check if Google Maps loaded after a delay
    setTimeout(() => {
        if (typeof google === 'undefined') {
            console.error('Google Maps API still not loaded after window load');
            handleMapError();
            // Still initialize filters and search
            populateFilters();
            populateRestaurantList();
            setupSearchListeners();
        }
    }, 5000);
});

// Export for global access
window.initMap = initMap;
window.gm_authFailure = function() {
    console.error('Google Maps authentication failed - check API key');
    handleMapError();
};