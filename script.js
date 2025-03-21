const langToggle = document.getElementById('langToggle');
const englishSections = document.querySelectorAll('.english');
const arabicSections = document.querySelectorAll('.arabic');
const companyName = document.getElementById('companyName');
let isArabic = false;

// Function to initialize the map
function initMap() {
    const map = L.map('map').setView([26.8206, 30.8025], 6); // Center on Egypt

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add markers for key locations (example)
    const locations = [
        { lat: 30.0444, lng: 31.2357, title: "Cairo, Egypt" },
        { lat: 24.7136, lng: 46.6753, title: "Riyadh, Saudi Arabia" },
        { lat: 25.276987, lng: 55.296249, title: "Dubai, UAE" },
    ];

    locations.forEach(location => {
        L.marker([location.lat, location.lng])
            .addTo(map)
            .bindPopup(location.title);
    });
}

// Initialize the map when the page loads
document.addEventListener('DOMContentLoaded', initMap);

// Language toggle functionality
langToggle.addEventListener('click', () => {
    isArabic = !isArabic;

    englishSections.forEach(section => {
        section.style.display = isArabic ? 'none' : 'block';
    });

    arabicSections.forEach(section => {
        section.style.display = isArabic ? 'block' : 'none';
    });

    langToggle.textContent = isArabic ? 'English' : 'العربية';
    companyName.textContent = isArabic ? 'شركة النسر الذهبي للنقل' : 'Golden Eagle Company For Transportation';
    langToggle.setAttribute('aria-pressed', isArabic.toString());
});