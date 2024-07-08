function getZero(num) {
	if (num < 10) {
		return `0${num}`
	} else {
		return num;
	}
}

export {getZero};