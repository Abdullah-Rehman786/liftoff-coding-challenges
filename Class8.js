function charCount(myChar, str) {
	let charCounter = 0;
	for(let char of str){
		if(myChar === char){
			charCounter++;
		}
	}
	return charCounter;
}
