import styled from "styled-components";

interface ICustomButtonStyle {
  $isDisabled: boolean;
}

interface ICustomLoadingStyle {
  $isActive: boolean;
}

export const MainButton = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  place-items: Center;
`;

export const WrapCustomButtons = styled.button<ICustomButtonStyle>`
  font-size: 1rem;
  background-color: ${({ $isDisabled }) =>
    $isDisabled ? "#838383" : "#24292b"};
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  color: #fff;
  cursor: ${({ $isDisabled }) => ($isDisabled ? "default" : "pointer")};
  max-width: 140px;
`;
export const CustomLoading = styled.span<ICustomLoadingStyle>`
  display: ${({ $isActive }) => ($isActive ? "block" : "none")};
  &:after {
    content: "";
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 2px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ring 1.2s linear infinite;
  }
  @keyframes ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
