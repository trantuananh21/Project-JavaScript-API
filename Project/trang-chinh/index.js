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

		img = document.createElement('img')
		title = document.createElement('h3')
		date = document.createElement('p')
		content = document.createElement('p')

		img.src = imgLink
		title.innerHTML = name
		date.innerHTML = day
		content.innerHTML = description

		if (count >= 1 & count <= 40){	
			document.getElementById('images1').appendChild(img)
			document.getElementById('title1').appendChild(title)
			document.getElementById('date1').appendChild(date)
			document.getElementById('description1').appendChild(content)

		}
		if (count >= 41 & count <= 80){
			document.getElementById('images2').appendChild(img)
			document.getElementById('title2').appendChild(title)
			document.getElementById('date2').appendChild(date)
			document.getElementById('description2').appendChild(content)
		}

		if (count >= 81 & count <= 100){
			document.getElementById('images3').appendChild(img)
			document.getElementById('title3').appendChild(title)
			document.getElementById('date3').appendChild(date)
			document.getElementById('description3').appendChild(content)
		}


	});
}
netflix();