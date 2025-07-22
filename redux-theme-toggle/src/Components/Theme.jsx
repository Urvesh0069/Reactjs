import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Container } from 'react-bootstrap';
import { toggleTheme } from './Themeslice';

const Theme = () => {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <Container
      fluid
      className={`d-flex flex-column align-items-center justify-content-center min-vh-100 ${
        mode === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'
      }`}
    >
      <h1 className="mb-4">{mode.charAt(0).toUpperCase() + mode.slice(1)} Mode</h1>
      <Button
        variant={mode === 'light' ? 'dark' : 'light'}
        onClick={() => dispatch(toggleTheme())}
      >
        Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode
      </Button>
    </Container>
  );
};

export default Theme;