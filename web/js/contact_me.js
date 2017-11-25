$(function () {

    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // prevent default submit behaviour

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
                    console.log(message);
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Vielen Dank für Ihre Nachricht. Unser Team wird sich umgehend mit Ihnen in Verbindung setzen.</strong>");
                    $('#success > .alert-success')
                        .append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },

                error: function (error) {
                    console.log(error);
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append($("<strong>")
                        .text("Bitte Entschuldigen Sie. Es scheint ein Problem mit dem Mail Server zu geben. Bitte versuchen Sie zu einem späteren Zeitpunkt erneut."));
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    // $('#contactForm').trigger("reset");
                },
                complete: function () {
                    $spinner.hide(0); // Hide loading spinner
                    setTimeout(function () {
                        $button.prop("disabled", false); // Re-enable submit button when AJAX call is complete
                    }, 1000);
                }
            });
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
