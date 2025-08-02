// Admin-specific functions
function loadAdminPanel() {
    if (currentUser.role === 'admin') {
        $('#adminPanel').show();
    }
}

// Backup/restore
function backupData(password) {
    // Implementation
}

function restoreData(file, password) {
    // Implementation
}

// Store settings
function updateStoreInfo(settings) {
    // Implementation
}
