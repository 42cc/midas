$(document).ready(function() {
  var API_get_tracsactions_url = "https://bitcoin.toshi.io/api/v0/addresses/17bbEgzEURaLHnGXibgPrT3NZhijmT9AHq/transactions",
      transactions_table = $("#transactions-table"),
      transactions_content = $("#transactions-content");

  window.setInterval(function(){
    $.get( API_get_tracsactions_url, function( data ) {
      var transactions_content_display = transactions_content.css('display');

      transactions_table.find("tbody").html('');

      $.each(data.unconfirmed_transactions, function( t_index, unconfirmed_transactions ) {
        var output = unconfirmed_transactions.outputs[0];

        var sender_addresses = output.addresses;
        
        var status = "Not confirmed",
            status_color = "#c62828";

        if (sender_addresses) {
          transactions_table.find("tbody").append(
            '<tr>'+
              '<td class="tooltipped" data-position="top" data-delay="50" data-tooltip="' + unconfirmed_transactions.hash + '">'+
                '<a href="https://blockchain.info/tx/' + unconfirmed_transactions.hash + '">' + unconfirmed_transactions.hash.substring(0,10) + '...</a></td>'+
              '<td>' + sender_addresses[0] + '</td>'+
              '<td style="color: ' + status_color + '">' + status + '</td>'+
              '<td>' + output.amount / 100000000 + ' BTC</td>'+
              '<td>-</td>'+
            '</tr>'
          );
        };
      });

      $.each(data.transactions, function( t_index, transaction ) {
        var date = transaction.block_time.replace("T", " ");
        var date = date.replace("Z", "");
        var output = transaction.outputs[0];

        var sender_addresses = output.addresses;
        
        var status = "Confirmed",
            status_color = "#2e7d32";

        if (sender_addresses) {
          transactions_table.find("tbody").append(
            '<tr>'+
              '<td class="tooltipped" data-position="top" data-delay="50" data-tooltip="' + transaction.hash + '">'+
                '<a href="https://blockchain.info/tx/' + transaction.hash + '">' + transaction.hash.substring(0,10) + '...</a></td>'+
              '<td>' + sender_addresses[0] + '</td>'+
              '<td style="color: ' + status_color + '">' + status + '</td>'+
              '<td>' + output.amount / 100000000 + ' BTC</td>'+
              '<td>' + date + '</td>'+
            '</tr>'
          );
        };
      });

      if (transactions_table.find("tbody").html().length > 10 && transactions_content_display == "none") {
        transactions_content.css('display', 'block');
      };
    });
  }, 1000);


});
