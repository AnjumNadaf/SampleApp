sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("sampleapplication1.controller.View1", {
			onInit: function () {

            },
            Create:function(){
               var id1 = this.getView().byId("id1").getValue();
               var id2 = this .getView().byId("id2").getValue();
               sap.m.MessageToast.show(id1 + " " + id2);
                        

            }
		});
	});
