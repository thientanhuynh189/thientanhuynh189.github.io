function findLMV() {
  // Lấy giá trị với id 't1'
  var str = document.getElementById('t1').value
  // Dùng vòng lặp cho việc đếm số lượng nguyên âm trong chuỗi
  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) == 'a' || str.charAt(i) == 'e'
    || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u')
    return ("Left most vowel of '" + str + "' is at location " + (i + 1));
  }
  // Nếu không có, trả về chuỗi
  return ("No vowels found for string " + str);
}

function reverse(num) {
  rnum = 0;
  temp = num;
  // Nếu giá trị không phải số
  if (isNaN(num)) {
    return "invalid number";
  }
  // Thực hiện việc đảo chuỗi bằng thuật toán cho tới khi giá trị bằng 0
  while (num != 0) {
    rnum *= 10;
    rnum += num % 10;
    num -= num % 10;
    num = Math.floor(num / 10);
  }
  return "Reverse of num " + temp + " is " + rnum;
}
