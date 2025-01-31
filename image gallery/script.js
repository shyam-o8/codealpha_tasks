
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');


const galleryImages = document.querySelectorAll('.gallery-item img');


galleryImages.forEach(img => {
  img.addEventListener('click', (e) => {
    const src = e.target.src;
    lightbox.style.display = 'flex';
    lightboxImg.src = src; 
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
