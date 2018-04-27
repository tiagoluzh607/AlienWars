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
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
		cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.teclaPressionada, this)
		cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.teclaSolta, this)
	},

	teclaPressionada: function(event){
		
		if(event.keyCode == cc.KEY.a){ //o cc.KEY.a é a biblioteca de teclas da coco
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
			this.node.x += 1;
		}
	},
});
