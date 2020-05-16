function cong() {
	var a = parseInt(document.getElementById("txta").value);
	var b = parseInt(document.getElementById("txtb").value);
	var c = parseInt(document.getElementById("txtc").value);
	var ng ; 
	if(a == 0) {
		if(b == 0) {
			if(c == 0) {
				ng = "Vo so nghiem " ;
			}
			else{
				ng = "Vo nghiem" ;
			}
		}
		else{
			ng = -b/c ;
		}
	}
	else{
		var delta = b*b-4*a*c;
		
		if(delta < 0) {
			ng = "vo nghiem" ; 
		}
		else{
			if(delta === 0 ){
				ng = ((-b)/(2*a)) ;
			}
			else{
				var x1 = ((-b + Math.sqrt(delta)) / (2*a)).toString();
				var x2 = ((-b - Math.sqrt(delta)) / (2*a)).toString();
				ng = x1 + " || " + x2;
			}
		}
	}
	document.getElementById("txtng").value = ng;
}
