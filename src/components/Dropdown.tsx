import React from 'react';
import styled from 'styled-components';

export const Dropdown: React.FC<IDropdown> = ({ values, selected, handleSelect }) => (
	<Select defaultValue={selected} onChange={handleSelect}>
		{values.map((value) => (
			<option value={value} key={value}>
				{value}
			</option>
		))}
	</Select>
);

interface IDropdown {
	values: string[];
	selected?: string;
	handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
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
