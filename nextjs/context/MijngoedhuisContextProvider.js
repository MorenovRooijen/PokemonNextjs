import UserContextProvider from "context/UserContextProvider";

const MijngoedhuisContextProvider = ({ children }) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};
export default MijngoedhuisContextProvider;
