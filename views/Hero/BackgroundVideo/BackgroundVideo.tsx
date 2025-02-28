const BackgroundVideo = () => {
	return (
	  <div className="background-video-container">
		<video
		  className="background-video absolute "
		  autoPlay
		  muted
		  loop
		  playsInline
		>
		  <source
			src="https://www.cmacgm-group.com/api//sites/default/files/2022-06/CMACGM_FondationLanding_Motion_V1_1_0.mp4"
			type="video/mp4"
		  />
		</video>
	  </div>
	);
  };
  
  export default BackgroundVideo;
  