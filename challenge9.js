function printForecast(arr){
    let forecasted = "";
    for (let index = 0; index < arr.length; index++) {
        forecasted +=`${arr} will print "... ${arr[index]} in ${index} days ...`
        
    }
    console.log(forecasted)
}

data1 = [17, 21, 23]

data2 = [12, 5, -5, 0, 4]

printForecast(data1)
printForecast(data2)

