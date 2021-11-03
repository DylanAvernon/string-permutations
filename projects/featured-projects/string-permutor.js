import { Grid } from '../../components/grid.js';
import { Card } from '../../components/card.js';
import { permute } from '../../components/helpers.js';
import { cardClasses, placeHolderCardClasses } from '../../styles/cardClasses.js';

let stringPermutorStructure = {
    title: 'String Permutor',
    buttons: {
        'New Permutation String': function getPermutationString() {
            let permuteString = stringPermutorProperties.permuteString;
            let permuteArray = stringPermutorProperties.permuteArray;
            let cells = stringPermutorProperties.cells;
            let gridContainer = stringPermutorProperties.project.container.element;

            permuteString = prompt("Please type in a string to permute. That is no more than ten characters long.")
                .slice(0, 10);
            permuteArray = permuteString.split('');

            // Remove Cells
            let cellsLen = cells.length;
            cells.forEach((cell) => {
                gridContainer.removeChild(cell.element);
            });
            for (let i = 0; i < cellsLen; i++) {
                cells.pop();
            } 

            // Add Cells
            permuteArray.forEach((character) => {
                let cell = new Card(cardClasses, character);
                cell.build();
                cell.style();
                gridContainer.appendChild(cell.element);
                cells.push(cell);
            });

            stringPermutorProperties.permutations = permute(permuteString);
        },
        'Permute': function nextPermutation() {
            let permutationCount = stringPermutorProperties.permutationCount;
            let permutations = stringPermutorProperties.permutations;
            let cells = stringPermutorProperties.cells;
            if (permutationCount === permutations.length) {
                permutationCount = 0;
            }
            for (let i = 0; i < cells.length; i++) {
                cells[i].text.innerText = permutations[permutationCount][i];
            }
            stringPermutorProperties.permutationCount++;
        }
    },
    classList: {
        grid: [],
        header3: [],
        navigationBar: {
            navigationBar: ['navigation-bar'],
            buttons: {
                'New Permutation String': ['new-permutation-string-button', 'btn', 'btn-primary'],
                'Permute': ['permute-button', 'btn', 'btn-secondary']
            }
        },
        container: ['container', 'grid-container']
    },
    ids: {
        grid: 'string-permutor-grid',
        header3: 'string-permutor-header3',
        navigationBar: {
            navigationBar: 'string-permutor-navigation-bar',
            buttons: {
                'New Permutation String': 'string-permutor-new-permutation-string-button',
                'Permute': 'string-permutor-permute-button'
            } 
        },
        container: 'string-permutor-container'
    }
};

let stringPermutorProperties = {
    permuteString: '',
    permuteArray: [],
    permutations: [],
    permutationCount: 0,
    cells: [new Card(placeHolderCardClasses, ''), new Card(placeHolderCardClasses, ''), new Card(placeHolderCardClasses, ''), new Card(placeHolderCardClasses, '')],
    project: new Grid(stringPermutorStructure)
};

stringPermutorProperties.project.render();
stringPermutorProperties.project.style();
stringPermutorProperties.project.activate();

stringPermutorProperties.cells.forEach((cell) => {
    cell.build();
    cell.style();
    stringPermutorProperties.project.container.element.appendChild(cell.element);
});

document.getElementById('string-permutors').appendChild(stringPermutorProperties.project.element);
