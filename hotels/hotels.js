document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.card-img img');
  let currentIndex = 0;

  function showImage(index, direction) {
    images.forEach((img, i) => {
      img.classList.remove('active', 'prev');

      if (i === index) {
        img.classList.add('active');
      } else if (
        i ===
        (direction === 'next'
          ? (index + images.length - 1) % images.length
          : (index + 1) % images.length)
      ) {
        img.classList.add('prev');
      }
    });
  }

  document.querySelector('.btn-prev').addEventListener('click', function () {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex, 'prev');
  });

  document.querySelector('.btn-next').addEventListener('click', function () {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    showImage(currentIndex, 'next');
  });
});
