export function Hero({ heroMovie }) {
  console.log("hero ", heroMovie);
  return (
    <div className="video-container">
      <iframe
        className="w-full h-[80vh]"
        src={`https://www.youtube.com/embed/${heroMovie}?controls=0&showinfo=0&rel=0&modestbranding=1&autoplay=1`}
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
}
