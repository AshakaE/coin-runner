import Phaser from "phaser";

export default {
  // type: Phaser.AUTO,
  // parent: 'phaser-example',
  // width: 800,
  // height: 600
  type: Phaser.AUTO,
  parent: "thegame",
  width: 1334,
  height: 750,
  dom: {
    createContainer: true,
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  // backgroundColor: 0x0c88c7,

  // physics settings
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
};
