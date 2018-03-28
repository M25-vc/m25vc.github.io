$(function () {
	var $content = $('#m25Blog');
	var data = {
		rss_url: 'https://medium.com/feed/m25-vc'
	};
	$.get('https://api.rss2json.com/v1/api.json', data, function (response) {
			var output = '';
			output += '<div class="card card-1" style="width: 20rem;">';
				output += '<a class = "" href="https://blog.midweststartups.com/adding-value-to-startups-club-m25-summit-2-0-3a7acaf10161"><img class="card-img-top" src="https://cdn-images-1.medium.com/max/2000/1*ugGAGunUM0idKMkzccg6aw.jpeg" alt="Card image cap"><div class="card-block pt-2 px-1">';
				output += '<h5 class="card-title">Adding Value to Startups: Club M25 Summit 2.0</a></h5>';
				output += '</div></div>';

		if (response.status == 'ok') {
			$.each(response.items, function (k, item) {
				var visibleSm;
				if(k < 1){
					visibleSm = '';
				} else {
					visibleSm = ' visible-sm';
				}
				output += '<div class="card card-1" style="width: 20rem;">';
				var tagIndex = item.description.indexOf('<img'); 
				var srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex; 
				var srcStart = srcIndex + 5; 
				var srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart; 
				var src = item.description.substring(srcStart, srcEnd);
				output += '<a class = "" href="'+ item.link + '"><img class="card-img-top" src="' + src + '" alt="Card image cap"><div class="card-block pt-2 px-1">';
				output += '<h5 class="card-title">' +item.title + '</a></h5>';
				output += '</div></div>';
				return k < 1;
			});
			$content.html(output);
		}
	});
});