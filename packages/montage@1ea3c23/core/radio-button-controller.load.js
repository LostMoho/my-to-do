montageDefine("1ea3c23","core/radio-button-controller",{dependencies:["./core","./range-controller"],factory:function(e,t){var n=e("./core").Montage,r=e("./range-controller").RangeController;t.RadioButtonController=n.specialize({_radioButtons:{value:null},_content:{value:null},content:{get:function(){return this.getPath("contentController.content")},set:function(e){this.contentController=(new r).initWithContent(e)}},contentController:{value:null},selectedRadioButton:{value:null},_value:{value:null},value:{set:function(e){this._value!==e&&(this._value=e,this._updateRadioButtons())},get:function(){return this._value}},constructor:{value:function(){this._radioButtons=[],this.addRangeAtPathChangeListener("_radioButtons.map{checked}",this,"handleRadioButtonChange"),this.defineBinding("value ",{"<->":"contentController.selection.0"})}},_updateRadioButtons:{value:function(){for(var e=this._value,t=0,n=this._radioButtons.length;n>t;t++)if(e===this._radioButtons[t].value){this._radioButtons[t].checked=!0;break}}},registerRadioButton:{value:function(e){-1===this._radioButtons.indexOf(e)&&(this._radioButtons.push(e),this._updateRadioButtons())}},unregisterRadioButton:{value:function(e){var t=this._radioButtons.indexOf(e);t>=0&&(this._radioButtons.splice(t,1),e===this.selectedRadioButton&&(this.selectedRadioButton=null))}},handleRadioButtonChange:{value:function(e,t,n){if(e[0]===!0)for(var r=0,i=this._radioButtons.length;i>r;r++)r===n?(this.selectedRadioButton=this._radioButtons[r],this.value=this.selectedRadioButton.value):this._radioButtons[r].checked=!1}}},{blueprintModuleId:e("./core")._blueprintModuleIdDescriptor,blueprint:e("./core")._blueprintDescriptor})}});