sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
//    "ecsas/SAPUI5/model/Models",
//    "sap/ui/model/resource/ResourceModel"
],
/**
 * @param {typeof sap.ui.core.mvc.Controller} Controller
 * @param {typeof sap.m.MessageToast} MessageToast
 * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
 */
function(Controller, MessageToast, Models, ResourceModel){
    "use strict";

    return Controller.extend("ecsas.SAPUI5.controller.App", {

        onInit: function(){
            
            //Seteo del Modelo a la vista
            //this.getView().setModel(Models.createRecipient());

            //seteo del i18n en la vista
            //var i18nModel = new ResourceModel({bundleName : "ecsas.SAPUI5.i18n.i18n"});
            //this.getView().setModel(i18nModel, "i18n");

            //var oModel = new JSONModel(oData);  
            //this.getView().setModel(oModel);
        },

        onMostrarSaludo: function(){
            //Leer el texto desde el modelo i18n
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMensaje = oBundle.getText("message", [sRecipient]);
            MessageToast.show(sMensaje);
        }

    });

})