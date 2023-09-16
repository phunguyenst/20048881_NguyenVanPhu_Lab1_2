function calcTip(bill){
    return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill
}
let bills = [22, 295, 176, 440, 37, 105,10, 1100, 86, 52]
let tips = [];
let totals = [];

for (let index = 0; index < bills.length; index++) {
    const tip = calcTip(bills[index]);
    tips.push(tip)
    totals.push(tip + bills[index])
    
}

function calcAverage(arr){
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
        
    }
    return sum / arr.length;
}

const averageTotal = calcAverage(totals)

console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);
console.log("Average Total:", averageTotal);


