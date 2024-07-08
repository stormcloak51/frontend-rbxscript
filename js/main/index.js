'use strict';

const grid = document.querySelector('.main__gridcontainer'),
			gridWidth = parseInt(window.getComputedStyle(grid).width),
			gridHeight = parseInt(window.getComputedStyle(grid).height),
			colItems = Math.floor(gridWidth / 40),
			rowItems = Math.floor(gridHeight / 40);

function createGrid() {
	
	for (let i = 0; i < (colItems * rowItems); i++) {
		if (Math.random() > 0.90) {
			grid.innerHTML += '<div class="main__gridcontainer__item main__gridcontainer__item-active"></div>';
		} else {
			grid.innerHTML += '<div class="main__gridcontainer__item"></div>';
		}
	}

	grid.style.cssText = `
		grid-template-columns: repeat(${colItems}, 40px);
		grid-template-rows: repeat(${rowItems}, 40px);
		grid-auto-flow: row;
		width: ${colItems * 40}px;
		height: ${rowItems * 40}px;
	`

	const gridItems = document.querySelectorAll('.main__gridcontainer__item');
	let cntr = 0, opacId = 1, flag = false;
	gridItems.forEach((item, i) => {
		++cntr;
		if (cntr % 28 === 0) {
			flag = true;
			opacId -= `${1 / rowItems}`;
			item.style.opacity = opacId;
		} else if (flag) {
			item.style.opacity = opacId;
		}
	})

}
