function createGrid() {
	const grid = document.querySelector('.main__gridcontainer'),
	gridBackground = document.querySelector('.main__gridcontainer-background');
	createGridLayout();
	function createGridLayout() {
		const gridWidth = parseInt(window.getComputedStyle(grid).width),
				gridHeight = parseInt(window.getComputedStyle(grid).height),
				colItems = Math.floor(gridWidth / 40),
				rowItems = Math.floor(gridHeight / 40) + 2;
		for (let i = 0; i < (colItems * rowItems); i++) {
			if (Math.random() > 0.90) {
				grid.innerHTML += '<div class="main__gridcontainer__item main__gridcontainer__item-active"></div>';
			} else {
				grid.innerHTML += '<div class="main__gridcontainer__item"></div>';
			}
		}
		// console.log(window.getComputedStyle(gridBackground).height);
		grid.style.cssText = `
			grid-template-columns: repeat(${colItems + 1}, 40px);
			grid-template-rows: repeat(${rowItems}, 40px);
			grid-auto-flow: row;
		`

		const gridItems = document.querySelectorAll('.main__gridcontainer__item');
		let cntr = 0, opacId = 1, flag = false;
		gridItems.forEach((item, i) => {
			++cntr;
			if (cntr % colItems === 0) {
				flag = true;
				opacId -= `${1 / rowItems}`;
				item.style.opacity = opacId;
			} else if (flag) {
				item.style.opacity = opacId;
			}
		})
	}
}
export {createGrid};