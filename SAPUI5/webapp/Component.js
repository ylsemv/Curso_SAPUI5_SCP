//@ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "ecsas/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel"    

],
/**
 * @param {typeof sap.ui.core.UIComponent} UIComponent
 * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
 * 
 */
function(UIComponent, Models, ResourceModel){
    return UIComponent.extend("ecsas.SAPUI5.Component", {

        metadara:{
            manifest: "json"
            // "rootView": {
            //     "viewName": "ecsas.SAPUI5.view.App",
            //     "type": "XML",
            //     "async": true,
            //     "id": "ecsas.SAPUI5"
            // }
        },
        init: function(){
            //llamando al init de la function padre
            UIComponent.prototype.init.apply(this, arguments);

            //seteo del modelo de la vista
            this.setModel(Models.createRecipient());

            //Seteo del i18n model
            var i18nModel = new ResourceModel({bundleName:"ecsas.SAPUI5.i18n.i18n"});
            this.setModel(i18nModel, "i18n");
        }
    })

})