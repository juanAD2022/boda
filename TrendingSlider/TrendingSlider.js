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

/* ===== Datos de álbumes =====
 * Edita las rutas de imágenes según tu contenido.
 * Cada clave corresponde al valor data-album del slide.
 */
var albumData = {
  inolvidables: {
    title: 'Inolvidables',
    images: [
      'images/inolvidable/img_1.jpg',
      'images/inolvidable/img_2.jpg',
      'images/inolvidable/img_3.jpg',
      'images/inolvidable/img_4.jpg',
      'images/inolvidable/img_5.jpg',
      'images/inolvidable/img_6.jpg',
      'images/inolvidable/img_7.jpg',
      'images/inolvidable/img_8.jpg',
      'images/inolvidable/img_9.jpg',
      'images/inolvidable/img_10.jpg',
      'images/inolvidable/img_11.jpg'
    ],
  },
  esposos: {
    title: 'Los Esposos',
    images: [
      'images/esposos/img_1.jpg',
      'images/esposos/img_2.jpg',
      'images/esposos/img_3.jpg',
      'images/esposos/img_4.jpg',
      'images/esposos/img_5.jpg',
      'images/esposos/img_6.jpg',
      'images/esposos/img_7.jpg',
      'images/esposos/img_8.jpg',
      'images/esposos/img_9.jpg',
      'images/esposos/img_10.jpg',
      'images/esposos/img_11.jpg',
      'images/esposos/img_12.jpg',
      'images/esposos/img_13.jpg',
      'images/esposos/img_14.jpg',
      'images/esposos/img_15.jpg',
      'images/esposos/img_16.jpg',
      'images/esposos/img_17.jpg',
      'images/esposos/img_18.jpg',
      'images/esposos/img_19.jpg',
      'images/esposos/img_20.jpg',
      'images/esposos/img_21.jpg',
      'images/esposos/img_22.jpg',
      'images/esposos/img_23.jpg',
      'images/esposos/img_24.jpg',
    ],
  },
  familia: {
    title: 'Familia',
    images: [
      'images/familia/img_1.jpg',
      'images/familia/img_2.jpg',
      'images/familia/img_3.jpg',
      'images/familia/img_4.jpg',
      'images/familia/img_5.jpg',
      'images/familia/img_6.jpg',
      'images/familia/img_7.jpg',
      'images/familia/img_8.jpg',
      'images/familia/img_9.jpg',
      'images/familia/img_10.jpg',
      'images/familia/img_11.jpg',
      'images/familia/img_12.jpg',
      'images/familia/img_13.jpg',
      'images/familia/img_14.jpg',
      'images/familia/img_15.jpg',
      'images/familia/img_16.jpg',
      'images/familia/img_17.jpg',
      'images/familia/img_18.jpg',
      'images/familia/img_19.jpg',
      'images/familia/img_20.jpg',
    ],
  },
  amigos: {
    title: 'Amigos',
    images: [
      'images/amigos/img_1.jpg',
      'images/amigos/img_2.jpg',
      'images/amigos/img_3.jpg',
      'images/amigos/img_4.jpg',
      'images/amigos/img_5.jpg',
      'images/amigos/img_6.jpg',
      'images/amigos/img_7.jpg',
      'images/amigos/img_8.jpg',
      'images/amigos/img_9.jpg',
      'images/amigos/img_10.jpg',
      'images/amigos/img_11.jpg',
      'images/amigos/img_12.jpg',
      'images/amigos/img_13.jpg',
      'images/amigos/img_14.jpg',
      'images/amigos/img_15.jpg',
      'images/amigos/img_16.jpg',
      'images/amigos/img_17.jpg',
      'images/amigos/img_18.jpg',
      'images/amigos/img_19.jpg',
      'images/amigos/img_20.jpg',
      'images/amigos/img_21.jpg',
      'images/amigos/img_22.jpg',
      'images/amigos/img_23.jpg',
      'images/amigos/img_24.jpg',
      'images/amigos/img_25.jpg',
      'images/amigos/img_26.jpg',
      'images/amigos/img_27.jpg',
      'images/amigos/img_28.jpg',
    ],
  },
};

/* ===== Modal Logic ===== */
function initAlbumModal() {
  var modal = document.getElementById('album-modal');
  if (!modal) return;

  var overlay   = modal.querySelector('.album-modal-overlay');
  var closeBtn  = modal.querySelector('.album-modal-close');
  var titleEl   = modal.querySelector('.album-modal-title');
  var imgEl     = modal.querySelector('.album-modal-img');
  var prevBtn   = modal.querySelector('.album-modal-prev');
  var nextBtn   = modal.querySelector('.album-modal-next');
  var thumbsEl  = modal.querySelector('.album-modal-thumbs');
  var counterEl = modal.querySelector('.album-modal-counter');

  var currentImages = [];
  var currentIndex  = 0;

  function showImage(index) {
    currentIndex = index;
    imgEl.classList.add('fade');
    setTimeout(function () {
      imgEl.src = currentImages[index];
      imgEl.onload = function () { imgEl.classList.remove('fade'); };
    }, 150);
    counterEl.textContent = (index + 1) + ' / ' + currentImages.length;

    // Actualizar thumbnails
    var thumbs = thumbsEl.querySelectorAll('.album-modal-thumb');
    thumbs.forEach(function (t, i) {
      t.classList.toggle('active', i === index);
    });
    // Scroll thumbnail activo al centro
    if (thumbs[index]) {
      thumbs[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }

  function openModal(albumKey) {
    var album = albumData[albumKey];
    if (!album || !album.images.length) return;

    currentImages = album.images;
    titleEl.textContent = album.title;

    // Generar thumbnails
    thumbsEl.innerHTML = '';
    album.images.forEach(function (src, i) {
      var thumb = document.createElement('img');
      thumb.className = 'album-modal-thumb';
      thumb.src = src;
      thumb.alt = album.title + ' ' + (i + 1);
      thumb.addEventListener('click', function () { showImage(i); });
      thumbsEl.appendChild(thumb);
    });

    showImage(0);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    imgEl.src = '';
  }

  // Navegación
  prevBtn.addEventListener('click', function () {
    showImage(currentIndex <= 0 ? currentImages.length - 1 : currentIndex - 1);
  });
  nextBtn.addEventListener('click', function () {
    showImage(currentIndex >= currentImages.length - 1 ? 0 : currentIndex + 1);
  });

  // Cerrar
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  // Teclas
  document.addEventListener('keydown', function (e) {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft')  prevBtn.click();
    if (e.key === 'ArrowRight') nextBtn.click();
  });

  // Swipe táctil para móviles
  var touchStartX = 0;
  var touchEndX   = 0;

  imgEl.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  imgEl.addEventListener('touchend', function (e) {
    touchEndX = e.changedTouches[0].screenX;
    var diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextBtn.click();  // swipe izquierda → siguiente
      else          prevBtn.click();  // swipe derecha → anterior
    }
  }, { passive: true });

  // Click en slides
  document.querySelectorAll('.tranding-slide[data-album]').forEach(function (slide) {
    slide.addEventListener('click', function () {
      var key = slide.getAttribute('data-album');
      if (key) openModal(key);
    });
  });
}

// Auto-inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
  initTrendingSlider('.tranding-slider');
  initAlbumModal();
});
