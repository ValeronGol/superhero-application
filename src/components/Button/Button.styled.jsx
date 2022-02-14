import styled from '@emotion/styled';

export const Btn = styled.button`
  margin: 10px;
  background-color: #0a0131ab;
  color: white;
  border-radius: 7px;
  border-color: #201068ab;
  cursor: pointer;
  transition-delay: 250ms;
  transition-timing-function: cubic-bezier(0.29, 1.01, 1, -0.68);
  &:hover {
    background-color: #5b5bbee6;
    color: #0a0131ab;
    border-color: #0a0131ab;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
