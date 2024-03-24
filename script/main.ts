function onFormSubmit(e) {
    var response = e.response;
    var itemResponses = response.getItemResponses();

    var message = '';
    for (var i = 0; i < itemResponses.length; i++) {
        var itemResponse = itemResponses[i];
        message += itemResponse.getItem().getTitle() + ': ' + itemResponse.getResponse() + '\n';
    }

    var email = PropertiesService.getScriptProperties().getProperty('email');
    MailApp.sendEmail({
        to: email,
        subject: "New Form Submission",
        body: message,
    });
}