let images = [
    "https://tse3.mm.bing.net/th/id/OIP.neja3Geo7p04g32pAc4XAgHaEo?pid=Api&P=0&h=220",
    "https://tse4.mm.bing.net/th/id/OIP.54lzvSYm9sYvTGzA_ZdPFQHaE8?pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th/id/OIP.mbKyD76XrD3AC3624zqAFwHaEo?pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th/id/OIP.eL3k1RkSjZE4AYHJW3b5nwHaEo?pid=Api&P=0&h=220"
];

let currentIndex = 0;

function showImage(index) {
    document.getElementById("galleryImage").src = images[index];
}

showImage(currentIndex);

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}
