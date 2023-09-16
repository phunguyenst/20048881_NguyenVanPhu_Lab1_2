function calcTip(bill){
    return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill
}
let bills = [125, 555, 44]

let tips = bills.map(calcTip)

let totals = bills.map((bill, index)=> bill + tips[index])

console.log("Bills", bills);
console.log("tips", tips)
console.log("Total: ", totals)