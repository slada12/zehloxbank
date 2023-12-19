<!DOCTYPE html><html lang="en"><head>
    <meta charset="UTF-8">
    
        <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Alliance Bank - About Us</title>
    <link rel="stylesheet" href="../css/all.min.css">
    <link rel="stylesheet" href="../css/bootstrap.css">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/axios-loader_2.css">
    
        

        
        <meta content="Welcome to " name="keywords">
        <meta content="Welcome to " name="author">
        <meta content="Welcome to " name="description">
        
        <link href="../images/logo.png" rel="shortcut icon">
        <link href="../images/logo.png" rel="apple-touch-icon">
        <link href="../css/css_1.css" rel="stylesheet" type="text/css">
        <link href="../css/select2.min.css" rel="stylesheet">
        <link href="../css/daterangepicker.css" rel="stylesheet">
        <link href="../css/dropzone.css" rel="stylesheet">
        <link href="../css/dataTables.bootstrap.min.css" rel="stylesheet">
        <link href="../css/fullcalendar.min.css" rel="stylesheet">
        <link href="../css/perfect-scrollbar.min.css" rel="stylesheet">
        <link href="../css/slick.css" rel="stylesheet">
        <link href="../css/main4e61.css" rel="stylesheet">
        <link rel="stylesheet" href="../css/intlTelInput.css">
        <link rel="stylesheet" href="../css/intlTelInput.css">
    

</head>
 <body>

    <div class="container container_shift">
        <div class="row">
            <div class="col-md-12">
                <section class="section section-variant-1 bg-gray-100 text-center not-found-error">
                    <div class="container">
                            <div class="page_not_found">
                                    <h1>404</h1>
                                    <p style="margin-bottom: 20px;">The page you are looking for could not be found on our server</p>
                                    <div class="contained__cta_action">
                                        <a class="contained__cta" href="https://zehliox.com">Go Back Home</a>
                                    </div>

                               </div>
                    </div>
                </section>
            </div>
        </div>

    </div>






<div id="google_translate_element"></div>
<script src="jquery-3.0.0.min.js"></script>
<script src="bootstrap.js"></script>
<script src="axios.min_2.js"></script>
<script src="axios-loader_2.js"></script>
<script type="text/javascript">
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL}, 'google_translate_element');
    }
</script>
<script type="text/javascript" src="element.js"></script>
<script>loadProgressBar();</script>
<script>

    $('.carousel').carousel({
        interval: 2000
    })

</script>

<script>
$(document).on('submit','#contact_us_footer', function(event){
        event.preventDefault();

        var form_data = new FormData();
        form_data.append('_token', '');
        form_data.append('name', $('#name').val());
        form_data.append('email', $('#email').val());
        form_data.append('comment', $('#comment').val());

        axios.post('https://zehliox.com/contact_us_footer', form_data )
        .then(function(resp){
            form_data.append('name', $('#name').val());
            form_data.append('email', $('#email').val());
            form_data.append('comment', $('#comment').val());
            $('#form_ss_2').html(resp.data.data);
        })
        .catch(function(error){
        printErrorMsg(error.response.data.error);
        })
});

function printErrorMsg (msg) {
    if( typeof msg === 'string') {
    } else {
        var objt = Object.keys(msg);
        var stat = 0;
        show_error('name', '#name_er')
        show_error('email', '#email_er')
        show_error('comment', '#comment_er')
        show_error2('error', '#comment_er_2')
    }

    function show_error(filed, selector){
        if (jQuery.inArray(filed, objt) == "-1") {
            stat = 1;
            if (stat === 1) {
                $(selector).html('');
            }
        } else {
            stat = 0;
            if (stat === 0) {
                $(selector).html(msg[filed][0]);
            }
        }
    }

    function show_error2(filed, selector){
        if (jQuery.inArray(filed, objt) == "-1") {
            stat = 1;
            if (stat === 1) {
                $(selector).html('');
            }
        } else {
            stat = 0;
            if (stat === 0) {
                $(selector).html(msg[filed]);
            }
        }
    }

}



</script>







</body></html>