import { render, screen } from '@testing-library/react';
import Waiting from './Waiting';
import '@testing-library/jest-dom';

describe('Waiting component', () => {
  it('should render waiting if i am loading', async () => {
    render(
      <Waiting loading={true}>
        <p>Result</p>
      </Waiting>,
    );
    const loader = screen.getByRole('status');
    const otherText = screen.queryByText('Result');
    expect(loader).toBeInTheDocument();
    expect(otherText).not.toBeInTheDocument();
  });

  it('should render component if loading is over', async () => {
    render(
      <Waiting loading={false}>
        <p>Result</p>
      </Waiting>,
    );
    const homepage = await screen.findByText(/result/i);
    const waiting = await screen.queryByRole('status');

    expect(waiting).not.toBeInTheDocument();
    expect(homepage).toBeInTheDocument();
  });
});
