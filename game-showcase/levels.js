import { randomHeartLabel, randomStarLabel } from './util.js';
import { Decoration } from './entities.js';

export const levels = [
  {
    name: "City",
    scrollSpeed: 120,
    groundColor: "#dddddd",
    groundPattern: null,
    decorationTypes: ["building", "lamp"],
    createDecoration(x, y) {
      let type = Math.random() < 0.7 ? "building" : "lamp";
      return new Decoration(type, x, y, this.name);
    },
    skyColor: "#a3d9ff",
    cloudColor: "rgba(255,255,255,0.8)"
  },
  {
    name: "Forest",
    scrollSpeed: 100,
    groundColor: "#c8e6c9",
    groundPattern: null,
    decorationTypes: ["tree", "bush"],
    createDecoration(x, y) {
      let type = Math.random() < 0.7 ? "tree" : "bush";
      return new Decoration(type, x, y, this.name);
    },
    skyColor: "#aaffaa",
    cloudColor: "rgba(255,255,255,0.8)"
  },
  {
    name: "Space",
    scrollSpeed: 80,
    groundColor: "#222",
    groundPattern: null,
    decorationTypes: ["satellite", "comet"],
    createDecoration(x, y) {
      let type = Math.random() < 0.5 ? "satellite" : "comet";
      return new Decoration(type, x, y, this.name);
    },
    skyColor: "#000",
    cloudColor: null
  }
];

export function createGroundPattern(ctx, color, detail) {
  const patCanvas = document.createElement('canvas');
  patCanvas.width = 50;
  patCanvas.height = 50;
  const pctx = patCanvas.getContext('2d');
  pctx.fillStyle = color;
  pctx.fillRect(0, 0, 50, 50);
  if (detail === "City") {
    pctx.strokeStyle = "rgba(0,0,0,0.1)";
    pctx.lineWidth = 1;
    pctx.beginPath();
    pctx.moveTo(0, 25);
    pctx.lineTo(50, 25);
    pctx.moveTo(25, 0);
    pctx.lineTo(25, 50);
    pctx.stroke();
  } else if (detail === "Forest") {
    pctx.strokeStyle = "rgba(0,150,0,0.3)";
    for (let i = 0; i < 50; i += 5) {
      pctx.beginPath();
      pctx.moveTo(i, 0);
      pctx.lineTo(i, 50);
      pctx.stroke();
    }
  } else if (detail === "Space") {
    pctx.fillStyle = "rgba(255,255,255,0.1)";
    for (let i = 0; i < 8; i++) {
      pctx.beginPath();
      pctx.arc(Math.random() * 50, Math.random() * 50, 1, 0, Math.PI * 2);
      pctx.fill();
    }
  }
  return ctx.createPattern(patCanvas, 'repeat');
}

export function initLevels(ctx) {
  levels[0].groundPattern = createGroundPattern(ctx, "#eeeeee", "City");
  levels[1].groundPattern = createGroundPattern(ctx, "#dcedc8", "Forest");
  levels[2].groundPattern = createGroundPattern(ctx, "#444", "Space");
}
