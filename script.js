window.onload = function() {

  
	const welcome = document.querySelector('.hello');
	const time = new Date().getHours();

 	if (time < 12) {
  		welcome.innerHTML = 'Good Morning,';
  	}

  	else if (time >= 12 && time < 18) {
  		welcome.innerHTML = 'Good Afternoon,';
  	}

  	else {
  		welcome.innerHTML = 'Good Evening,';
  	}
};