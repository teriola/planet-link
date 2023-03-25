import { createContext, useContext } from "react";

const PostsContext = createContext();

export const usePostsContext = () => {
  return useContext(PostsContext);
};

export function PostsProvider ({ children }) {

  const contextValue = {
    
  };

  return(
    <PostsContext.Provider value={contextValue}>
      {children}
    </PostsContext.Provider>
  );
};
