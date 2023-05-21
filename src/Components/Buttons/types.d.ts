interface IButtons extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading: boolean;
}

interface ICustomButtonStyle {
  disabled: boolean;
}

interface ICustomLoadingStyle {
  active: boolean;
}
