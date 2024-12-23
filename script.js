document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formaning default harakatini oldini olish

    // Foydalanuvchi kiritgan ma'lumotlar
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // POST so'rovini yuborish
    fetch('http://127.0.0.1:3000/login', {  // Backend serverining URL manzili
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Kirish muvaffaqiyatli bo'lsa, foydalanuvchini bosh sahifaga o'tkazish
            alert('Login successful!');
        } else {
            // Xato bo'lsa, foydalanuvchiga xatolik haqida xabar berish
            alert('Login failed: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred');
    });
});
