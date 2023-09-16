//data
console.log("------data----");

function avgSum(total, currentValue) {
    return total + currentValue
}

let dolphinScore = [96, 108, 89]

let koalasScore = [88, 91, 110]

let AvgDolphinScore = dolphinScore.reduce(avgSum, 0) / 3;

let AvgKoalasScore = koalasScore.reduce(avgSum, 0) / 3;
// let AvgDolphinScore = (dolphinScore[0] + dolphinScore[1] + dolphinScore[2]) / 3
// let AvgKoalasScore = (koalasScore[0] + koalasScore[1] + koalasScore[2]) / 3
// console.log(`AvgDolphinScore = ${AvgDolphinScore}`);
// console.log(`AvgKoalasScore = ${AvgKoalasScore}`);

if (AvgDolphinScore > AvgKoalasScore) {
    console.log("Dolphin is a winner");
} else if (AvgDolphinScore == AvgKoalasScore) {
    console.log("Draw")
} else {
    console.log("Koalas is a winner");
}

//data1
console.log("------data bonus 1----");
let minimumScore = 100
let dolphinScore2 = [97, 112, 101]

let koalasScore2 = [109, 95, 123]

let AvgDolphinScore2 = dolphinScore2.reduce(avgSum, 0) / 3;

let AvgKoalasScore2 = koalasScore2.reduce(avgSum, 0) / 3;

if ((AvgDolphinScore2 > 100) && (AvgDolphinScore2 > AvgKoalasScore2)) {
    console.log("Dolphin is a winner");
} else if ((AvgKoalasScore2 > 100) && (AvgKoalasScore2 > AvgKoalasScore2)) {
    console.log("Koalas is a winner");
} else {
    console.log("No one win")
}
//data2
console.log("------data bonus 2----");
let dolphinScore3 = [97, 112, 101]

let koalasScore3 = [109, 95, 106]

let AvgDolphinScore3 = dolphinScore3.reduce(avgSum, 0) / 3;

let AvgKoalasScore3 = koalasScore3.reduce(avgSum, 0) / 3;

let minimumScore2 = 100
if (AvgDolphinScore3 >= 100 && AvgKoalasScore3 >= 100 && AvgDolphinScore3 === AvgKoalasScore3) {
    console.log("Both players are draw");
} else if ((AvgDolphinScore3 >= 100) && (AvgDolphinScore3 >= AvgKoalasScore2)) {
    console.log("Dolphin is a winner");
} else if ((AvgKoalasScore3 >= 100) && (AvgKoalasScore3 >= AvgKoalasScore2)) {
    console.log("Koalas is a winner");
} else {
    console.log("No one win")
}