import React from 'react';

const VideoList = () => {
  return (
    <div className="video-list">
      <a href="#" className="video-card">
        <div className="thumbnail-container">
          <img src="https://i.ytimg.com/vi/OORUHkgg4IM/maxresdefault.jpg" alt="Video Thumbnail" className="thumbnail" />
          <p className="duration">10:03</p>
        </div>
        <div className="video-info">
          <img src="https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj" alt="Channel Logo" className="icon" />
          <div className="video-details">
            <h2 className="title">Top 10 Easy To Create JavaScript Games For Beginners</h2>
            <p className="channel-name">CodingNepal</p>
            <p className="views">27K Views • 4 months ago</p>
          </div>
        </div>
      </a>
      {/* Add more video cards as needed */}
    </div>
  );
};

export default VideoList;
