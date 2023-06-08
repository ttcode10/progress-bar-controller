import { colors } from '../themes';

export const trimProgressBarWidth = (value: number) => {
	return value >= 100 ? 100 : value < 0 ? 0 : value;
};

export const getComputedBarColor = (value: number) => {
	return value >= 100 ? colors.tomatoRed : colors.oceanBlue;
};
