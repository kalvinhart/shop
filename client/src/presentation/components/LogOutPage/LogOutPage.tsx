import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "../../hooks/useAuthState/useAuthState";

const LogOutPage = () => {
  const { logOut } = useAuthState();
  const navigate = useNavigate();

  useEffect(() => {
    logOut();
    navigate("/");
  }, [logOut, navigate]);

  return <></>;
};

export default LogOutPage;
