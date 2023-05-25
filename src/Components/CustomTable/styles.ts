import { styled } from "styled-components";

export const WrapperCustomTable = styled.section`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100%;
  height: 100%;
`;

export const ContainerTable = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Table = styled.table<{ $maxHeight?: number }>`
  width: 100%;
  height: 100%;
  position: relative;
  max-height: ${({ $maxHeight }) => ($maxHeight ? $maxHeight : 310)}px;
`;

export const Thead = styled.thead`
  background: #020526;
  border: none;
  height: 48px;
`;
export const Tbody = styled.tbody`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #020526;
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
`;

export const Tr = styled.tr`
  width: 100%;
  padding: 16px 8px;
  display: flex;
`;

export const Td = styled.td`
  text-align: center;
  vertical-align: middle;
`;
