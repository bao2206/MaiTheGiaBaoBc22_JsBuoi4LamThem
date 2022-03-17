// Bài 1

//Xử lý và đầu ra
function ngayTiepTheo(day, month, year) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (day == 31) {
        day = 1;
        if (month == 12) {
          month = 1;
          year++;
        } else {
          month++;
        }
      } else {
        if (day < 31) day++;
      }
      console.log("Ngày " + day + " tháng " + month + " năm " + year);
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      if (day == 30) {
        day = 1;
        month++;
      } else if (day < 30) {
        day++;
      }
      console.log("Ngày " + day + " tháng " + month + " năm " + year);
      break;

    case 2:
      if (year % 400 == 0 || (year % 4 == 0 && 100 != 0)) {
        if (day == 29) {
          day = 1;
          month++;
        } else if (day < 29) {
          day++;
        }
      } else {
        if (day == 28) {
          day = 1;
          month++;
        } else if (day < 28) {
          day++;
        }
      }
      console.log("Ngày " + day + " tháng " + month + " năm " + year);
      break;
  }
}

//Xử lý
var day = 28;
var month = 2;
var year = 2019;
ngayTiepTheo(day, month, year);

// Bài 3
var n = 255;
var unit, ten, hundred;

var chuoiHangTram="";
var chuoiHangChuc="";
var chuoiHangDonVi="";
hundred = Math.floor(n / 100);

ten = Math.floor((n % 100) / 10);

unit = n % 10;

switch (hundred) {
  case 1:
   chuoiHangTram="Một trăm ";
    break;
  case 2:
   chuoiHangTram="Hai trăm ";
    break;
  case 3:
   chuoiHangTram="Ba trăm ";
    break;
  case 4:
   chuoiHangTram="Bốn trăm ";
    break;
  case 5:
   chuoiHangTram="Năm trăm ";
    break;
  case 6:
   chuoiHangTram="Sáu trăm ";
    break;
  case 7:
   chuoiHangTram="Bảy trăm ";
    break;
  case 8:
   chuoiHangTram="Tám trăm ";
    break;
  case 9:
   chuoiHangTram="Chín trăm ";
    break;
}

if (ten != 0) {
  switch (ten) {
    case 1:
      if (ten % 10 == 0 && unit != 0) {
       chuoiHangChuc="lẻ ";
      } else {
       chuoiHangChuc="Mười ";
      }
      break;
    case 2:
     chuoiHangChuc="Hai mươi ";
      break;
    case 3:
     chuoiHangChuc="Ba mươi ";
      break;
    case 4:
     chuoiHangChuc="Bốn mươi ";
      break;
    case 5:
     chuoiHangChuc="Năm mươi ";
      break;
    case 6:
     chuoiHangChuc="Sáu mươi ";
      break;
    case 7:
     chuoiHangChuc="Bảy mươi ";
      break;
    case 8:
     chuoiHangChuc="Tám mươi ";
      break;
    case 9:
     chuoiHangChuc="Chín mươi ";
      break;
  }

  switch (unit) {
    case 1:
      if (ten >= 2 && unit == 1) {
        chuoiHangDonVi="mốt ";
      } else {
        chuoiHangDonVi="Một ";
      }
      break;
    case 2:
      chuoiHangDonVi="Hai ";
      break;
    case 3:
      chuoiHangDonVi="Ba ";
      break;
    case 4:
      chuoiHangDonVi="Bốn ";
      break;
    case 5:
      if (ten >= 1 && unit == 5) {
        chuoiHangDonVi="lăm ";
      } else {
        chuoiHangDonVi="Năm ";
      }
      break;
    case 6:
      chuoiHangDonVi="Sáu ";
      break;
    case 7:
      chuoiHangDonVi="Bảy ";
      break;
    case 8:
      chuoiHangDonVi="Tám ";
      break;
    case 9:
      chuoiHangDonVi="Chín ";
      break;
  }
}
if(unit != 0)
{
    console.log(chuoiHangTram + chuoiHangChuc +chuoiHangDonVi);
} else{
    console.log(chuoiHangTram);
}
