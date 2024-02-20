// IMAGE POP UP
const imageContainers = document.querySelectorAll('.hover-text');

imageContainers.forEach(imageContainer => {
  const popUpImage = imageContainer.querySelector('.hover-img');

  imageContainer.addEventListener('mouseenter', function () {
    gsap.to(popUpImage, { duration: 0.6, opacity: 1, scale: 1.1, ease: 'power2.out' });
  });

  imageContainer.addEventListener('mouseleave', function () {
    gsap.to(popUpImage, { duration: 0.6, opacity: 0, scale: 1, ease: 'power2.out' });
  });
});