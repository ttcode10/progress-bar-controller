import React from 'react';
import styled from 'styled-components';

export const BarChart: React.FC<IBarChart> = ({ bars }) => (
	<VerticalContainer>
		{bars.map(({ name, value }) => (
			<Bar key={name}>{value}%</Bar>
		))}
	</VerticalContainer>
);

interface IBarChart {
	bars: Bar[];
}

type Bar = {
	name: string;
	value: number;
};

const VerticalContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 200px;
	margin: 1rem 0;
`;

const Bar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 'Roboto Mono', sans-serif;
	font-size: 1rem;
	color: #000000;
	background-color: #87cefa;
	border-radius: 2px;
	margin: 0.5rem 0;
	width: 350px;
	height: 2rem;
	line-height: 1rem;
	border: 1px solid #bfc0c2;
`;
