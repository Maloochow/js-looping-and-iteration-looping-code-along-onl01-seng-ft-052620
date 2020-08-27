function writeCards(array, event) {
    const cards = []
    for (let i = 0; i < array.length; i++ ) {
        cards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }

    return cards
}

function countDown(num) {
    let i = num
    while (i >= 0) {
        console.log(i)
        i = i-1
    }
}