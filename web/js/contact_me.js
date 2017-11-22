$(function () {

    // $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    //     preventSubmit: true,
    //     submitError: function ($form, event, errors) {
    //         // additional error messages or events
    //     },
    //     submitSuccess: function ($form, event) {
    //         event.preventDefault(); // prevent default submit behaviour
    //
    //         // get values from FORM
    //         var name = $("input#name").val();
    //         var email = $("input#email").val();
    //         var subject = $("input#subject").val();
    //         var message = $("textarea#message").val();
    //         var firstName = name; // For Success/Failure Message
    //
    //         // Check for white space in name for Success/Fail message
    //         if (firstName.indexOf(' ') >= 0) {
    //             firstName = name.split(' ').slice(0, -1).join(' ');
    //         }
    //
    //         $this = $("#sendMessageButton");
    //         $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
    //
    //         $.ajax({
    //             // url: "././mail/contact_me.php",
    //             url: "contact-form/send",
    //             type: "POST",
    //             data: {
    //                 fromName: name,
    //                 fromEmail: email,
    //                 subject: subject,
    //                 message: message
    //             },
    //             cache: false,
    //             success: function (message) {
    //                 console.log(message);
    //                 // Success message
    //                 $('#success').html("<div class='alert alert-success'>");
    //                 $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
    //                     .append("</button>");
    //                 $('#success > .alert-success')
    //                     .append("<strong>Vielen Dank für Ihre Nachricht. Unser Team wird sich umegehend mit Ihnen in Verbindung setzen.</strong>");
    //                 $('#success > .alert-success')
    //                     .append('</div>');
    //                 //clear all fields
    //                 $('#contactForm').trigger("reset");
    //             },
    //
    //             error: function (error) {
    //                 console.log(error);
    //                 // Fail message
    //                 $('#success').html("<div class='alert alert-danger'>");
    //                 $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
    //                     .append("</button>");
    //                 $('#success > .alert-danger').append($("<strong>")
    //                     .text("Bitte Entschuldigen Sie " + firstName + ". Es scheint ein Problem mit dem Mail Server zu geben. Bitte versuchen Sie zu einem späteren Zeitpunkt erneut."));
    //                 $('#success > .alert-danger').append('</div>');
    //                 //clear all fields
    //                 // $('#contactForm').trigger("reset");
    //             },
    //             complete: function () {
    //                 setTimeout(function () {
    //                     $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
    //                 }, 1000);
    //             }
    //         });
    //     },
    //     filter: function () {
    //         return $(this).is(":visible");
    //     },
    // });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });

    // $('#contactForm').submit(function(ev) {
    //     // Prevent the form from actually submitting
    //     ev.preventDefault();
    //
    //     // Send it to the server
    //     $.post('/contact-form/send', {
    //         dataType: 'json',
    //         data: $(this).serialize(),
    //         success: function(response) {
    //             console.log(response);
    //
    //             if (response.success) {
    //                 // $('#thanks').fadeIn();
    //                 $('#success').html("<div class='alert alert-success'>");
    //                 $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
    //                     .append("</button>");
    //                 $('#success > .alert-success')
    //                     .text("Bitte Entschuldigen Sie. Es scheint ein Problem mit dem Mail Server zu geben. Bitte versuchen Sie zu einem späteren Zeitpunkt erneut.");
    //                 $('#success > .alert-success').append('</div>');
    //                 //clear all fields
    //                 $('#contactForm').trigger("reset");
    //
    //             } else {
    //                 // response.error will be an object containing any validation errors that occurred, indexed by field name
    //                 // e.g. response.error.fromName => ['From Name is required']
    //                 // alert('An error occurred. Please try again.');
    //
    //                 // Fail message
    //                 $('#success').html("<div class='alert alert-danger'>");
    //                 $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
    //                     .append("</button>");
    //                 $('#success > .alert-danger').append($("<strong>")
    //                     .text("Bitte Entschuldigen Sie " + firstName + ". Es scheint ein Problem mit dem Mail Server zu geben. Bitte versuchen Sie zu einem späteren Zeitpunkt erneut."));
    //                 $('#success > .alert-danger').append('</strong></div>');
    //                 //clear all fields
    //                 // $('#contactForm').trigger("reset");
    //             }
    //         }
    //     });
    // });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function () {
    $('#success').html('');
});
