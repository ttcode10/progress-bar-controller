import React from 'react';
import styled from 'styled-components';
import { colors } from '../themes';

export const BarChart: React.FC<IBarChart> = ({ bars }) => (
	<VerticalContainer>
		{bars.map(({ name, value }) => (
			<ProgressBar key={name}>
				<BarValue>{value}%</BarValue>
				<BarFill $value={value} />
			</ProgressBar>
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

const ProgressBar = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: ${colors.white};
	border-radius: 2px;
	margin: 0.5rem 0;
	width: 350px;
	height: 2rem;
	border: 1px solid ${colors.borderGray};
	position: relative;
`;

const BarFill = styled.div<{ $value: number }>`
	width: ${(props) => (props.$value >= 100 ? 100 : props.$value < 0 ? 0 : props.$value)}%;
	background-color: ${(props) => (props.$value >= 100 ? colors.tomatoRed : colors.oceanBlue)};
	height: 2rem;
	transition: width 0.5s ease-out;
	z-index: 1;
	position: absolute;
`;

const BarValue = styled.span`
	position: absolute;
	z-index: 2;
	text-align: center;
	color: ${colors.black};
	width: 100%;
`;
