function detectWord(str) {
	const regex = /[A-Z]/g;
  return str.replace(regex, '');
}
