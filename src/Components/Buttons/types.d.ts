interface ICustomButtons extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading: boolean;
  buttonDisabled: boolean;
}
