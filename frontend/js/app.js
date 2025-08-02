import Database from './database.js';

$(document).ready(function() {
    // Cek user login
    const currentUser = JSON.parse(localStorage.getItem('current_user'));
    
    if (currentUser) {
        $('#loggedInUser').text(currentUser.name);
        $('#loginModal').hide();
        $('#mainApp').show();
        
        if (currentUser.role === 'admin') {
            $('#adminPanel').show();
        }
    }
    
    // Event handler untuk login
    $('#loginForm').submit(function(e) {
        e.preventDefault();
        const username = $('#username').val();
        const password = $('#password').val();
        
        const users = Database.getUsers();
        const user = users.find(u => u.username === username);
        
        if (!user || user.password !== CryptoJS.SHA256(password).toString()) {
            showToast('Login gagal', 'error');
            return;
        }
        
        localStorage.setItem('current_user', JSON.stringify(user));
        location.reload();
    });
    
    // ... event handlers lainnya
});
