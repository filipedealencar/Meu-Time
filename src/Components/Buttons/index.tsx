import { WrapCustomButtons, CustomLoading, MainButton } from "./styles";

const CustomButtons: React.FC<ICustomButtons> = ({
  children,
  loading,
  buttonDisabled,
  onClick,
  type,
}) => {
  return (
    <MainButton>
      <WrapCustomButtons
        $isDisabled={loading || buttonDisabled}
        onClick={onClick}
        disabled={buttonDisabled}
        type={type}
      >
        {children}
        <CustomLoading $isActive={loading}></CustomLoading>
      </WrapCustomButtons>
    </MainButton>
  );
};

export default CustomButtons;
