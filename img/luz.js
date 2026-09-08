(function(window) {
mc_luz_instancia_1 = function() {
	this.initialize();
}
mc_luz_instancia_1._SpriteSheet = new createjs.SpriteSheet({images: ["luz.png"], frames: [[0,0,197,172,0,170.1,72.85],[197,0,197,172,0,170.1,72.85]]});
var mc_luz_instancia_1_p = mc_luz_instancia_1.prototype = new createjs.Sprite();
mc_luz_instancia_1_p.Sprite_initialize = mc_luz_instancia_1_p.initialize;
mc_luz_instancia_1_p.initialize = function() {
	this.Sprite_initialize(mc_luz_instancia_1._SpriteSheet);
	this.paused = false;
}
window.mc_luz_instancia_1 = mc_luz_instancia_1;
}(window));

