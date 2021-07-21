import PropTypes from 'prop-types';
import Header from './header';
import Image from './image';
import Actions from './actions';
import { useRef } from 'react';
import Footer from './footer';

export default function Post({content}){

    const commentInput = useRef(null);
    const handleFocus = () => commentInput.current.focus();

    return (
        <div className="rounded col-span-4 border bg-white border-blue-medium mb-8">
            <Header username={content.username}/>
            <Image src={content.imageSrc} caption={content.caption}/>
            <Actions docId={content.docId} totalLikes={content.likes.length} isPhotoLiked={content.hasUserLikedPhoto} handleFocus={handleFocus} />
            <Footer caption={content.caption} username={content.username} />
        </div>
    )
}

Post.propTypes ={
    content: PropTypes.shape({
        username: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired,
        docId: PropTypes.string.isRequired,
        hasUserLikedPhoto: PropTypes.bool.isRequired,
        likes: PropTypes.array.isRequired,
        comments: PropTypes.array.isRequired,
        dateCreated: PropTypes.number.isRequired,
    })
}