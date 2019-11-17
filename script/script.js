// ver 1.0.0 all in JS

// const ul = document.createElement("ul");
// let count = 1;
//
// for (let i = 1; i <= 10; i++) {
//     const li = document.createElement("li");
//     li.innerText = `element ${count}`;
//     count++;
//     li.style.display = 'none';
//     ul.appendChild(li);
// }
//
// document.body.appendChild(ul);

// ver Samuraj 2.0.0

const btn = document.querySelector('button');
// return Array
const liColection = [...document.querySelectorAll('li')];
// return NodeList
// const liColectionnn = document.querySelectorAll('li');

let fontSize = 10;


btn.addEventListener('click', () => {
// forEach loop
    liColection.forEach(el => { // el = li
        el.style.display = 'block';
        el.style.fontSize = `${fontSize}px`;
    });
    fontSize++;

    //  for loop
    // for (let i = 0; i < liColection.length; i++) {
    //     liColection[i].style.display = 'block';
    //     liColection[i].style.fontSize = `${fontSize}px`;
    // }
    // fontSize++;
});




