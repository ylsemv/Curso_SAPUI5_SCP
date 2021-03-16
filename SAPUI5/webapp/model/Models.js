// @ts-nocheck
sap.ui.define([
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param{typeof sap.ui.model.json.JSONModel} JSONModel
     */
function(JSONMODEL){
        "use strict";
        return {
            createRecipient: function() {

             var oData = {
                recipient : {
                    name : "JSon",
                    apellido: "Perez"
                }
            };
                return new JSONMODEL(oData);
            }
        }
})