import React, { createContext, useEffect, useReducer, useState } from "react";
export const UserContext = createContext();
function userReducer(state, action) {
  if (action.type == "LOADING") {
    return {
      ...state,
      loading: true,
      error: false,
    };
  }
  if (action.type == "ERROR") {
    return {
      ...state,
      loading: false,
      error: action.data,
    };
  }
  state = {
    ...state,
    loading: false,
    error: false,
  };
  switch (action.type) {
    case "SETUSER": {
      return {
        ...state,
        user: action.data,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const UserContextProvider = (props) => {
  const [state, action] = useReducer(userReducer, {});
  const [intialized, setInitialized] = useState(false);

  const isUserInitialized = () => {
    return intialized;
  };
  const isUserLoading = () => {
    return state?.loading;
  };

  const getUser = () => {
    return state?.user || null;
  };
  const fetchSomething = async () => {
    return new Promise((resolve) => setTimeout(resolve("Not a number"), 2000));
  };
  const reloadUser = async () => {
    action({ type: "LOADING" });
    console.time("loading_user");

    fetchSomething()
      .then((response) => {
        console.timeEnd("loading_user");

        action({
          type: "SETUSER",
          data: response,
        });
      })
      .catch((error) => {
        action({
          type: "ERROR",
          data: error,
        });
        console.timeEnd("loading_user");
      });
  };
  useEffect(() => {
    if (!intialized) {
      reloadUser();
      setInitialized(true);
    }
  }, []);
  //Add all functions you want to be exported to this object
  const exportFunctions = {
    getUser,
    isUserLoading,
    isUserInitialized,
    reloadUser,
  };
  return (
    <UserContext.Provider value={exportFunctions}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
