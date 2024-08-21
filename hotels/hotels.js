document.addEventListener('DOMContentLoaded', function () {
  const cardContainers = document.querySelectorAll('.card-container');

  cardContainers.forEach((container) => {
    const images = container.querySelectorAll('.card-img img');
    const prevButton = container.querySelector('.btn-prev');
    const nextButton = container.querySelector('.btn-next');
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

    prevButton.addEventListener('click', function () {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
      showImage(currentIndex, 'prev');
    });

    nextButton.addEventListener('click', function () {
      currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
      showImage(currentIndex, 'next');
    });

    // Truncate text and add "See more/less" functionality
    const cardText = container.querySelector('.card-text');
    const seeMoreButton = container.querySelector('.btn-see-more');
    const fullText = cardText.textContent;
    const truncatedText = fullText.slice(0, 60) + '...';

    if (fullText.length > 60) {
      cardText.textContent = truncatedText;

      seeMoreButton.style.display = 'inline'; // Show the "See more" button

      seeMoreButton.addEventListener('click', function () {
        if (cardText.classList.contains('expanded')) {
          cardText.classList.remove('expanded');
          cardText.textContent = truncatedText;
          seeMoreButton.textContent = 'See more';
        } else {
          cardText.classList.add('expanded');
          cardText.textContent = fullText;
          seeMoreButton.textContent = 'See less';
        }
      });
    } else {
      seeMoreButton.style.display = 'none'; // Hide the "See more" button if text is short
    }
  });
});
