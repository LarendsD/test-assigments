import buttonColor from '../options/button.color';
import generatePercent from './generate-percent';

export default () => {
  const chanceInPercent = generatePercent();
  return buttonColor(chanceInPercent);
};
