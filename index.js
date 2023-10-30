const dictionary = {
    "А": "A",
    "а": "a",
    "Б": "B",
    "б": "b",
    "В": "V",
    "в": "v",
    "Г": "G",
    "г": "g",
    "Д": "D",
    "д": "d",
    "Е": "E",
    "е": "e",
    "Ё": "Yo",
    "ё": "yo",
    "Ж": "Dz",
    "ж": "dz",
    "З": "Z",
    "з": "z",
    "И": "I",
    "и": "i",
    "Й": "Ji",
    "й": "ji",
    "К": "K",
    "к": "k",
    "Л": "L",
    "л": "l",
    "О": "O",
    "о": "o",
    "М": "M",
    "м": "m",
    "Н": "N",
    "н": "n",
    "П": "P",
    "п": "p",
    "Р": "R",
    "р": "r",
    "С": "S",
    "с": "s",
    "Т": "T",
    "т": "t",
    "У": "U",
    "у": "u",
    "Ф": "F",
    "ф": "f",
    "Х": "H",
    "х": "h",
    "Ц": "Ts",
    "ц": "ts",
    "Ч": "Ch",
    "ч": "ch",
    "Ш": "Sh",
    "ш": "sh",
    "Щ": "Sc",
    "щ": "sc",
    "ъ": "x",
    "ь": "x",
    "ы": "shi",
    "Э": "A",
    "э": "a",
    "Ю": "U",
    "ю": "U",
    "Я": "I",
    "я": "i",
    "Ы": "Shi",
    " ": " ",
    "_": "_",
    "-": "-",
    ".": ".",
    ",": ",",
    "!": "!",
    "?": "?",

};


const stroka = document.querySelector('.stroka')
const table = document.querySelector('.table')
const input = document.querySelector('.textTr');
const button = document.querySelector('.btn'); 
const row = document.querySelector(`.row`);

// const shortRu = document.querySelector('.russian');
const shortEng = document.querySelector ('.translit');
const fullRu = document.querySelector('.fullRu');
const fullEng = document.querySelector('.fullEng')
// shortRu.addEventListener('mouseenter', () => {
//     full.style.display = 'block';
// })
// shortRu.addEventListener('mouseleave', () => {
//     full.style.display = 'none';
// })

row.addEventListener('mouseenter', () => {
    fullRu.style.display = 'block';
    fullEng.style.display = 'block';
})
row.addEventListener('mouseleave', () => {
    fullRu.style.display = 'none';
    fullEng.style.display = 'none';
})

// let left = document.querySelector('left')
// let right = document.querySelector('right')

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addNewWord();
    }
})

button.addEventListener('click', addNewWord)



function addNewWord() {
    const indexes = document.querySelectorAll('.index')
    const newDivRu = document.createElement('div');
    const newIndex = document.createElement('span');
    const newRowRu = document.createElement('div');
    const newRowEng = document.createElement('div');
    const newDivEng = document.createElement('div');
    const newDelete = document.createElement('img');
    newDelete.src = 'Group 7.png'
    newDivRu.className = 'russian';
    newDivEng.className = 'translit';
    if (input.value.length > 7) {
        const p = ('.')
        const newValue = input.value.slice(0,7)
        newDivRu.innerText = `${newValue}${p.repeat(3)}`;
        newDivEng.innerText = `${newValue.split('').map(el => dictionary[el]).join('')}${p.repeat(3)}`;
        const newFullRu = document.createElement('div');
        const newFullEng = document.createElement('div');
        newFullRu.className = 'fullRu';
        newFullEng.className = 'fullEng';
        newFullEng.innerText = input.value.split('').map(el => dictionary[el]).join('');
        newFullRu.innerText = input.value;
        newDivRu.appendChild(newFullRu);
        newDivEng.appendChild(newFullEng);
        newRowRu.addEventListener('mouseenter', () => {
            newFullRu.style.display = 'block';
            newFullEng.style.display = 'block';
        })
        newRowEng.addEventListener('mouseleave', () => {
            newFullRu.style.display = 'none';
            newFullEng.style.display = 'none';
        })
        newRowRu.addEventListener('mouseleave', () => {
            newFullRu.style.display = 'none';
            newFullEng.style.display = 'none';
        })
        newRowEng.addEventListener('mouseleave', () => {
            newFullRu.style.display = 'none';
            newFullEng.style.display = 'none';
        })
    } else {
        newDivRu.innerText = input.value;
        newDivEng.innerText = input.value.split('').map(el => dictionary[el]).join('');
    }
    newIndex.className = 'index';
    newRowRu.className = 'rowRu';
    newIndex.innerText = indexes.length + 1;
    newDivEng.appendChild(newDelete);
    newDivRu.prepend(newIndex);
    table.append(newRow);
    newRowRu.append(newDivRu);
    newRowRu.append(newDivEng);
    input.value = '';
    newDelete.addEventListener('click', () => {
        newDelete.parentElement.parentElement.remove()
        const allNewInd = document.querySelectorAll('span')
        allNewInd.forEach((element, index) => {
            element.innerText = index + 1;
        })
    })

    const deleteButton = document.querySelector('.deleteButtonOne')
    deleteButton.addEventListener('click', () => {
        newRow.remove()
    })

}

// const allRow = document.querySelectorAll('.row')
// const deleteButton = document.querySelector('.deleteButtonOne')
// deleteButton.addEventListener('click', () => {
//     for (let i = 1; i <= allRow.length; i++){
//         allRow[i].parentElement.remove()
//     }
// })



  
const replace = (str) => str.split('').map(el => dictionary[el]).join('')
