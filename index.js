// Code your solutions in this file
const writeCards = (people, event) => {
    let cards = []; 

    people.forEach(peopleName => {
        cards.push(`Thank you, ${peopleName}, for the wonderful ${event} gift!`);
    });

    return cards;
};

const countDown = (number) => {
    while (number >=0) {
        console.log(number);
        --number;
        
    }
}

countDown(10);