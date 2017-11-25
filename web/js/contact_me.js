$(function () {

    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // prevent default submit behaviour

            // Google ReCaptcha validation. If successful it will call the 'submitContactForm' function
            grecaptcha.execute();
        },
        filter: function () {
            return $(this).is(":visible");
        }
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function () {
    $('#success').html('');
});

function submitContactForm() {
    var $button = $("#sendMessageButton"),
        $spinner = $("#spinner");
    $button.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
    $spinner.show(); // Display loading spinner

    $.ajax({
        url: "/",
        type: "POST",
        dataType: "json",
        // get values from FORM
        data: $('#contactForm').serialize(),
        cache: false,
        success: function (message) {
            // Success message
            $('#success').html("<div class='alert alert-success'>");
            var $success = $('#success > .alert-success');
            $success.html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
            $success.append("<strong>Vielen Dank für Ihre Nachricht. Unser Team wird sich umgehend mit Ihnen in Verbindung setzen.</strong>");
            $success.append('</div>');

            //clear all fields
            $('#contactForm').trigger("reset");
        },

        error: function (error) {
            // Fail message
            $('#success').html("<div class='alert alert-danger'>");
            var $danger = $('#success > .alert-danger');
            $danger.html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
            $danger.append("<strong>Bitte Entschuldigen Sie. Es scheint ein Problem mit dem Mail Server zu geben. Bitte versuchen Sie zu einem späteren Zeitpunkt erneut.</strong>");
            $danger.append('</div>');
        },
        complete: function () {
            $spinner.hide(0); // Hide loading spinner
            grecaptcha.reset(); // Reset Google ReCaptcha
            setTimeout(function () {
                $button.prop("disabled", false); // Re-enable submit button when AJAX call is complete
            }, 1000);
        }
    });
}