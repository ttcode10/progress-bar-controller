export const calculateProgressValue = (initValue: number, pace: number) => {
	const result = initValue + pace;
	return result <= 0 ? 0 : result;
};
