"use strict";var Montage=require("../core").Montage,Promise=require("../promise").Promise,RemoteReference=require("./remote-reference").RemoteReference,BinderModule=require("./binder"),logger=require("../logger").logger("blueprint");exports.BinderReference=RemoteReference.create(RemoteReference,{constructor:{value:function(){this.superForValue("constructor")()}},identifier:{get:function(){return this._reference||(this._reference=this.referenceFromValue(this._value)),["binder",this._reference.binderName.toLowerCase(),"reference"].join("_")}},valueFromReference:{value:function(e,t){var n=e.binderName,r=e.binderModuleId,i=Promise.defer(),a=BinderModule.Binder.manager.binderForName(n);if(a)i.resolve(a);else try{var o=t,s=r.indexOf("/");if(s>0){var l=r.substring(0,s),u=t.mappings;l in u&&(r=r.substring(s+1),o=o.getPackage(u[l].location))}i=BinderModule.Binder.getBinderWithModuleId(r,o)}catch(c){i.reject(Error("Error cannot find Blueprint Binder "+r))}return i.promise}},referenceFromValue:{value:function(e){var t={};return t.binderName=e.name,t.binderModuleId=e.binderModuleId,t}}});