function redirect(){
	document.getElementById("p2").innerHTML="alonekokokef è"
	document.getElementById("p2").style.display="block"
	document.getElementById("p1").style.display="none"
	
}

function redirect2(){
	document.getElementById("p1").innerHTML="kakaka mận vải"
	document.getElementById("p1").style.display="block"
	document.getElementById("p2").style.display="none"
}

const netflix = async () => {
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

		if (count >= 1 & count <= 10) {
			document.getElementById('row-poster1').appendChild(img)
		}
		if (count >= 11 & count <= 20) {
			document.getElementById('row-poster2').appendChild(img)
		}

		
		if (count >= 21 & count <= 30) {
			document.getElementById('row-poster3').appendChild(img)
		}
		

	})
	$('.slick').slick({
		slidesToShow: 5,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 2000,
	  });
}

netflix();

var curDate = new Date();

var curDay = curDate.getDate();

var curMonth = curDate.getMonth() + 1;

var curYear = curDate.getFullYear();

document.getElementById('clock').innerHTML = curDay + "/" + curMonth + "/" + curYear;

// var curTime = new Date();
var x = curDate.getHours();
var y = curDate.getMinutes();
var z= curDate.getSeconds();
var time = x +":" + y+ ":" +z;
if (z>0&z<60&y>0&y<60&x>=1&x<=12){
	document.getElementById('time').innerHTML= time + 'AM'
}
if (z>0&z<60&y>0&y<60&x>12&x<=24){
	document.getElementById('time').innerHTML= time + 'PM'
}
