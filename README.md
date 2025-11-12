# 🦙 Chewing Llamas - LA Restaurant Map

A beautiful, interactive web application that displays Los Angeles restaurants on a Google Map with detailed information and a user-friendly interface.

## Features

- **Interactive Google Map**: Browse restaurants with custom markers
- **Restaurant Details**: Click markers or list items to view detailed information
- **Responsive Design**: Works on desktop and mobile devices
- **Beautiful UI**: Modern, clean interface with smooth animations
- **Restaurant List**: Sidebar with all restaurants for easy navigation

## Setup Instructions

### 1. Get a Google Maps API Key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the "Maps JavaScript API"
4. Create credentials (API Key)
5. Restrict the API key to your domain for security

### 2. Configure the API Key

Open `index.html` and replace `YOUR_GOOGLE_MAPS_API_KEY` with your actual API key:

```html
<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_ACTUAL_API_KEY&callback=initMap"></script>
```

### 3. Launch the Application

Simply open `index.html` in your web browser, or serve it using a local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## File Structure

```
chewingllamas/
├── index.html          # Main HTML file
├── styles.css          # Styling and layout
├── script.js           # JavaScript functionality and restaurant data
└── README.md          # This file
```

## Customization

### Adding More Restaurants

Edit the `restaurants` array in `script.js` to add your own restaurant data:

```javascript
{
    id: 11,
    name: "Your Restaurant",
    cuisine: "Cuisine Type",
    address: "Full Address",
    lat: 34.0522,  // Latitude
    lng: -118.2437, // Longitude
    rating: 4.5,
    description: "Description of the restaurant",
    image: "url-to-image" // Optional
}
```

### Getting Coordinates

To get latitude and longitude for new restaurants:
1. Search the restaurant on [Google Maps](https://maps.google.com)
2. Right-click on the location
3. Select the coordinates that appear in the context menu

### Customizing Styles

Modify `styles.css` to change:
- Colors and fonts
- Layout and spacing
- Animations and effects
- Responsive breakpoints

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Security Notes

- Always restrict your Google Maps API key to specific domains in production
- Consider implementing server-side API key handling for enhanced security
- Use HTTPS in production environments

## Future Enhancements

Some ideas for expanding the application:
- Add search/filter functionality
- Include restaurant photos
- Add user reviews and ratings
- Implement routing/directions
- Add restaurant categories/filters
- Include opening hours and contact information

## Support

If you encounter any issues:
1. Check that your Google Maps API key is valid and properly configured
2. Ensure the Maps JavaScript API is enabled in Google Cloud Console
3. Check browser console for error messages
4. Verify that you're serving the files over HTTP/HTTPS (not file://)

---

Enjoy exploring the best restaurants in Los Angeles! 🌮🍕🍜