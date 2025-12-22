function createFloatingHeart() {
  const container = document.body; // Or a specific container <div>
  const heart = document.createElement('div');
  
  // Set the content (using a standard emoji)
  heart.textContent = '❤️'; 
  
  // Apply the CSS class for styling and animation
  heart.classList.add('heart');
  
  // 1. Randomize the starting horizontal position (left property)
  const randomLeft = Math.random() * 100; // Generates a number between 0 and 100
  heart.style.left = `${randomLeft}%`;
  
  // 2. Randomize the animation duration slightly for a more natural effect
  const randomDuration = 3 + Math.random() * 2; // Duration between 3s and 5s
  heart.style.animationDuration = `${randomDuration}s`;
  
  // Append the heart to the page
  container.appendChild(heart);
  
  // 3. Cleanup: Remove the element after the animation is finished
  // This prevents the page from filling up with thousands of hidden <div>s
  heart.addEventListener('animationend', () => {
    heart.remove();
  });
}

// Example usage: Call this function to make a heart appear.

// A. Trigger one heart on button click:
// document.getElementById('likeButton').addEventListener('click', createFloatingHeart);

// B. Trigger hearts continuously (stream effect):
setInterval(createFloatingHeart, 300); // Creates a new heart every 300 milliseconds