$(document).ready(function() {
  var how_much_input = $('#how_much'),
      how_much = 0,
      period = '',
      period_days = 0,
      percent = 0.001,
      //variable for regulation payments for transaction
      commissionOfService = 0.0042,
      your_get_span = $('#you-get'),
      your_return_span = $('#you-return');

  // Look for changes in the value
   how_much_input.bind("propertychange change click keyup input paste", function(event){
      // If value has changed...
      how_much = parseFloat(how_much_input.val());



      if (how_much !== 0 && period_days !== 0) {
        your_get = parseFloat((how_much).toFixed(6));
        your_get_span.text(your_get);
        var total_return = parseFloat((percent * period_days * how_much + your_get).toFixed(6));
        your_return_span.text(total_return);
      };

      if (!how_much) {
        your_get_span.text(0)
        your_return_span.text(0)
      }

      if (how_much < 0) {
        how_much_input.val(0)
      }

      // when value more than 1 char and first char is zero then clear first zero
      if (how_much_input.val().length > 1 && how_much_input.val()[0] == "0") {
        how_much_input.val(how_much_input.val().substr(1))
      }

   });

  // helper function
    function getPeriod(period) {
        if (period == "day") {
          period_days = 1;
        } else if (period == "week") {
          period_days = 7;
        } else if (period == "1month") {
          period_days = 30;
        } else if (period == "6month") {
          period_days = 30*6;
        } else if (period == "year") {
          period_days = 365;
        };
    }

   $('input:radio').change(
      function(){
          period = $(this).attr('id');
          getPeriod(period);

          if (how_much !== 0 && period_days !== 0) {
            your_get = parseFloat((how_much).toFixed(6));
            your_get_span.text(your_get);
            var total_return = parseFloat((percent * period_days * how_much + your_get).toFixed(6));
            your_return_span.text(total_return);
          };

          if (!how_much) {
            your_get_span.text(0)
            your_return_span.text(0)
          }
      }
    );
});
