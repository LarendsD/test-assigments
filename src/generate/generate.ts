import buttonColor from './logic/button.color';
import priceGen from './logic/price';

export default () => {
  const button_color = buttonColor();
  const price = priceGen();
  return {
    button_color,
    price,
  };
};
