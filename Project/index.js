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
		count++

		img = document.createElement('img')

		img.src = imgLink

		if (count >= 1 & count <= 40){	
			document.getElementById('row-poster1').appendChild(img)
		}
		if (count >= 41 & count <= 80){
				document.getElementById('row-poster2').appendChild(img)
		}

		if (count >= 81 & count <= 100){
			document.getElementById('row-poster3').appendChild(img)
		}
	});
}
netflix();