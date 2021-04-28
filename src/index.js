import Phaser from 'phaser';

import config from './Config/config';
import Model from './Model';
import BootScene from './Scenes/BootScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', BootScene);
  }
}

window.game = new Game();
