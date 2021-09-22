const COLORS  = [
    '#ff2d55',
    '#5856d6',
    '#ff9500',
    '#ffcc00',
    '#ff3b30',
    '#5ac8fa',
    '#007aff',
    '#4cd964'
];

const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

module.exports = {
  getRandomColor
};
