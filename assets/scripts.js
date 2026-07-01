function scrollPortfolio(direction) {
  const slider = document.getElementById('portfolioSlider');
  if (!slider) return;
  const slide = slider.querySelector('.portfolio-slide');
  if (!slide) return;
  
  const cardWidth = slide.offsetWidth + 20; // card width + gap
  slider.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  
  // Slider Controls & Visual Opacities
  const slider = document.getElementById('portfolioSlider');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const wrapper = document.querySelector('.portfolio-slider-wrapper');
  
  if (slider && prevBtn && nextBtn && wrapper) {
    function updateNavButtons() {
      const scrollLeft = slider.scrollLeft;
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      
      // If content is not scrollable (total width fits in container), hide both buttons
      if (maxScroll <= 0) {
        prevBtn.style.opacity = '0';
        prevBtn.style.pointerEvents = 'none';
        nextBtn.style.opacity = '0';
        nextBtn.style.pointerEvents = 'none';
        wrapper.style.setProperty('--left-fade', '0');
        wrapper.style.setProperty('--right-fade', '0');
        return;
      }
      
      // Update prev button
      if (scrollLeft <= 5) {
        prevBtn.style.opacity = '0';
        prevBtn.style.pointerEvents = 'none';
        wrapper.style.setProperty('--left-fade', '0');
      } else {
        prevBtn.style.opacity = '1';
        prevBtn.style.pointerEvents = 'auto';
        wrapper.style.setProperty('--left-fade', '1');
      }
      
      // Update next button
      if (scrollLeft >= maxScroll - 5) {
        nextBtn.style.opacity = '0';
        nextBtn.style.pointerEvents = 'none';
        wrapper.style.setProperty('--right-fade', '0');
      } else {
        nextBtn.style.opacity = '1';
        nextBtn.style.pointerEvents = 'auto';
        wrapper.style.setProperty('--right-fade', '1');
      }
    }
    
    slider.addEventListener('scroll', updateNavButtons);
    // Run after a short delay to ensure rendering and scrollWidth calculations are correct
    setTimeout(updateNavButtons, 250);
    window.addEventListener('resize', updateNavButtons);
  }
});

