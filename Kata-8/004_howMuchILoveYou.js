/*
I love you, a little , a lot, passionately ... not at all
    Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
    
    I love you
    a little
    a lot
    passionately
    madly
    not at all
    When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
    
    Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
*/

/*function howMuchILoveYou(nbPetals) {
    let list = [
        "I love you",
        "a little",
        "a lot",
        "passionately",
        "madly",
        "not at all"
    ];
    return nbPetals % 6 === 0 ? list[5] : list[nbPetals % 6 - 1]
}*/
const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
]
function howMuchILoveYou(n) {
    return phrases[(n - 1) % phrases.length]
}
console.log(howMuchILoveYou(6));

/*
solutions -->
1)
    const phrases = [
        'I love you',
        'a little',
        'a lot',
        'passionately',
        'madly',
        'not at all',
    ]
    
    function howMuchILoveYou(n) {
         return phrases[(n - 1) % phrases.length]
    }
    
    
2)
    const howMuchILoveYou=n=>['not at all','I love you','a little','a lot','passionately','madly'][n%6]

*/
