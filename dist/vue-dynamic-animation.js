!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueDynamicAnimation=e():t.VueDynamicAnimation=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}([function(t,e,n){var i,o;i=n(1),o=n(2),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},function(t,e){"use strict";function n(){return{"animation-duration":"1s","animation-timing-function":"cubic-bezier(0.36,0.07,0.19,0.97)","animation-iteration-count":"infinite","animation-direction":"alternate"}}function i(){return{transition:"all 0.5s ease",opacity:1,"transition-delay":"0.01s"}}function o(){return{transition:"all 0.5s ease",opacity:0,"transition-delay":"0.01s"}}Object.defineProperty(e,"__esModule",{value:!0});var r=0;if(!window.Smart)throw"vue-popup required smart.js";var a=window.Smart,s=a.Css,c=(a.Event,a._);e["default"]={props:{normal:{type:Object,coerce:function(t){return c.extend(i(),t)},"default":function(){return{}}},active:{type:Boolean,"default":!0},enter:{type:Object,coerce:function(t){return c.extend(o(),t)},"default":function(){return{}}},leave:{type:Object,coerce:function(t){return c.extend(o(),t)},"default":function(){return{}}},type:{type:String,"default":"transition"},keyframes:{type:Object,"default":function(){return{"0%":{opacity:1},"100%":{opacity:0}}}},animation:{type:Object,coerce:function(t){return c.extend(n(),t)},"default":function(){return{}}}},data:function(){return r++,{transition:"vue-dynamic-animation-count"+r}},methods:{_on_end:function(){console.log(this.transition)}},computed:{},ready:function(){if("transition"==this.type){if(c.isEqual({},this.enter)&&c.isEqual({},this.leave))return void s.smartCss(this.$el,this.normal,"px");c.isEqual({},this.enter)?this.enter=c.clone(this.leave):c.isEqual({},this.leave)&&(this.leave=c.clone(this.enter)),s.createSmartCssStyle("."+this.transition+"-transition",c.clone(this.normal),"px"),s.createSmartCssStyle("."+this.transition+"-leave",c.clone(this.leave),"px"),s.createSmartCssStyle("."+this.transition+"-enter",c.clone(this.enter),"px")}else if("animation"==this.type){var t=a.Utils.deepClone(this.keyframes),e=a.Animations.create(t);this.animation["animation-name"]=e.name,a.Css.createSmartCssStyle("."+this.transition,this.animation,"px")}}}},function(t,e){t.exports=" <div :transition=\"active?transition:''\" :class=\"active?transition:''\"> <slot></slot> </div> "}])});
//# sourceMappingURL=vue-dynamic-animation.js.map