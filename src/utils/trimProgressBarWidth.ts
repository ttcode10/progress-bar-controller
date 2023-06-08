export const trimProgressBarWidth = (value: number) => {
	return value >= 100 ? 100 : value < 0 ? 0 : value;
};
