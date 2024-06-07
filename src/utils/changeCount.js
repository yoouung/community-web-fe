function ChangeCount(num) {
  if (num >= 1000 && num < 10000) {
    return "1k";
  } else if (num >= 10000 && num < 100000) {
    return "10k";
  } else if (num >= 100000) {
    return "100k";
  } else {
    return num;
  }
}

export default ChangeCount;
