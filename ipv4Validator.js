/*
FCC Daily Challenge 05/09/2025
Problem: Given a string, determine if it is a valid IPv4 Address. A valid IPv4 address consists of four integer numbers separated by dots (.). Each number must satisfy the following conditions:
- It is between 0 and 255 inclusive.
- It does not have leading zeros (e.g. 0 is allowed, 01 is not).
- Only numeric characters are allowed.
*/

function isValidIPv4(ipv4) {
  return /^((0|[1-9][0-9]?|1[0-9]{2}|2[0-5]{2})\.){3}(0|[1-9][0-9]?|1[0-9]{2}|2[0-5]{2})$/.test(ipv4);
}

//tests
console.log(isValidIPv4("0.0.0.0") == true)
console.log(isValidIPv4("192.168.1.1") == true)
console.log(isValidIPv4("255.255.255.255") == true)

console.log(isValidIPv4("255.00.50.111") == false)
console.log(isValidIPv4("256.101.50.115") == false)
console.log(isValidIPv4("192.168.101.") == false)
console.log(isValidIPv4("192168145213") == false)
