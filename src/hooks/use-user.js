import { useContext, useEffect, useState } from "react";
import UserContext from "../context/user";
import {getUserByUserId} from '../services/firebase';

export default function useUser() {

    const [activeUser, setActiveUser] = useState({});
    const {user} = useContext(UserContext);

    useEffect(() => {
       async function getUserObjByUserId(){
           //We need a function that can be called(firebase service) which gives us the user data based on the userId
            const [response] = await getUserByUserId(user.uid);
           setActiveUser(response);
       }
       if(user?.uid){
           getUserObjByUserId();
       }
    }, [user]);

    return{user:activeUser};
}