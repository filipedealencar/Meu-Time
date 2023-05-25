import { styled } from "styled-components";

export const ContainerPlayers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

export const ImagePlayers = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

export const NamePlayers = styled.span`
  white-space: nowrap;
  display: flex;
  color: #d3d3d3;
`;
