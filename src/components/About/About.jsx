import { useContext } from "react";
import Card from "../ui/Card";
import { ProfileContext, useProfileContext } from '../../contexts/ProfileContext';
import Loading from "../ui/Loading";


export default function About() {
    const { user } = useContext(ProfileContext);

    return (
        <Card>
            <h2 className="text-3xl mb-2">About me</h2>
            {user.description ? <p className="mb-2 text-sm">{user.description}</p> :
                <h3 className="text-2xl text-center pt-4">No about information</h3>
            }
        </Card>
    );
};
