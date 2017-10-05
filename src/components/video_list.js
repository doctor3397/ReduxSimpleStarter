import React from 'react';
import VideoListItem from './video_list_item';

// Function compoent: doesn't need to record user interaction/ state
// props are videos data(props) passed from the App(parent) component into the VideoList(child) component
// props: argument in a functional component
const VideoList = (props) => {
  // const videos = props.videos;
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />
  });

  return (
    <ul className="col-md-4 list-group" >
      {videoItems}
    </ul>
  );
}

export default VideoList;
