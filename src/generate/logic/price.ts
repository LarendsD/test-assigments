import generatePercent from './generate-percent';
import price from '../options/price';

export default () => {
  const chanceInPercent = generatePercent();
  return price(chanceInPercent);
};
