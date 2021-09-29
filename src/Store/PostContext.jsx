import { createContext, useState } from "react";

export const PostContext = createContext(null);

const PostCon = ({ children }) => {
   const [postDetails, setPostDetails] = useState(null);

   return (
      <PostContext.Provider value={{ postDetails, setPostDetails }}>
         {children}
      </PostContext.Provider>
   );
};

export default PostCon;