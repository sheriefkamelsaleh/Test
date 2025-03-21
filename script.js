<script>
    const langToggle = document.getElementById('langToggle');
    const main = document.querySelector('main');
    const companyName = document.getElementById('companyName');
    let isArabic = false;

    langToggle.addEventListener('click', () => {
        isArabic = !isArabic;
        main.classList.toggle('arabic', isArabic);
        langToggle.textContent = isArabic ? 'English' : 'Arabic';
        companyName.textContent = isArabic ? 'شركة النسر الذهبي للنقل والشحن' : 'Golden Eagle Company For Transportation';
        langToggle.setAttribute('aria-pressed', isArabic.toString());
    });

    function initMap() {
        const map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 31.1333, lng: 33.8000 }, // North Sinai Coordinates.
            zoom: 8,
        });
    }
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>