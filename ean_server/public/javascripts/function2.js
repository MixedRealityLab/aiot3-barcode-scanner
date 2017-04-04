$(document).ready(function(){
    //others functions and variables here!!!!!
     $.ajax({
	      url: 'http://10.16.183.196:3000/eanlist', // the URL for the request
	      type: 'GET', // whether this is a POST or GET request
	      cache: false,
	      dataType: 'json', // the type of data we expect back
	      success: function (responseJson) {
	      	console.log('success');
	      	$('#test').append(responseJson);
	      	alert(':)');
	      },
	      error: function(){
	      	alert('well there is a problem');
	      }
	      });

});


