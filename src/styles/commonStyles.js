import styled from "styled-components";

export const ContentBase = styled.div`
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Negro = styled.div`
  font-size: 20px;
  color: #333;
`;
