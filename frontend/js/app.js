$(document).ready(function() {
    // Initialize data
    initializeData();
    
    // Set current year in footer
    $('#currentYear, #receiptYear').text(new Date().getFullYear());
    
    // Check if user is logged in
    if (currentUser) {
        $('#loggedInUser').text(currentUser.name);
        $('#loginModal').hide();
        $('#mainApp').show();
        loadProducts();
        updateCart();
        loadCategories();
        updateCurrentDate();
        updateStoreInfo();
        
        if (isAdmin()) {
            $('#adminPanel').show();
        }
    }
    
    // Event handlers...
    $('#loginForm').submit(function(e) {
        e.preventDefault();
        const result = login($('#username').val().trim(), $('#password').val().trim());
        
        if (result.success) {
            // Update UI...
        } else {
            showToast(result.message, 'error');
        }
    });
    
    // ... rest of the event handlers and UI logic ...
});

// Utility functions
function showToast(message, type = 'info') {
    // Toast implementation...
}

function updateCurrentDate() {
    $('#currentDate').text(moment().format('dddd, D MMMM YYYY'));
}
