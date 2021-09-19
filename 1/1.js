function sc() {
  // Nhập vùng với ký tự trống '-'
  rng = prompt('Enter the range');
  res = rng.split("-");

  // Nếu nhập không chứa ký tự trống '-'
  if (res.length != 2) {
    alert("invalid range ");
    return;
  }
  // Gán giá trị cho số thứ nhất và số thứ hai
  first = parseInt(res[0]);
  second = parseInt(res[1]);
  // Khi vùng dữ liệu bắt đầu từ giá trị lớn sang giá trị nhỏ
  if (first > second) {
    alert("invalid range ");
    return;
  }
  // Kẻ bảng gồm 3 cột "Number", "Square", "Cube"
  str = "<table border=2><tr><th>Number</th><th>Square</th><th>Cube</th></tr>";
  // Chạy giá trị với số thứ nhất và số thứ hai; in giá trị ra hàng tiếp theo
  for (i = first; i <= second; i++) {
    str = str + "<tr><td>" + i + "<td>" + (i * i) + "<td>" + (i * i * i);
  }
  document.write(str);
}
