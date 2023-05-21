import { CustomButtons, CustomLoading, MainButton } from "./styles";

const Buttons: React.FC<IButtons> = ({ children, loading, ...props }) => {
  return (
    <MainButton>
      <CustomButtons disabled={loading} {...props}>
        {children}
        <CustomLoading active={loading}></CustomLoading>
      </CustomButtons>
    </MainButton>
  );
};

export default Buttons;
