const netflix = async() => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'b6e5c43dcamsh0acfaea2676ac9fp11af8djsn7de1bffb9d03',
			'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
		}
	};
	
	var response = ''

	response = await fetch('https://unogs-unogs-v1.p.rapidapi.com/search/titles?order_by=date&type=movie', options)

	data = await response.json()

	console.log(data);

	var count = 0;

	film = data.results
	film.forEach(element => {
		console.log(element);
		var imgLink = element.img
		var name = element.title
		var day = element.title_date
		var description = element.synopsis
		count++

		img = document.createElement('img');
		img.className = 'images';
		title = document.createElement('h3');
		date = document.createElement('p');
		synopsis = document.createElement('p');
		content = document.createElement('div');
		content.className = 'content';
		contentDetails = document.createElement('div');
		contentDetails.className = 'content-details fadeIn-bottom'

		img.src = imgLink
		title.innerHTML = name
		date.innerHTML = day
		synopsis.innerHTML = description

		content.appendChild(img)
		content.appendChild(contentDetails)
		contentDetails.appendChild(title)
		contentDetails.appendChild(date)
		contentDetails.appendChild(synopsis)

		if (count >= 1 & count <= 40){
			document.getElementById("row-poster1").appendChild(content)
		}
		if (count >= 41 & count <= 80){
			document.getElementById("row-poster2").appendChild(content)
		}

		if (count >= 81 & count <= 100){
			document.getElementById("row-poster3").appendChild(content)
		}

	});
}
netflix();
o oitiet 