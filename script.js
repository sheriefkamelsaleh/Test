<script>
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

        langToggle.textContent = isArabic ? 'English' : 'Arabic';
        companyName.textContent = isArabic ? 'شركة النسر الذهبي للنقل والشحن' : 'Golden Eagle Company For Transportation';
        langToggle.setAttribute('aria-pressed', isArabic.toString());
    });

    function initMap() {
        const map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 31.1333, lng: 33.8000 },
            zoom: 8,
        });
    }
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>