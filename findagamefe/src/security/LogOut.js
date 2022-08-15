import { useAuth } from "./authContext";
import { MdLogout } from "react-icons/md";

const LogOut = () => {
  const { signout } = useAuth();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "fit-content",
      }}
    >
      <button
        onClick={signout}
        style={{ margin: "0px", backgroundColor: "gray" }}
      >
        <MdLogout />
      </button>
      <p style={{ color: "#551AA8" }}>Log Out</p>
    </div>
  );
};

export default LogOut;
