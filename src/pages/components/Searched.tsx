import gifsStore from "../../store/gifsStore";
import React from "react";
import {Link} from "react-router-dom";


const Searched = () => {
    return (
        <div className="w-full  grid grid-flow-dense grid-cols-4 gap-3 " >
            {gifsStore.searchedGifs.map((item:any) => (
                <Link to={`/gif-page/${item.id}`} >
                    <img
                        className="min-h-[200px] min-w-[200px] rounded"
                        src={item.images.downsized_large.url}
                        alt="gif"
                    />
                </Link>

            ))}
        </div>
    )
}

export default  Searched;