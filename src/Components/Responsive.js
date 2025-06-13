import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 660;

const deviceWidth = width;
const deviceHeight = height;

const responsiveHeight = (h) => (deviceHeight * h) / 100;
const responsiveWidth = (w) => (deviceWidth * w) / 100;

const scale = (size) => (deviceWidth / guidelineBaseWidth) * size;
const verticalscale = (size) => (deviceHeight / guidelineBaseHeight) * size;
const moderatescale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

// Usage example
const exampleWidth = responsiveWidth(50); // 50% of the screen width
const exampleHeight = responsiveHeight(20); // 20% of the screen height
const exampleScale = scale(14); // Scale size 14 based on device width
const exampleVerticalScale = verticalscale(14); // Scale size 14 based on device height
const exampleModerateScale = moderatescale(14); // Moderate scale size 14 with default factor 0.5

export { responsiveWidth, responsiveHeight, scale, moderatescale, verticalscale };