export default function reverseNumber(num) {
  const reversed = Number(String(num).split("").reverse().join(""));
  return reversed;
}
