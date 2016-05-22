$(document).ready(function() {
  $('#applications .btn-modal-accept').click(function() {
      if (confirm('Accept this application?')) {
          $(this).parents('.card').remove();
          Materialize.toast('Accepted!', 4000);
      }
  });
  $('#applications .btn-modal-decline').click(function() {
      if (confirm('Decline this application?')) {
          $(this).parents('.card').remove();
          Materialize.toast('Declined.', 4000);
      }
  })
  $('.modal-trigger').leanModal();
  $('.modal-trigger-application-submitted').leanModal({
      complete: function() {
          window.location.href="borrower_profile.html";
      }
  });
  $('.modal-application-submitted').click(function() {
      window.location.href="borrower_profile.html";
  });
  $('.modal-trigger-lending-submitted').leanModal({
      ready: function() {
        var your_get_span1 = $('#you-get'),
            your_get_modal = $('#you-get-modal');
        your_get_modal.text(your_get);
      },
      complete: function() {
          window.location.href="lender_profile.html";
      }
  });
  $('.modal-lending-submitted').click(function() {
      window.location.href="lender_profile.html";
  });

  $('.lend_form').submit(function(event) {
      event.preventDefault();
      $('#submit_lend').openModal();
  });
  $('.borrow_form').submit(function(event) {
      event.preventDefault();
      $('#submit_borrow').openModal();
  });

//get value for amount cell lender_table and put in lender_form
  $('#id_lender_table').find('tr').click(function () {

    var $amount = $(this).find('.lender_amount').text();

        $('#lend_amount').val($amount);
        $('#lend_amount_label').addClass('active');
        $('#lend_currency').val('BTC');
        $('#lend_currency_label').addClass('active');
      }
  );

//get value for amount cell for borrower_table and put in borrower_form
  $('#id_borrower_table').find('tr').click(function () {

    var $amount = $(this).find('.borrower_amount').text();

        $('#borrow_amount').val($amount);
        $('#borrow_amount_label').addClass('active');
        $('#borrow_currency').val('BTC');
        $('#borrow_currency_label').addClass('active');
      }
  );

function myFunction() {
        console.log($first_name.val());
        console.log($user_email.val());

}

var urlKava = 'https://kavahq.com/';


$('#id_login').click(function() {
  // myFunction();
https://kavahq.com/?email='email@mail.com'&?name='Some Body'
  var $first_name = $('#first_name').val();
  var $user_email = $('#user_email').val();
  var resultUrl = urlKava + '?email='+ $user_email + '&name=' + $first_name;

  console.log(resultUrl);
  $.get(resultUrl);
});



});
