const button = document.getElementById('btn');
const personsWrapper = document.querySelector('.persons');
const defaultUserPhoto = 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png';

button.addEventListener('click', () => {
    button.disabled = true; // блокируем кнопку, чтобы избежать повторных запросов

    const persons = [
        { name: 'Монки Д. Луффи', age: '19', photo: 'https://tl.rulate.ru/i/book/22/11/25114.jpg' },
        { name: 'Ророноа Зоро', age: '21', photo: 'https://pm1.aminoapps.com/6836/517e3da0508e7fbc64bbc1e7db0304f59a5d2a4ev2_hq.jpg' },
        { name: 'Шанкс', age: '27', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuCGjEAef0QZns9RVHXiDBdIMv6Lls8p4zXg&usqp=CAU' },
        { name: 'Донкихот Дофламинго', age: '31', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdInB_YyvN1WvYsyVHrQRLWDl9tvRdL2OzLA&usqp=CAU' },
        { name: 'Эдвард Ньюгейт', age: '52', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUOHheRdcXsa_9ZqmlOaaXO6q-qrQkY5bpXA&usqp=CAU' }
    ];

    setTimeout(() => { // имитация задержки загрузки данных
        persons.forEach(person => {
            const personCard = document.createElement('div');
            personCard.setAttribute('class', 'personCard');

            personCard.innerHTML = `
                <div class="personImage">
                    <img src="${person.photo || defaultUserPhoto}" alt="${person.name}">
                </div>
                <p>${person.name}</p>
                <p>Age: ${person.age}</p>
            `;

            personsWrapper.append(personCard);
        });
    }, 1000);
});

let xhr = new XMLHttpRequest();
xhr.open('GET', 'data/peoples.json', true);
xhr.onload = function() {
    if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        console.log(data);
    }
};
xhr.send();