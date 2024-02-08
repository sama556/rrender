import { fireEvent, render ,screen} from "@testing-library/react";
import Check from "./check";
import React from 'react';
describe('Checkbox component', () => {
  it('renders "Checkbox is not checked" initially', () => {
    const { getByText } = render(<Check/>);
    const messageElement = getByText('Checkbox is not checked');
    expect(messageElement).toBeInTheDocument();
  });

  it('renders "Checkbox is checked" after checking the checkbox', () => {

    const { getByText, getByRole } = render(<Check/>);
    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);
    const messageElement = getByText('Checkbox is checked');
    expect(messageElement).toBeInTheDocument();
  });

  it('renders "Checkbox is not checked" after unchecking the checkbox', () => {
    const { getByText, getByRole } = render(<Check/>);
    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);
    fireEvent.click(checkbox);
    const messageElement = getByText('Checkbox is not checked');
    expect(messageElement).toBeInTheDocument();
  });
});
