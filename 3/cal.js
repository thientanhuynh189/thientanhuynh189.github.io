function f(d) {
  // Nhận giá trị d từ value
  // Nếu 'c' trả giá trị rỗng
  if (d == 'c') {
    document.getElementById('res').value = "";
    return;
  }
  res = document.getElementById('res').value;
  // Nếu bắt đầu từ giá trị 0, trả về rỗng
  if (res == 0 && d == 0)
  return;
  // Nhận giá trị tính toán
  if (d == '+' || d == '-' || d == '*' || d == '/') {
    opr = d;
    num = parseFloat(res);
    document.getElementById('res').value = d;
    return;
  }
  // Khai báo switch case với việc ghi nhận giá trị tính toán
  if (d == '=') {
    num1 = parseFloat(res);
    switch (opr) {
      case '+': ans = num + num1; break;
      case '-': ans = num - num1; break;
      case '*': ans = num * num1; break;
      case '/': ans = parseInt(num / num1); break;
    }
    // Trả về kết quả sau khi tính toán
    document.getElementById('res').value = ans;
    return;
  }
  // Nếu bắt đầu từ dấu '-'
  if (d == '--') {
    document.getElementById('res').value *= -1;
    return;
  }
  // Ghi nhận thêm nhiều giá trị tính toán
  if (!isNaN(document.getElementById('res').value))
    document.getElementById('res').value += d;
  else
    document.getElementById('res').value = d;
}
