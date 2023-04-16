const LIGHTS = {
  red: "red",
  yellow: "yellow",
  green: "green",
};

const CLASSES_BY_LIGHT = {
  [LIGHTS.red]: "lights_red",
  [LIGHTS.yellow]: "lights_yellow",
  [LIGHTS.green]: "lights_green",
};

const NEXT_LIGHT_BY_LIGHT = {
  [LIGHTS.red]: LIGHTS.yellow,
  [LIGHTS.yellow]: LIGHTS.green,
  [LIGHTS.green]: LIGHTS.red,
};

let currentLight = LIGHTS.red;

function switchLight(node) {
  const currentClass = CLASSES_BY_LIGHT[currentLight];
  const nextLight = NEXT_LIGHT_BY_LIGHT[currentLight];
  const nextClass = CLASSES_BY_LIGHT[nextLight];

  currentLight = NEXT_LIGHT_BY_LIGHT[currentLight];

  node.classList.replace(currentClass, nextClass);
}

function initLight(node) {
  node.classList.add(CLASSES_BY_LIGHT[currentLight]);
}
