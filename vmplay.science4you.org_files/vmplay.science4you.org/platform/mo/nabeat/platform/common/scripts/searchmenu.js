SearchMenu = function () {

	var data = new Array();

	var dataBuilder = function () {

		var id = 1;

		$('ul.taxalist > li.taxalist').each(function(i) {

			var $this = $(this);

			var text = $this.find('a > p:first').text();
			var description = $this.find('.sciencename').text();
			var url = $this.find('a').attr('href');

			data.push({
				id: id,
				text: text,
				description: description,
				url: url
			});

			id++;

		});
	}

	return {

		init: function() {
			
			dataBuilder();

			$('#dropdowncategory').select2({
  				data: data,
				placeholder: "Select menu",
  				allowClear: true  				
			}).on('change', function (e) {

				var baseUrl = 'http://vmplay.science4you.org/';
				window.location.href = baseUrl + $(this).select2('data')[0].url;
        	});
		}
	}
}();