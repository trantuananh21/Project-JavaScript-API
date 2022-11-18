function redirect(){
	document.getElementById("p2").innerHTML="Cậu Bé Mất Tích (Phần 4) kề về bóng tối trở lại Hawkins vào đúng kỳ nghỉ xuân, khơi mào nỗi kinh hoàng mới, những ký ức đáng ngại và mối đe dọa đáng sợ mới."
	document.getElementById("p2").style.display="block"
	document.getElementById("p1").style.display="none"
	
	
}

function redirect2(){
	document.getElementById("p1").innerHTML="kakaka mận vải"
	document.getElementById("p1").style.display="block"
	document.getElementById("p2").style.display="none"
	
}
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

		if (count >= 1 & count <= 20){
			document.getElementById("row-poster1").appendChild(content)
			
		}
		if (count >= 21 & count <= 40){
			document.getElementById("row-poster2").appendChild(content)
		}

		if (count >= 41 & count <= 60){
			document.getElementById("row-poster3").appendChild(content)
		}
	

	});
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
