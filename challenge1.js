 //data 1
 let markMass = 78
 let markHeight = 1.69
 let markBMI = markMass / (markHeight * markHeight)
 console.log("mark BMI = ", markBMI)
 let joinMass = 92
 let joinHeight = 1.95
 let joinBMI = joinMass / (joinHeight * joinHeight)
 console.log("join BMI = ", joinBMI)
 let markHigherBMI = markBMI > joinBMI
 console.log("markBMI có lớn hơn joinBMI không: ", markHigherBMI)

 //data 2
 let markMass2 = 95
 let markHeight2 = 1.88
 let markBMI2 = markMass2 / (markHeight2 * markHeight2)
 console.log("mark BMI data 2 = ", markBMI2)
 let joinMass2 = 85
 let joinHeight2 = 1.76
 let joinBMI2 = joinMass2 / (joinHeight2 * joinHeight2)
 console.log("join BMI data 2 = ", joinBMI2)
 let markHigherBMI2 = markBMI2 > joinBMI2
 console.log("markBMI có lớn hơn joinBMI không: ", markHigherBMI2)

 // const Mark = {
 //     mass: 78,
 //     height: 1.69,
 //     CalBMI: function() {
 //         return this.mass / (this.height * this.height)
 //     }
 // }
 // console.log(Mark);