// ------- DOM References -------
const gridContainer = document.querySelector('.grid-container');
const clearBtn = document.querySelector('#btn-clear');
const rainbowBtn = document.querySelector('#btn-rainbow');
const colorBtn = document.querySelector('#btn-color');
const gridSizeSlider = document.querySelector('#grid-size-slider');
const gridSizeValue = document.querySelector('#grid-size');
const colorPicker = document.querySelector('#color-picker');

// ------- States -------
let gridSize = parseInt(gridSizeSlider.value);

// ------- Logic Functions -------
function generateGrid(gridSize) {
	gridContainer.innerHTML = '';

	for (let i = 0; i < gridSize; i++) {
		const row = document.createElement('div');
		row.className = 'row';

		for (let j = 0; j < gridSize; j++) {
			const grid = document.createElement('div');
			grid.className = 'grid';
			row.appendChild(grid);
		}
		gridContainer.appendChild(row);
	}
}

function randomizeRGB() {
	const rgb = [0, 0, 0];
	return rgb.map(() => getRandomColor());
}

function getRandomColor() {
	return Math.floor(Math.random() * 255);
}

function colorFill(target, color = null, rgb = null) {
	if (target.classList.contains('grid')) {
		if (rgb !== null) {
			target.style.backgroundColor = `rgb(${rgb.join(', ')})`;
		} else {
			target.style.backgroundColor = `${color}`;
		}
	}
}

// ------- Event Listeners -------
gridContainer.addEventListener('mouseover', (e) => {
	const target = e.target;

	colorFill(target, colorPicker.value);
});

clearBtn.addEventListener('click', () => {
	const grids = gridContainer.querySelectorAll('.grid');
	grids.forEach((grid) => {
		grid.style.backgroundColor = '';
	});
});

colorBtn.addEventListener('click', () => {
	gridContainer.addEventListener('mouseover', (e) => {
		const target = e.target;
		const color = colorPicker.value;

		colorFill(target, color);
	});
});

rainbowBtn.addEventListener('click', () => {
	gridContainer.addEventListener('mouseover', (e) => {
		const target = e.target;
		const rgb = randomizeRGB();

		colorFill(target, null, rgb);
	});
});

gridSizeSlider.addEventListener('input', (e) => {
	gridSizeValue.textContent = e.target.value;
	gridSize = parseInt(e.target.value);
	generateGrid(gridSize);
});

generateGrid(gridSize);
gridSizeValue.textContent = gridSizeSlider.value;
