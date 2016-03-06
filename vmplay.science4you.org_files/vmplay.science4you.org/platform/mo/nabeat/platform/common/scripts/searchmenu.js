SearchMenu = function () {

	var data = new Array();

	var dataBuilder = function () {

		var id = 1;

		var curPtnameId = getUrlParameter(window.location.search.substring(1), 'ptnameid');
		var isActive = false;

		$('ul.taxalist > li.taxalist').each(function(i) {

			var $this = $(this);

			var name = $this.find('a > p:first').text();
			var description = $this.find('.sciencename').text();
			var url = $this.find('a').attr('href');

			if (!isActive) {

				var ptnameId = getUrlParameter(url, 'ptnameid');

				if (ptnameId == curPtnameId) {

					isActive = true;
					$this.addClass('active');
				}				
			}

			data.push({
				id: id,
				text: name + description,
				name: name,
				description: description,
				url: url
			});

			id++;

		});
	}

	var getUrlParameter = function getUrlParameter(url, sParam) {

		// var sPageURL = decodeURIComponent(window.location.search.substring(1))

	    var sPageURL = decodeURIComponent(url),
	        sURLVariables = sPageURL.split('&'),
	        sParameterName,
	        i;

	    for (i = 0; i < sURLVariables.length; i++) {
	        sParameterName = sURLVariables[i].split('=');

	        if (sParameterName[0].toLowerCase() === sParam.toLowerCase()) {
	            return sParameterName[1] === undefined ? true : sParameterName[1];
	        }
	    }
	}

	return {

		init: function(options) {
			
			dataBuilder();

			$('#taxalistsearch').select2({
				language: options.language,
				placeholder: options.placeholder,
				dropdownAutoWidth: true,
  				data: data,
  				templateSelection: function (data) {

  					if (data.id == "") {
  						return options.placeholder;
  					}

  					return data.name;
  				},
				templateResult: function (data) {

				    if (data.id === "") {
				      return options.placeholder;
				    }

				    return '<table><tr><td>' + 
				    			'<h5 class="taxa-name">' + data.name + '</h5>' +
				    			'<h5 class="taxa-description">' + data.description + '</h5>' +
				    		'</td></tr></table>';
				},							  				
				escapeMarkup: function(m) {
					return m;
				}  				  				
			}).on('change', function (e) {

				var baseUrl = window.location.origin;
				// var baseUrl = 'http://vmplay.science4you.org/';
				var navigateUrl = $(this).select2('data')[0].url;
				
				if (typeof navigateUrl != 'undefined') {
					window.location.href = baseUrl + navigateUrl;
				}
				
        	});
		}
	}
}();