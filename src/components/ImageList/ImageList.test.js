import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './ImageList';

describe('ImageList Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< ImageList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
