document.getElementById('loginBtn').addEventListener('click', function () {
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    if (userId && password) {
        localStorage.setItem('userId', userId);
    
        alert(`Logged in as: ${userId}`);
    } else {
        alert('Please enter both User ID and Password.');
    }
});

document.getElementById('logoutBtn').addEventListener('click', function () {
    localStorage.removeItem('userId');
    alert('Logged out successfully.');
});


// const userData = { userId: userId, password: password };
        // localStorage.setItem("userData", JSON.stringify(userData));
