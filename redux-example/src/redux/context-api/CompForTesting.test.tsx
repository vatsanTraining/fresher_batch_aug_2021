import { fireEvent, render, screen } from "@testing-library/react";

import CompForTesting from './CompForTesting';

it('should take a snapshot', () => {
    const { asFragment } = render(<CompForTesting />)
   expect(asFragment).toMatchSnapshot()
   });

   it('increments counter', () => {
    const { getByTestId } = render(<CompForTesting/>); 
    
    fireEvent.click(getByTestId('button-up'))

    expect(getByTestId('counter')).toHaveTextContent('1')
  });
