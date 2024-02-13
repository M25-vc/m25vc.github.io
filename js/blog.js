$(function () {
	var $content = $('#m25WhyWeInvested');
	var data = {
		rss_url: 'https://medium.com/feed/m25-vc'
	};
	$.get('https://api.rss2json.com/v1/api.json', data, function (response) {
			var output = '';
			var blogCounter = 0;
		if (response.status == 'ok') {
			$.each(response.items, function (k, item) {
				// console.log(response.items);
				// var visibleSm;
				// if(k < 3){
				// 	visibleSm = '';
				// } else {
				// 	visibleSm = ' visible-sm';
				// }
				if(item.title.match("Why We Invested")){
					blogCounter++
					output += '<div class="card card-1" style="width: 20rem;">';
					var tagIndex = item.description.indexOf('<img'); 
					var srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex; 
					var srcStart = srcIndex + 5; 
					var srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart; 
					var src = item.description.substring(srcStart, srcEnd);
					output += '<a class = "" href="'+ item.link + '"><img class="card-img-top" src="' + src + '" alt="Card image cap"><div class="card-block pt-2 px-1">';
					output += '<h5 class="card-title">' +item.title + '</a></h5>';
					output += '</div></div>';
					return blogCounter <3;
			}
			});
			$content.html(output);
		}
	});
});


$(function () {
	var $content = $('#m25Blog');
	var data = {
		rss_url: 'https://medium.com/feed/m25-vc'
	};
	$.get('https://api.rss2json.com/v1/api.json', data, function (response) {
			var output = '';
			var blogCounter = 0;

		if (response.status == 'ok') {
			$.each(response.items, function (k, item) {
				// var visibleSm;
				// if(k < 6){
				// 	visibleSm = '';
				// } else {
				// 	visibleSm = ' visible-sm';
				// }
				// console.log(item.title);
				if(!item.title.match("Why We Invested")){
					blogCounter++
					console.log(blogCounter);
					output += '<div class="card card-1" style="width: 20rem;">';
					var tagIndex = item.description.indexOf('<img'); 
					var srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex; 
					var srcStart = srcIndex + 5; 
					var srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart; 
					var src = item.description.substring(srcStart, srcEnd);
					output += '<a class = "" href="'+ item.link + '"><img class="card-img-top" src="' + src + '" alt="Card image cap"><div class="card-block pt-2 px-1">';
					output += '<h5 class="card-title">' +item.title + '</a></h5>';
					output += '</div></div>';
					return blogCounter <3;
					// return k < 3;
				}
			});
			$content.html(output);
		}
	});
});




$(function () {
	var $content = $('#midwestStartupsBlog');
	var data = {
		rss_url: 'https://medium.com/feed/Midwest-Startups'
	};
	$.get('https://api.rss2json.com/v1/api.json', data, function (response) {
			var output = '';
		if (response.status == 'ok') {
			$.each(response.items, function (k, item) {
				var visibleSm;
				if(k < 2){
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
				return k < 2;
			});
			$content.html(output);
		}
	});
});