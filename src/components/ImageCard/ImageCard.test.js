import React from 'react';
import ReactDOM from 'react-dom';
import ImageCard from './ImageCard';

describe('ImageCard Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< ImageCard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})