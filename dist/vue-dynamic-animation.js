!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueDynamicAnimation=e():t.VueDynamicAnimation=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}([function(t,e,n){var i,o;i=n(1),o=n(2),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0;if(!window.Smart)throw"vue-popup required smart.js";var i=window.Smart,o=i.Css,a=(i.Event,i._);e["default"]={props:{normal:{type:Object,"default":function(){return{}}},active:{type:Boolean,"default":!0},enter:{type:Object,"default":function(){return{}}},leave:{type:Object,"default":function(){return{}}},type:{type:String,"default":"transition"},keyframes:{type:Object,"default":function(){return{"0%":{opacity:1},"100%":{opacity:0}}}},animation:{type:Object,"default":function(){return{"animation-duration":"1s","animation-timing-function":"cubic-bezier(0.36,0.07,0.19,0.97)","animation-iteration-count":"infinite","animation-direction":"alternate"}}}},data:function(){return n++,{transition:"vue-dynamic-animation-count"+n}},methods:{_on_end:function(){console.log(this.transition)}},computed:{},ready:function(){if("transition"==this.type){if(a.isEqual({},this.enter)&&a.isEqual({},this.leave))return void o.smartCss(this.$el,this.normal,"px");a.isEqual({},this.enter)?this.enter=a.clone(this.leave):a.isEqual({},this.leave)&&(this.leave=a.clone(this.enter)),o.createSmartCssStyle("."+this.transition+"-transition",a.clone(this.normal),"px"),o.createSmartCssStyle("."+this.transition+"-leave",a.clone(this.leave),"px"),o.createSmartCssStyle("."+this.transition+"-enter",a.clone(this.enter),"px")}else if("animation"==this.type){var t=i.Utils.deepClone(this.keyframes),e=i.Animations.create(t);this.animation["animation-name"]=e.name,i.Css.createSmartCssStyle("."+this.transition,this.animation,"px")}}}},function(t,e){t.exports=" <div :transition=\"active?transition:''\" :class=\"active?transition:''\"> <slot></slot> </div> "}])});
//# sourceMappingURL=vue-dynamic-animation.js.map