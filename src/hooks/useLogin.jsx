import { useEffect } from "react";

export const useLogin = () => {
  const [userLogin, setUserLogin] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUserLogin();
    }
    return () => {
      second;
    };
  }, [third]);
};
