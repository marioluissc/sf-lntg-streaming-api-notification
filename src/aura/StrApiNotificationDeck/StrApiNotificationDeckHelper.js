({
	handleShowNotificationEvent : function(component, event) {
        var ns = component.getDef().getDescriptor().getNamespace();
        var notificationType = component.get('v.notificationType');
        var title = event.getParam('title');
        var content = event.getParam('content') || '';
        var style = event.getParam('style') || '';
	var hideAfter = component.get('v.hideAfter');

       	var toastEvent = $A.get("e.force:showToast");
        console.log('Create Toast');
        toastEvent.setParams({
            "title": title,
            "message": content,
            "duration": hideAfter*1000,
            "type" : style,
	    "mode" : notificationType
        });
   	toastEvent.fire();
})
