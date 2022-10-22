const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b6e5c43dcamsh0acfaea2676ac9fp11af8djsn7de1bffb9d03',
		'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
	}
};

fetch('https://unogs-unogs-v1.p.rapidapi.com/search/titles?order_by=date&type=movie', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));