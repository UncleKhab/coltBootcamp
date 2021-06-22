const scores = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50,
    f: 60,
    g: 70
}
let total = 0;
let testScores = Object.values(scores);
for(let score of testScores)
{
    total += score;
}
let median = total / (testScores.length);
console.log(median);