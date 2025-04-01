
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  // Get all heart bubbles
const heartBubbles = document.querySelectorAll('.heart-bubble');

// Function to generate random positions and sizes
function randomizeHeartBubble(bubble) {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  const size = Math.random() * 40 + 20; // Size between 20 and 60px
  bubble.style.left = `${x}px`;
  bubble.style.top = `${y}px`;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.animationDuration = `${Math.random() * 5 + 2}s`; // Vary animation duration
}

// Apply random positions and sizes to all bubbles
heartBubbles.forEach(randomizeHeartBubble);