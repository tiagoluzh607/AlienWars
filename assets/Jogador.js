// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
		
		_acelerando:false,
		_direcao: cc.Vec2,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
		cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.teclaPressionada, this); //dispara a funcao teclaPressionada quando qualquer tecla for precionada
		cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.teclaSolta, this); //dispara a funcao teclaSolta quando qualquer tecla for solta
		
		
		let canvas = cc.find("Canvas"); // retorna o node de canvas
		canvas.on("mousemove", this.mudarDirecao, this); // dispara o a funcao mudarDirecao enquanto o mouse estiver no canvas "tela do jogo"
	},

	mudarDirecao: function(event){
		
		let posicaoMouse = event.getLocation(); //pega posicao x e y do mouse
		posicaoMouse = new cc.Vec2(posicaoMouse.x, posicaoMouse.y); //transforma em um vetor
		
		let direcao = posicaoMouse.sub(this.node.position); // a direcao é a posição do mouse - posicao da nave
		direcao = direcao.normalize(); //normaliza a direcao para andar sempre em 1px pois ele divide o vetor direcao por ele mesmo
		this._direcao = direcao;
	},
	
	
	teclaPressionada: function(event){
		
		if(event.keyCode == cc.KEY.a){ //verifica se a tecla presiionada foi o A o cc.KEY.a é a biblioteca de teclas da coco
			this._acelerando = true;
		}
	},
	
	teclaSolta: function(event){
		
		if(event.keyCode == cc.KEY.a){
			this._acelerando = false;
		}
	},
	
	
    start () {

    },

    update (dt) {
		if(this._acelerando){
			this.node.position = this.node.position.add(this._direcao); //pega posicao na nave hero e adiona a direcao para que ela vai;
		}
	},
});
