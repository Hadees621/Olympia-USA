const YouTubeVideo = () => {
  return (
    <div className="relative overflow-hidden w-full my-12 pt-[56.25%]">
      {" "}
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/vd7mnHBzaGU?si=pHQ3pcDQ7n3Xsync"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
