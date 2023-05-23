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

export const Table = styled.table`
  width: 100%;
  height: 100%;
  position: relative;
  max-height: 310px;
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
  overflow-y: auto;

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
  padding: 16px;
  display: flex;
`;

export const Td = styled.td`
  width: 100% !important;
  text-align: center;
  vertical-align: middle;
`;