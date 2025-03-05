const BackgroundVideo = () => {
  return (
    <section className="background-video-container">
      <video className="background-video " autoPlay muted loop playsInline>
        <source
          src="https://www.cmacgm-group.com/api//sites/default/files/2022-06/CMACGM_FondationLanding_Motion_V1_1_0.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
};

export default BackgroundVideo;
