$(document).ready(function() {
  
  	//Get Zip Code//
	$('button').click(function(){
		
		//remove class
		
		
		//store the weather//
		
		var zip = $('input').val();
  		console.log(zip);
		
		$.simpleWeather({
	
		// Minimum properties to set
		zipcode: zip,  /*zipcode*/
		unit: 'f',   /*farenheit*/
		
		// Method to display weather
		success: function(weather) {
			
			// Concatenate HTML code & weather variables.
			// Put into one big'ol collection
			html = '<h2>'+weather.temp +'&deg;'+weather.units.temp+'</h2>';  //what yahoo is giving us//
			html += '<ul><li>'+weather.city+', '+weather.region+'</li>';    //city//
			html += '<ul><li> <img src="img/' + weather.code + '.png"></li>';
			html += '<li class="currently">'+ weather.currently +'</li>';   //status-cloudy, sunny, rain. . .//
			html += '<a href="'+weather.link+'">View Forecast &raquo;</a>';
			$('body').addClass('back' + weather.code);
			html += '<p>'+'</p>';
			
			// Write collection to page with html() method
			// Note: difference between html() method vs. html option 
			$("#weather").html(html);
			
		
			
		},

		// Method 
		error: function(error) {
			$("#weather").html('<p>'+error+'</p>');
		}

	});
	// end getting Weather
	
});  
  
});	
