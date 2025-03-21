const langToggle = document.getElementById('langToggle');
const englishSections = document.querySelectorAll('.english');
const arabicSections = document.querySelectorAll('.arabic');
const companyName = document.getElementById('companyName');
let isArabic = false;

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

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 26.8206, lng: 30.8025 }, // Center on Egypt
        zoom: 6,
    });
}