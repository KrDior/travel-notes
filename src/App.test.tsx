import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
