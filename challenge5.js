//tạo hàm tính giá trị trung bình
// const calcAverage = function(score1, score2, score3 ){
    
//   return   (score1 + score2 + score3)/3
// }
const calcAverage = (score1, score2, score3 )=> (score1 + score2 + score3)/3


//tính giá trị trung bình cho 2 đội
const avgDolphin1 = calcAverage(44,23,71)
const avgKoalas1 = calcAverage(65, 54, 49)
const avgDolphin2 = calcAverage(85,54,41)
const avgKoalas2 = calcAverage(23, 34, 27)
//tạo hàm kiểm tra người chiến thắng
const checkWinner = (avgDolhins, avgKoalas)=>{
    if(avgDolhins >= 2 * avgKoalas){
        console.log(`Dolphin win (${avgDolhins} vs. ${avgKoalas})`);
    }
    else if(avgKoalas >= 2 * avgDolhins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
    }
    else{
        console.log("no team win!");
    }
}
//sử dụng hàm cho data 1 và 2 

console.log("data1");
checkWinner(avgDolphin1, avgKoalas1)

console.log("data2")
checkWinner(avgDolphin2, avgKoalas2)