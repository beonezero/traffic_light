const btnNode = document.querySelector(".js-btn");

const traficLights = document.querySelector(".js-traffic-light");

initLight(traficLights);

btnNode.addEventListener("click", function () {
  switchLight(traficLights);
});
