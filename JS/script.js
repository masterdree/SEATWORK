const equation = [
    { id: 1, value: '1+1', pairId: 2 },
    { id: 2, value: '2', pairId: 1 },
    { id: 3, value: 'Area of a rectangle', pairId: 4 },
    { id: 4, value: 'w * h', pairId: 3 },
    { id: 5, value: 'hypotenuse', pairId: 6 },
    { id: 6, value: 'a^2+b^2=c^2', pairId: 5 },
    { id: 7, value: 'Commutative Property', pairId: 8 },
    { id: 8, value: 'A U B = B U A', pairId: 7 },
    { id: 9, value: 'Integral of x dx from 0 to 1', pairId: 10 },
    { id: 10, value: '0.5', pairId: 9 },
    { id: 11, value: 'Derivative of x^2', pairId: 12 },
    { id: 12, value: '2x', pairId: 11 },
    { id: 13, value: 'Limit of (1/n) as n approaches infinity', pairId: 14 },
    { id: 14, value: '0', pairId: 13 },
    { id: 15, value: 'Sum of geometric series a/(1-r)', pairId: 16 },
    { id: 16, value: 'Depends on a and r', pairId: 15 }
];


const shuffledEquations = equation.sort(() => Math.random() - 0.5);

let selectedItems = [];
let canOpen = true;

shuffledEquations.forEach(equation => {
    const item = document.createElement('div');
    item.className = 'item';
    item.dataset.id = equation.id;
    item.dataset.pairId = equation.pairId;

    item.onclick = function() {
        if (!canOpen) return;
        if (selectedItems.length < 2 && !this.classList.contains('boxOpen')) {
            this.classList.add('boxOpen');
            this.textContent = equation.value;
            selectedItems.push(this);
        }

        if (selectedItems.length === 2) {
            canOpen = false;
            if (selectedItems[0].dataset.pairId === selectedItems[1].dataset.id) {
                
                selectedItems = [];
                canOpen = true;
            } else {
                
                setTimeout(() => {
                    selectedItems[0].classList.remove('boxOpen');
                    selectedItems[1].classList.remove('boxOpen');
                    selectedItems[0].textContent = '';
                    selectedItems[1].textContent = '';
                    selectedItems = [];
                    canOpen = true;
                }, 1000);
            }
        }
    }

    document.querySelector('.game').appendChild(item);
});


const stars = document.getElementById('stars');

for (let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.random() * 200}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    stars.appendChild(star);
}