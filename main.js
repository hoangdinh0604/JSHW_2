//Bài tập 1
//input cho người dùng nhập vào các giá trị điểm chuẩn, điểm thi từng môn, khu vực ưu tiên và đối tượng ưu tiên
var btnTinhDiem = document.getElementById("btnTinhDiem");
var diemThi1 = 0;
var diemThi2 = 0;
var diemThi3 = 0;
var diemChuan = 0;
var kvUT;
var dtUT;
//xử lý nếu tổng điểm thấp hơn điểm chuẩn thì rớt, nếu tổng điểm bằng hoặc cao hơn điểm chuẩn thì đậu
btnTinhDiem.onclick = function () {
  diemChuan = document.getElementById("diemChuan").value * 1;
  diemThi1 = document.getElementById("diemThi1").value * 1;
  diemThi2 = document.getElementById("diemThi2").value * 1;
  diemThi3 = document.getElementById("diemThi3").value * 1;
  kvUT = document.getElementById("kvUT").value * 1;
  dtUT = document.getElementById("dtUT").value * 1;
  var tongDiemThi = diemThi1 + diemThi2 + diemThi3 + kvUT + dtUT;
  if (tongDiemThi >= diemChuan) {
    //Xuất ra màn hình đậu
    document.getElementById("hw1-footer").innerText =
      "<p>Xin chúc mừng, bạn đã Đậu</p>" +
      "<p>Tổng Điểm thi: </p>" +
      tongDiemThi;
  } else {
    //Xuất ra màn hình rớt
    document.getElementById("hw1-footer").innerHTML =
      "<p>Bạn đã Rớt</p>" + "<p>Tổng điểm: </p>" + tongDiemThi;
  }
};
//Bài tập 2:
var btnTinhTienDien = document.getElementById("btnTinhTienDien");
var kw_1 = 0;
var kw_2 = 0;
var kw_3 = 0;
var kw_4 = 0;
var kw_5 = 0;
var kw_n = 0;
var ten = "";
var tongTienDien = 0;
const TIEN1 = 500;
const TIEN2 = 650;
const TIEN3 = 850;
const TIEN4 = 1100;
const TIEN5 = 1300;

btnTinhTienDien.onclick = function () {
  kw_n = document.getElementById("kw_n").value * 1;
  ten = document.getElementById("ten").value;
  var currentFormat = new Intl.NumberFormat("vn-VN");
  if (kw_n < 0) {
    alert("Vui lòng nhập vào số tiền đúng!");
  }
  if (kw_n <= 50) {
    tongTienDien = kw_n * TIEN1;
  } else if (kw_n > 50 && kw_n <= 100) {
    tongTienDien = 50 * TIEN1 + (kw_n - 50) * TIEN2;
  } else if (kw_n > 100 && kw_n <= 200) {
    tongTienDien = 50 * TIEN1 + 50 * TIEN2 + (kw_n - 100) * TIEN3;
  } else if (kw_n > 200 && kw_n <= 350) {
    tongTienDien = 50 * TIEN1 + 50 * TIEN2 + 100 * TIEN3 + (kw_n - 200) * TIEN4;
  } else {
    tongTienDien =
      50 * TIEN1 +
      50 * TIEN2 +
      100 * TIEN3 +
      150 * TIEN4 +
      (kw_n - 350) * TIEN5;
  }
  //Xuất thông tin ra màn hình
  document.getElementById("hw2_footer").innerHTML =
    "<p>Tên khách hàng: </p>" +
    ten +
    "<p>Tổng tiền: </p>" +
    currentFormat.format(tongTienDien) +
    " VND";
};
//Bài tập 3:
//input người dùng nhập vào tên và tổng thu nhập năm và số người phụ thuộc
var btnTinhTienThue = document.getElementById("btnTinhTienThue");
var tax = 0;
var currentFormat = new Intl.NumberFormat("vn-VN");
btnTinhTienThue.onclick = function () {
  var hoTen = document.getElementById("hoTen").value;
  var thuNhap = document.getElementById("tongThuNhap").value * 1;
  var soPhuThuoc = document.getElementById("soPhuThuoc").value * 1;
 if (thuNhap<0){
  alert("Vui lòng nhập số tiền đúng!!")
 }
 var tienPhuThuoc= 4e+6 +soPhuThuoc*1.6e+6;
  if (thuNhap <= 60e+6) {
    tax = thuNhap * 0.5 - tienPhuThuoc;
  } else if (60e+6 < thuNhap && thuNhap <= 120e+6) {
    tax = 60e+6 * 0.5 + (thuNhap - 60e+6) * 0.1 - tienPhuThuoc;
  } else if (120e+6 < thuNhap && thuNhap <= 210e+6) {
    tax = 60 * 0.5 + 60e+6 * 0.1 + (thuNhap - 120e+6) * 0.15 - tienPhuThuoc;
  } else if (210e+6 < thuNhap && thuNhap <= 384e+6) {
    tax = 60e+6 * 0.5 + 60e+6 * 0.1 + 90e+6 * 0.15 - (thuNhap - 210) * 0.2- tienPhuThuoc;
  } else if (384e+6 < thuNhap && thuNhap <= 624e+6) {
    tax =
      60e+6 * 0.5 +
      60e+6 * 0.1 +
      90e+6 * 0.15 -
      174e+6 * 0.2 +
      (thuNhap - 384e+6) * 0.25 - tienPhuThuoc;
  } else if (624e+6 < thuNhap && thuNhap <= 960e+6) {
    tax =
      60e+6 * 0.5 +
      60e+6 * 0.1 +
      90e+6 * 0.15 -
      174e+6 * 0.2 +
      240e+6 * 0.25 +
      (thuNhap - 620e+6) * 0.35 - tienPhuThuoc;
  } else if (thuNhap > 960e+6) {
    tax =
      60e+6 * 0.5 +
      60e+6 * 0.1 +
      90e+6 * 0.15 -
      174e+6 * 0.2 +
      240e+6 * 0.25 +
      336e+6 * 0.35(thuNhap - 960e+6) * 0.35 - tienPhuThuoc;
  }
  //Xuất thông tin ra màn hình
  document.getElementById("hw3_footer").innerHTML =
    "<p>Tên khách hàng: </p>" +
    hoTen +
    "<p>Tổng tiền phải đóng thuế là: </p>" +
    currentFormat.format(tax) +
    " VND";
};
//Bài tập 5
//input khách hàng nhập vào loại khách hàng, mã khách hàng và số kênh cao cấp
document.getElementById("loaiKH").onchange=function(){
  var loaiKH=document.getElementById("loaiKH").value
  if(loaiKH==="Doanh nghiệp"){
    document.getElementById("soKetNoi").style.display="block";
  }
  if(loaiKH==="Nhà dân"){
    document.getElementById("soKetNoi").style.display="none";
  }
}

var currentFormat = new Intl.NumberFormat("vn-VN");
var btnTinhTienCap=document.getElementById("btnTinhTienCap").onclick=function(){
var loaiKH = "";
var maKH = "";
var soCaoCap=0;
var soKetNoi=0;
var tienCap=0;
loaiKH=document.getElementById("loaiKH").value;
soCaoCap=document.getElementById("soCaoCap").value*1;
if(loaiKH==="Nhà dân"){
tienCap=4.5+20.5 + 7.5*soCaoCap;
}if(loaiKH==="Doanh nghiệp"){
  soKetNoi=document.getElementById("soKetNoi").value*1;
  if (soKetNoi<=10){
  tienCap=4.5+20.5 + 7.5*soCaoCap + 75;
  } else if (soKetNoi>10){
    tienCap= 4.5+20.5 + 7.5*soCaoCap + 75 + (soKetNoi-10)*5;
  }
  }
  //Xuất thông tin ra màn hình
  document.getElementById("hw4_footer").innerHTML ="<p>Mã khách hàng: </p>" +
    maKH +
    "<p>Tổng tiền cáp là: </p>" +
    currentFormat.format(tienCap) +
    " VND";
}