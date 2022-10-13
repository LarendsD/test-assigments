import * as _ from 'lodash';

export default (devices, option, value) => {
  const filteredDevices = devices.filter((device) => device[option] === value);
  return _.round((filteredDevices.length / devices.length) * 100, 2);
};
