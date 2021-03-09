import React from 'react';

const VideoDetail = ({ video }) => {
    if(!video){
        return (
        <div>
            Loading.....
        </div>);
    }

    const imageurl = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div className="ui segment">
            <div className="ui embeded">
                <iframe width="560" height="315" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen src={imageurl}></iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;