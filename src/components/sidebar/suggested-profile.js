import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {updateLoggedInUsersFollowing, updateFollowedUsersFollowers} from '../../services/firebase';

export default function SuggestedProfiles({suggestedProfileUserDocId, profileId, username, userId, loggedInUserDocId}){
    const[followed, setFollowed] = useState(false);

    async function handleFollowAction(){
        setFollowed(!followed);
        await updateLoggedInUsersFollowing(loggedInUserDocId, profileId, false);
        await updateFollowedUsersFollowers(suggestedProfileUserDocId, loggedInUserDocId, false);
    }

    return !followed?(
        <div className="flex flex-row items-center justify-between">
            <div className="flex items-center justify-between">
                <img className="rounded-full flex w-8 mr-3"
                src={`/images/avatar/${username}.jpeg`}
                alt=""
                />
                <Link to={`/p/${username}`}>
                    <p className="font-bold text-sm">{username}</p>
                </Link>
            </div>
            <button className="text-sm font-bold text-blue-medium"
            type="button" 
            onClick={handleFollowAction} >
                Follow
            </button>
        </div>
    ):null
}

SuggestedProfiles.propTypes={
    suggestedProfileUserDocId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    profileId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    loggedInUserDocId: PropTypes.string.isRequired,
}