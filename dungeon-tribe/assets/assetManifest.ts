import { AssetsManifest } from "@pixi/assets";

export const manifest: AssetsManifest = {
  bundles: [
    {
      name: "main",
      assets: {
        tileset: "./assets/tileset.png",
        sounds: "./assets/sounds/sounds.mp3",
        music: "./assets/music/music.mp3",

        wasd: "./assets/wasd.png",
        arrows: "./assets/arrows.png",
        esc: "./assets/esc.png",
        enter: "./assets/enter.png",
        space: "./assets/space.png",
        directions: "./assets/directions.png",
        hand: "./assets/hand.png",
      },
    },
  ],
};
