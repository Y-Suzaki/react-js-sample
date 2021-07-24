import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Router } from './router/Router';

export const App = () => {
  return (
    <BrowserRouter>
      <StyledContainer>
        <Link to="/">Home</Link>
        <br />
        <Link to="/appCss">AppCss</Link>
        <br />
        <Link to="/userQuery/1001">UserPath ID:1001</Link>
        <br />
        <Link to="/userQuery/2001?department=account">
          UserQuery ID:2001?department=account
        </Link>
        <br />
        <Link to="/user">User</Link>
      </StyledContainer>
      <Router />
    </BrowserRouter>
  );
};

const StyledContainer = styled.div`
  padding: 8px;
  margin: 8px;
  align-items: center;
`;
