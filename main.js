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
  if (kw_n < 0) {
    alert("Vui lòng nhập vào số tiền đúng!");
  }
  if (kw_n <= 50) {
    tongTienDien = kw_n * TIEN1;
  } else if (kw_n > 50 && kw_n <= 100) {
    tongTienDien = 50 * TIEN1 + (kw_n - 50) * TIEN2;
  } else if (kw_n > 100 && kw_n <= 200) {
    tongTienDien = 50 * TIEN1 + 50 * TIEN2 + (kw_n - 100) * TIEN3;
  } else if (kw_n > 200 && 350) {
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
      "<p>Tên khách hàng: </p>"+ ten + "<p>Tổng tiền: </p>" + tongTienDien +"VND";
};
//Bài tập 3:
