import Skeleton from "react-loading-skeleton";
import usePhotos from "../hooks/use-photos";
import Post from "./post";

export default function Timeline() {

    const { photos } = usePhotos();

    return(
        <div className="col-span-2 container">
            {!photos?(
                    <Skeleton count={4} width={640} height={500} className="mb-5"/>
            ):(photos?.length>0?(
                photos.map((photo)=><Post key={photo.docId} content={photo}/>)
            ):(<p className="text-center text-2xl"> Let's find some friends to follow! </p>))}
        </div>
    )
}