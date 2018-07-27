function Ball() {
	var size = 60;
	var location = createVector(width/2,height/2);
	var velocity = createVector(0,0);
	var acceleration = createVector(0,0);

	this.update = function() {
		velocity.add(acceleration);
		location.add(velocity);
		acceleration.mult(0);
	}

	this.applyForce = function(force) {
		acceleration.add(force);
	}

	this.display = function() {
		ellipse(location.x, location.y, size, size);
	}

	this.edge = function() {
		if(location.x>width) {
			velocity.x = velocity.x*-1;
			location.x = width;
		}
		else if(location.x < 0) {
			velocity.x = velocity.x*-1;
			location.x = 0;
		}
		if(location.y>height) {
			velocity.y = velocity.y*-1;
			location.y = height;
		}
		else if(location.y < 0) {
			velocity.y = velocity.y*-1;
			location.y = 0;
		}
	}
}