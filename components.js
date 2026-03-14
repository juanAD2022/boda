async function loadTrendingSlider() {

  const response = await fetch("TrendingSlider/TrendingSlider.html");
  const html = await response.text();

  document.getElementById("trending-slider").innerHTML = html;

}

loadTrendingSlider();