export default (percent) => {
  if (percent <= 75) {
    return 10;
  }
  if (percent >= 75 && percent <= 85) {
    return 20;
  }
  if (percent >= 85 && percent <= 95) {
    return 5;
  }
  if (percent >= 95) {
    return 50;
  }
  throw 'Something went wrong!';
};
