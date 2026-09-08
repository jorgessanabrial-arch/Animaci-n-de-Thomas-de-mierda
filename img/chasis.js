(function(window) {
Símbolo_5_instancia_1 = function() {
	this.initialize();
}
Símbolo_5_instancia_1._SpriteSheet = new createjs.SpriteSheet({images: ["chasis.png"], frames: [[0,0,625,323,0,0,0]]});
var Símbolo_5_instancia_1_p = Símbolo_5_instancia_1.prototype = new createjs.Sprite();
Símbolo_5_instancia_1_p.Sprite_initialize = Símbolo_5_instancia_1_p.initialize;
Símbolo_5_instancia_1_p.initialize = function() {
	this.Sprite_initialize(Símbolo_5_instancia_1._SpriteSheet);
	this.paused = false;
}
window.Símbolo_5_instancia_1 = Símbolo_5_instancia_1;
}(window));

