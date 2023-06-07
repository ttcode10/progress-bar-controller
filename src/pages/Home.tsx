import React from 'react';
import styled from 'styled-components';
import { Heading, Button, Dropdown, BarChart } from '../components';

export const Home = () => (
	<PageContainer>
		<Heading>Progress Bars Demo</Heading>
		<BarChart bars={bars} />
		<HorizontalWrapper>
			<Dropdown values={dropdownValues} />
			<Button>-25</Button>
			<Button>-10</Button>
			<Button>+10</Button>
			<Button>+25</Button>
		</HorizontalWrapper>
	</PageContainer>
);

const bars = [
	{ name: 'Bar #1', value: 70 },
	{ name: 'Bar #2', value: 50 },
	{ name: 'Bar #1', value: 75 },
];

const dropdownValues = ['Bar #1', 'Bar #2', 'Bar #3'];

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
