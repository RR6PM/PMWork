document.addEventListener("DOMContentLoaded", function () {
    const lazyVideo = document.getElementById("lazy-video");
  
    function handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          lazyVideo.play();
        } else {
          lazyVideo.pause();
        }
      });
    }
  
    const options = {
      root: null, // Use the viewport as the container
      rootMargin: "0px", // No margin
      threshold: 0.1, // Trigger when 10% of the video is visible
    };
  
    const observer = new IntersectionObserver(handleIntersection, options);
  
    observer.observe(lazyVideo);
  });