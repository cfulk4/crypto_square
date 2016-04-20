//create our Crypto class
//it takes a string as an argument
//object oriented programming
//class->methods (verbs) & properties (nouns)
var Crypto = function(text){
	//store the string for use elsewhere
	this.text = text.toLowerCase() .replace(/\s+/g, "");    //constructor 

};

Crypto.prototype.normalizePlaintext = function() {
	return this.text = this.text.replace(/[\W]/g, "");
	
};

Crypto.prototype.size = function(){
	var length = this.normalizePlaintext().length;
	return Math.ceil(Math.sqrt(length));

};

Crypto.prototype.plaintextSegments = function(){
var segments = [];
	npt = this.normalizePlaintext()
	size = this.size();
//loop through all of the character in npt
	for (var i = 0; i < npt.length; i += size) {
		//add a string of characters to our array of segments
		segments.push(npt.substr(i,size));

	}

//return array of string that rep out plain text segments
return segments;
};

Crypto.prototype.ciphertext = function(){
	var code = "",
	size = this.size(),
	segs = this.plaintextSegments();
//loop through the columns
	for(var i =0 ; i < size; i += 1){
//loop through the rows 
	for(var j = 0 ; j < segs.length ; j +=1) {
		code += segs[j].charAt(i);
		}
	}
};

	//return a string rep the coded message
	return code;

module.exports = Crypto;

//console.log(text.replace(/[\w ]/g, "*")  //parameters for regular expression within the ()
	//).toLowerCase());