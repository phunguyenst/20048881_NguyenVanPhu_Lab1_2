
let tienBill = 275

let tienTip = tienBill >=50 && tienBill<=300 ? 0.15 : 0.2

function TinhTienTip(tip, orderValue){
    return tip * orderValue
}

let tienTiepHoaDon = TinhTienTip(tienTip, tienBill);

console.log(`The bill was ${tienBill}, the tip was ${tienTiepHoaDon}, and the total value ${tienTiepHoaDon + tienBill}`);

let tienBill1 = 40

let tienTip1 = tienBill1 >=50 && tienBill1<=300 ? 0.15 : 0.2

function TinhTienTip(tip, orderValue){
    return tip * orderValue
}

let tienTiepHoaDon1 = TinhTienTip(tienTip1, tienBill1);

console.log(`The bill was ${tienBill1}, the tip was ${tienTiepHoaDon1}, and the total value ${tienTiepHoaDon1 + tienBill1}`);

let tienBill2 = 430

let tienTip2 = tienBill2 >=50 && tienBill2<=300 ? 0.15 : 0.2

function TinhTienTip(tip, orderValue){
    return tip * orderValue
}

let tienTiepHoaDon2 = TinhTienTip(tienTip2, tienBill2);

console.log(`The bill was ${tienBill2}, the tip was ${tienTiepHoaDon2}, and the total value ${tienTiepHoaDon2 + tienBill2}`);

