export default (percent) => {
  if (percent <= 33.3) {
    return '#FF0000';
  }
  if (percent >= 66.6) {
    return '#00FF00';
  }
  if (percent >= 33.3 && percent <= 66.6) {
    return '#0000FF';
  }
  throw 'Something went wrong!';
};
