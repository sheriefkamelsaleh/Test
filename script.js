const langToggle = document.getElementById('langToggle');
const englishSections = document.querySelectorAll('.english');
const arabicSections = document.querySelectorAll('.arabic');
const companyName = document.getElementById('companyName');
let isArabic = false;

// Function to initialize the map
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 26.8206, lng: 30.8025 }, // Center on Egypt
        zoom: 6,
    });

    // Add markers for key locations (example)
    const locations = [
        { lat: 30.0444, lng: 31.2357, title: "Cairo, Egypt" },
        { lat: 24.7136, lng: 46.6753, title: "Riyadh, Saudi Arabia" },
        { lat: 25.276987, lng: 55.296249, title: "Dubai, UAE" },
    ];

    locations.forEach(location => {
        new google.maps.Marker({
            position: location,
            map: map,
            title: location.title,
        });
    });
}

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