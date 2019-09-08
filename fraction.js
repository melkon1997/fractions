function Fraction (num, denom){
	if(denom == 0)
		throw("0 division");
	this.num = num;
	this.denom = denom;
}

Fraction.prototype = {
	add: function(frac){
		var numPart, denomPart;
		denomPart = this.denom * frac.denom;
		numPart =  (denomPart/this.denom*this.num ) + (denomPart/frac.denom*frac.num);
		return new Fraction(numPart, denomPart);
	},
	
	sub: function(frac){
		var numPart, denomPart;
		denomPart = this.denom * frac.denom;
		numPart = (denomPart/this.denom*this.num) - (denomPart/frac.denom*frac.num); 
		return new Fraction(numPart, denomPart);
		
	},
	
	prod: function(frac){
	    return new Fraction(this.num * frac.num, this.denom * frac.denom );
	},
	
	div: function(frac){
		return new Fraction(this.num * frac.denom, this.denom * frac.num); 
	},
    
	print: function(){ 
		var numPart, denomPart;
		if(this.num === 0) 
			console.log(0);
		else if (this.num === this.denom)
			console.log(1);
	    else {
			numPart = this._reduct(this.num);
			denomPart = this._reduct(this.denom);
			console.log(numPart + "/" + denomPart);
		}
	},

	_reduct: function(reductNum) {

		var gcd = function(num, denom) { 
			if (denom === 0) return num;
			return gcd(denom, num % denom);
		}
		return reductNum/gcd(this.num, this.denom);
	}
}


var number1 = new Fraction(2, 5);
var number2 = new Fraction(3, 4);

var sum = number1.add(number2);
sum.print();
var sub = number1.sub(number2);
sub.print();
var prod = number1.prod(number2);
prod.print();
var div = number1.div(number2);
div.print();