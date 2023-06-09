import React from 'react';
import userEvent from '@testing-library/user-event';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { Home } from '../Home';

describe('Home', () => {
	describe('UI rendering', () => {
		it('should render heading', () => {
			render(<Home />);
			const headingElement = screen.getByText(/Progress Bars Demo/i);
			expect(headingElement).toBeInTheDocument();
		});

		it('should render bar chart with 3 bars', () => {
			render(<Home />);
			const chartLegendElement = screen.getAllByText(/%/i);
			expect(chartLegendElement.length).toBe(3);
		});

		it('should render a dropdown with 3 options', () => {
			render(<Home />);
			const dropdownElement = screen.getByRole('combobox');
			const dropdownOptions = screen.getAllByRole('option');
			expect(dropdownElement).toBeInTheDocument();
			expect(dropdownOptions.length).toBe(3);
		});

		it('should render 4 number adjustment button', () => {
			render(<Home />);
			const buttonElements = screen.getAllByRole('button');
			expect(buttonElements.length).toBe(4);
		});
	});

	describe('User interaction', () => {
		it('should allow user to switch item in dropdown menu', () => {
			render(<Home />);
			act(() => {
				userEvent.selectOptions(
					screen.getByRole('combobox'),
					screen.getByRole('option', { name: 'Bar #2' })
				);
			});
			const secondOption = screen.getByText('Bar #2') as HTMLOptionElement;
			expect(secondOption.selected).toBeTruthy();
		});

		it('should allow user to adjust number for default dropdown option', () => {
			render(<Home />);
			const previousBarLabel = screen.getByText('25%');
			expect(previousBarLabel).toBeInTheDocument();

			act(() => {
				userEvent.click(screen.getByRole('button', { name: '-10' }));
			});
			const updatedBarLabel = screen.getByText('15%');
			expect(updatedBarLabel).toBeInTheDocument();
		});

		it('should allow user to switch item in dropdown menu and adjust number once', () => {
			render(<Home />);
			const previousBarLabel = screen.getByText('50%');
			expect(previousBarLabel).toBeInTheDocument();

			act(() => {
				userEvent.selectOptions(
					screen.getByRole('combobox'),
					screen.getByRole('option', { name: 'Bar #2' })
				);
				userEvent.click(screen.getByRole('button', { name: '-10' }));
			});
			const updatedBarLabel = screen.getByText('40%');
			expect(updatedBarLabel).toBeInTheDocument();
		});

		it('should allow user to switch item in dropdown menu and adjust number for multiple times', () => {
			render(<Home />);
			const previousBarLabel = screen.getByText('75%');
			expect(previousBarLabel).toBeInTheDocument();

			act(() => {
				userEvent.selectOptions(
					screen.getByRole('combobox'),
					screen.getByRole('option', { name: 'Bar #3' })
				);
				userEvent.click(screen.getByRole('button', { name: '-25' }));
				userEvent.click(screen.getByRole('button', { name: '-10' }));
				userEvent.click(screen.getByRole('button', { name: '+10' }));
				userEvent.click(screen.getByRole('button', { name: '+25' }));
			});
			const updatedBarLabel = screen.getByText('100%');
			expect(updatedBarLabel).toBeInTheDocument();
		});
	});

	describe('Edge cases for bar chart', () => {
		beforeEach(cleanup);
		it('should not below 0 for bar label', () => {
			render(<Home />);
			const previousBarLabel = screen.getByText('25%');
			expect(previousBarLabel).toBeInTheDocument();

			act(() => {
				userEvent.click(screen.getByRole('button', { name: '-25' }));
				userEvent.click(screen.getByRole('button', { name: '-25' }));
			});
			const updatedBarLabel = screen.getByText('0%');
			expect(updatedBarLabel).toBeInTheDocument();
		});

		it('should allow above 100 for bar label', async () => {
			render(<Home />);
			const previousBarLabel = screen.getByText('25%');
			expect(previousBarLabel).toBeInTheDocument();

			const addButton = await screen.getByRole('button', { name: '+25' });
			for (let i = 0; i < 4; i++) {
				fireEvent.click(addButton);
			}
			const updatedBarLabel = screen.getByText('125%');
			expect(updatedBarLabel).toBeInTheDocument();
		});
	});
});
