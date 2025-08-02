// app.js - Main application initialization
const App = (function() {
    function init() {
        updateCurrentDate();
        setInterval(updateCurrentDate, 60000);
        
        // Set tahun di footer
        $('#currentYear, #receiptYear').text(new Date().getFullYear());
        
        // Load data toko
        updateStoreInfo();
    }

    function updateCurrentDate() {
        $('#currentDate').text(moment().format('dddd, D MMMM YYYY'));
    }

    function updateStoreInfo() {
        const settings = JSON.parse(localStorage.getItem('anekamarket_settings')) || {};
        $('#storeNameHeader').text(settings.storeName || 'APLIKASI PENJUALAN ANEKAMARKET');
    }

    function showToast(message, type = 'info') {
        const $toast = $('#toast');
        $toast.removeClass('show success error warning');
        
        $('#toast-message').text(message);
        $toast.addClass(type).addClass('show');
        
        setTimeout(() => {
            $toast.removeClass('show');
        }, 3000);
    }

    return {
        init,
        showToast
    };
})();

// Inisialisasi saat dokumen ready
$(document).ready(function() {
    App.init();
});

// Ekspor untuk testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = App;
}
