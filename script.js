  $(document).ready(function () {

            $(".error-input, .error-email, .error-validemail, .error-input-colour, .animals-error, .error-desc, .error-valid-password").hide();        

            $('#submit').click(function () {

                 $(".error-input, .error-email, .error-validemail, .error-input-colour, .animals-error, .error-desc, .error-valid-password").hide();


 /*-----------------------------------------------------------
                   Validation to check Password 
  -----------------------------------------------------------*/


                var passvalue = $("#password").val().length;
                if (passvalue == 0) {
                    $(".error-input").show();
                    $("#password").addClass('error');
                }
                else if (passvalue <= 8) {
                    $(".error-valid-password").show();
                    $("#password").addClass('error');
                }

                else {
                   $("#password").removeClass('error'); 
                }


 /*-----------------------------------------------------------
                   Validation to check Email 
  -----------------------------------------------------------*/

                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                var emailaddressVal = $("#email").val();
                if (emailaddressVal == '') {
                    $(".error-email").show();
                    $("#email").addClass('error');
             
                }

                else if (!emailReg.test(emailaddressVal)) {
                    $(".error-validemail").show();
                    $(".error-email").hide();
                    $("#email").addClass('error');

                }

                else {
                   $("#email").removeClass('error'); 
                }


 /*------------------------------------------------------------------
                   Validation for color selector dropdown 
  ------------------------------------------------------------------*/

                var opt = $('#colour').val();
                if (opt == '') {
                    $(".error-input-colour").show();
                    $("#colour").addClass('error');
                }
                else{
                     $("#colour").removeClass('error');
                }



 /*-----------------------------------------------------------
                   Validation for Animals Checkbox 
  -----------------------------------------------------------*/
                
                var ch2 = $('input[name="animal"]:checked').length >= 2;
                if (ch2 == false) {
                    $(".animals-error").show();

                }
               if($('#tiger')[0].checked == true && $('#tiger_type').val() == ''){
                    $(".error-desc").show();
                    $("#tiger_type").addClass('error');
               }
 else{
                     $("#tiger_type").removeClass('error');
                }
            });

            $("#contact").submit(function (e) {
                e.preventDefault();   //Prevents Refresh
            });

        });