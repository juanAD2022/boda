/**
 * TrendingSlider Component
 *
 * Inicializa un carrusel Swiper con efecto coverflow 3D.
 *
 * Dependencias (deben cargarse antes de este script):
 *   - Swiper 8+  (swiper-bundle.min.css + swiper-bundle.min.js)
 *   - Ionicons 5+ (para los iconos de estrellas y flechas)
 *
 * Uso:
 *   1. Incluir TrendingSlider.css en el <head>.
 *   2. Insertar el contenido de TrendingSlider.html donde se necesite.
 *   3. Incluir este script después de swiper-bundle.min.js.
 *      - O llamar manualmente: initTrendingSlider('.tranding-slider')
 */

function initTrendingSlider(selector) {
  var el = document.querySelector(selector);
  if (!el) {
    console.warn('TrendingSlider: no se encontró el elemento "' + selector + '"');
    return null;
  }

  return new Swiper(selector, {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: selector + ' .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: selector + ' .swiper-button-next',
      prevEl: selector + ' .swiper-button-prev',
    },
  });
}

// Auto-inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
  initTrendingSlider('.tranding-slider');
});
