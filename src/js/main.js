import * as PIXI from 'pixi.js-legacy';
import { randomInt } from './functions';


// Creating Pixi app
export var app = new PIXI.Application({
    height: window.innerHeight,
    width: window.innerWidth,
    backgroundColor: 0x1099bb,
    
}); 
document.body.appendChild(app.view);

await PIXI.Assets.load('sample.png');
