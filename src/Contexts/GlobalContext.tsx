import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

interface GlobalContextData {
  setToken: Dispatch<SetStateAction<string>>;
  token: string;
  setAuthenticatedUser: Dispatch<SetStateAction<boolean>>;
  authenticatedUser: boolean;
  setUserData: Dispatch<SetStateAction<UserData>>;
  userData: UserData;
  setFormData: Dispatch<SetStateAction<FormData>>;
  formData: FormData;
}

interface GlobalProps {
  children: ReactNode;
}

interface UserData {
  name: string;
  surname: string;
}
interface FormData {
  teams: { id: number | undefined; name: string; logo: string };
  country: { name: string; code: string; image: string };
  seasons: {
    value: number | undefined;
    label: number | undefined;
  };
  leagues: {
    id: number | undefined;
    name: string;
    type: string;
    logo: string;
  };
}

export const GlobalContext = createContext({} as GlobalContextData);

export const GlobalContextProvider = ({ children }: GlobalProps) => {
  const firstRender = useRef(true);

  const [token, setToken] = useState<string>("");
  const [authenticatedUser, setAuthenticatedUser] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>({ name: "", surname: "" });
  const [formData, setFormData] = useState<FormData>({
    teams: { id: undefined, name: "", logo: "" },
    country: { name: "", code: "", image: "" },
    seasons: {
      value: undefined,
      label: undefined,
    },
    leagues: {
      id: undefined,
      name: "",
      type: "",
      logo: "",
    },
  });

  useEffect(() => {
    if (authenticatedUser) {
      return localStorage.setItem("isAutenticated:", "true");
    }

    return localStorage.setItem("isAutenticated:", "false");
  }, [authenticatedUser]);

  return (
    <GlobalContext.Provider
      value={{
        setToken,
        setAuthenticatedUser,
        setUserData,
        setFormData,
        userData,
        formData,
        token,
        authenticatedUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
