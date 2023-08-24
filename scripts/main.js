window.onload = function() {
	// facebook icon
    
	var mouseControl = 0;

	document.onclick = function(e){
		if (mouseControl != -1) {
			mouseControl++;

			var leftEye = document.getElementById("eye1");
			// Using an if statement to check the class
			if (leftEye.classList.contains('eye-left-animation')) {
				// The box that we clicked has a class of bad so let's remove it and add the good class
			   leftEye.classList.remove('eye-left-animation');
			}

			var rightEye = document.getElementById("eye2");
			// Using an if statement to check the class
			if (rightEye.classList.contains('eye-right-animation')) {
				// The box that we clicked has a class of bad so let's remove it and add the good class
			   rightEye.classList.remove('eye-right-animation');
			}

			setTimeout(function () {
				if (mouseControl > 0) {
					mouseControl--;
				}
				
				if (mouseControl == 0) {


					var leftEye = document.getElementById("eye1");
					// Using an if statement to check the class
					if (!leftEye.classList.contains('eye-left-animation')) {
						// The box that we clicked has a class of bad so let's remove it and add the good class
					   leftEye.classList.add('animated');
					   leftEye.classList.add('eye-left-animation');
					}

					var rightEye = document.getElementById("eye2");
					// Using an if statement to check the class
					if (!rightEye.classList.contains('eye-right-animation')) {
						// The box that we clicked has a class of bad so let's remove it and add the good class
					   rightEye.classList.add('animated');
					   rightEye.classList.add('eye-right-animation');
					}

					setTimeout(function () { 
						var leftEye = document.getElementById("eye1");

						// Using an if statement to check the class
						if (leftEye.classList.contains('animated')) {
							// The box that we clicked has a class of bad so let's remove it and add the good class
						   leftEye.classList.remove('animated');
						}

						var rightEye = document.getElementById("eye2");

						// Using an if statement to check the class
						if (rightEye.classList.contains('animated')) {
							// The box that we clicked has a class of bad so let's remove it and add the good class
						   rightEye.classList.remove('animated');
						}
					}, 100);
				}
			}, 1500);
		}
	}

	document.onmousemove = function(e){
		var leftEye = document.getElementById("eye1");

		// Using an if statement to check the class
		if (leftEye.classList.contains('eye-left-animation')) {
			// The box that we clicked has a class of bad so let's remove it and add the good class
		   leftEye.classList.remove('eye-left-animation');
		}

		var rightEye = document.getElementById("eye2");

		// Using an if statement to check the class
		if (rightEye.classList.contains('eye-right-animation')) {
			// The box that we clicked has a class of bad so let's remove it and add the good class
		   rightEye.classList.remove('eye-right-animation');
		}

		var x = e.clientX;
        var y = e.clientY;
        var body = document.body,
    	html = document.documentElement;

		var centerY = (Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight )) / 2.0;

		var centerX = (Math.max( body.scrollWidth, body.offsetWidth, 
                       html.clientWidth, html.scrollWidth, html.offsetWidth )) / 2.0;

        var left = (((x - centerX) / (centerX * 2)) * (18)) + 15;
		var right = (((x - centerX) / (centerX * 2)) * (-18)) + 15;
		var top = (((y - centerY) / (centerY * 2)) * (30)) + 30;

		leftEye.style.left = left + "%";
		rightEye.style.right = right + "%";
		leftEye.style.top = top + "%";
		rightEye.style.top = top + "%";
	};
}
