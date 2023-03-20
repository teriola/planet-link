import { createContext, useContext, useEffect, useState } from "react";
import { getUserById } from '../services/userService';

const ProfileContext = createContext();

export function useProfileContext() {
    return useContext(ProfileContext);
}

export function ProfileProvider({ children }) {
    const id = useParams().id;
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUserById(id)
            .then(user => {
                setUser(user);
            });
    }, [id]);

    const contextValue = {
        user,
    };

    return (
        <ProfileContext.Provider value={contextValue}>
            {children}
        </ProfileContext.Provider>
    )
}