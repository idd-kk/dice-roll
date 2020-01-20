
document.querySelector('#rollBtn').addEventListener(`click`, (event) => {
    
    let int = Math.floor(Math.random() * 6 + 1);
    document.getElementById(`num`).innerHTML = `You rolled: ${int}`;
    document.getElementById(`pic`).setAttribute(`src`, `img/dice${int}.svg`);
} )
