var a=10, w = window, d = document, f = d.documentElement, g = d.getElementsByTagName('body')[0];
function mouseMove(e){
	if(e.pageX == null && e.clientX != null) {
		e.pageX = e.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f.clientLeft || 0);
		e.pageY = e.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f.clientTop || 0);
	}
	parallax(e.pageX,e.pageY)
}

function deviceMove(e){
	var b=e.beta, c=e.gamma, x = w.innerWidth || f.clientWidth || g.clientWidth, y = w.innerHeight|| f.clientHeight|| g.clientHeight;
	if (x>y){ parallax(x/2+b*a,y/2+c*a); } else { parallax(x/2+c*a,y/2+b*a); }
}

function parallax(x, y){
	d.getElementById('parallax').style.perspectiveOrigin = x+"px "+y+"px";
	d.getElementById('parallax').style.webkitPerspectiveOrigin = x+"px "+y+"px";
	d.getElementById('parallax').style.mozPerspectiveOrigin = x+"px "+y+"px";
}


if (w.DeviceOrientationEvent && typeof w.orientation !== 'undefined') {
	w.addEventListener('deviceorientation', deviceMove, false);
} else if (d.addEventListener) {
	w.addEventListener('mousemove', mouseMove, false );
}


