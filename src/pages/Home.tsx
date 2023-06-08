import React, { useState } from 'react';
import styled from 'styled-components';
import { Heading, Button, Dropdown, BarChart } from '../components';

export const Home = () => {
	const initialProgresses = [
		{ name: 'Bar #1', value: 0 },
		{ name: 'Bar #2', value: 0 },
		{ name: 'Bar #3', value: 0 },
	];
	const barNames = initialProgresses.map((progress) => progress.name);
	const [dropdownSelectedValue, setDropdownSelectedValue] = useState(barNames[0]);
	const [progresses, setProgresses] = useState(initialProgresses);

	const handleButtonClick = (value: number) => {
		setProgresses(
			progresses.map((progress) =>
				progress.name === dropdownSelectedValue
					? { ...progress, value: progress.value + value }
					: progress
			)
		);
	};

	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		e.preventDefault();
		setDropdownSelectedValue(e.target.value);
	};

	return (
		<PageContainer>
			<Heading>Progress Bars Demo</Heading>
			<BarChart bars={progresses} />
			<HorizontalWrapper>
				<Dropdown values={barNames} selected={dropdownSelectedValue} handleSelect={handleSelect} />
				<Button onClick={() => handleButtonClick(-25)}>-25</Button>
				<Button onClick={() => handleButtonClick(-10)}>-10</Button>
				<Button onClick={() => handleButtonClick(+10)}>+10</Button>
				<Button onClick={() => handleButtonClick(+25)}>+25</Button>
			</HorizontalWrapper>
		</PageContainer>
	);
};

const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

const HorizontalWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;
