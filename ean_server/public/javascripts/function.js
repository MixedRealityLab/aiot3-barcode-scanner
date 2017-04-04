$(document).ready(function(){
    //others functions and variables here!!!!!

    $('.user_delete').on('click', function(e) {
        e.preventDefault();
        var userid = $(this).attr('id');    
        $.ajax({
            method: 'GET',
            url: baseurl + 'deleteUser/'+userid,
            dataType: 'html',
            success: function(data){
                $('#users_list').html(data);
             },
         });
     });
}


script.
      function getAndRenderData () {
      $.ajax({
      url: document.URL+"customers/",
      // the URL for the request
      type: "GET",
      // whether this is a POST or GET request
      dataType: "json",
      // the type of data we expect back
      success: function (responseJson) {
      // code to run if the request succeeds; parameter = response
      var trHTML = '';
      $.each(responseJson, function (i, customer) {
      trHTML += '<tr><td>' + customer.firstName + '</td><td>' + customer.lastName + '</td></tr>';
      });
      $('#customers_table').append(trHTML);
      },
      error: function (xhr, status) {
      // code run if request fails; raw request and status
      console.log("Sorry, there was a problem!");
      },
      complete: function (xhr, status) {  	// code to run regardless of success or failure
      console.log("The request is complete!");
      }
      })
      }
      (function($) { $(function() {
      $('#button1').click(getAndRenderData);
      });
      })(jQuery);



script.
      function getAndRenderData () {
      $.ajax({
	      url: 'route/eanlist', // the URL for the request
	      type: "GET", // whether this is a POST or GET request
	      dataType: "json", // the type of data we expect back
	      success: function (responseJson) {
	      	// code to run if the request succeeds; parameter = response
	      	//var trHTML = '';
	      	//$.each(responseJson, function (i, eanlist) {
	      	//trHTML += '<tr><td>' + eanlist.codenumer + '</td><td>' + eanlist.products.description + '</td></tr>';
	      	//});
	      	//$('#ean_table').append(trHTML);
	      	console.log('success');
	      },
	      error: function (xhr, status) {
	      	// code run if request fails; raw request and status
	      	console.log('Sorry, there was a problem!');
	      },
	      complete: function (xhr, status) { 
	       	// code to run regardless of success or failure
	      	console.log('The request is complete!');
	      }
      })
      }
      (function($) { $(function() {
      	$(document).ready(getAndRenderData);
      });
      })(jQuery);



