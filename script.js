// ------- DOM References -------

const gridContainer = document.querySelector('.grid-container');
const clearBtn = document.querySelector('#btn-clear');
const gridSizeSlider = document.querySelector('#grid-size-slider');
const gridSizeValue = document.querySelector('#grid-size');

// ------- States -------

const rows = 16;
const cols = 16;
let gridSize = parseInt(gridSizeSlider.value);

// ------- Logic Functions -------
function generateGrid(gridSize) {
    gridContainer.innerHTML = "";
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

generateGrid(gridSize);
gridSizeValue.textContent = gridSizeSlider.value

// ------- Event Listeners -------
gridContainer.addEventListener('mouseover', (e) => {
	const target = e.target;

	if (target.classList.contains('grid')) {
		target.classList.add('fill');
	}
});

clearBtn.addEventListener('click', () => {
	const grids = gridContainer.querySelectorAll('.grid');
	grids.forEach((grid) => {
		if (grid.classList.contains('fill')) {
			grid.classList.remove('fill');
		}
	});
});

gridSizeSlider.addEventListener('input', (e) => {
    gridSizeValue.textContent = e.target.value;
    gridSize = parseInt(e.target.value);
    generateGrid(gridSize);
});
