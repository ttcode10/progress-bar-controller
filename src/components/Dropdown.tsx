import React from 'react';
import styled from 'styled-components';

export const Dropdown: React.FC<IDropdown> = ({ name, values }) => (
	<Select name={name ?? values[0]} id="dropdown">
		{values.map((value) => (
			<option value={value} key={value}>
				{value}
			</option>
		))}
	</Select>
);

interface IDropdown {
	name?: string;
	values: string[];
}

const Select = styled.select`
	font-family: 'Roboto Mono', sans-serif;
	font-size: 1rem;
	color: #000000;
	cursor: pointer;
	margin: 0 0.5rem;
	padding: 0 0.5rem;
	background-color: #efefef;
	border-radius: 2px;
`;
