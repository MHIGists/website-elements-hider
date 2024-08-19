function hideElements() {
  fetch(chrome.runtime.getURL('hidden-elements.json'))
    .then(response => response.json())
    .then(data => {
      let elementsArray = data.elements;

      // Hide elements from the elementsArray
      elementsArray.forEach(element => {
        let foundElements = document.querySelectorAll(element);
        foundElements.forEach(foundElement => {
          foundElement.style.display = 'none';
        });
      });

      // Hide "a" elements containing text from elementsArray
      let allLinks = document.querySelectorAll('a');
      allLinks.forEach(link => {
        if (elementsArray.some(text => link.textContent.includes(text))) {
          link.style.display = 'none';
        }
      });
    })
    .catch(error => console.error('Error reading JSON file:', error));
}

// Function to hide elements periodically
function hideElementsPeriodically() {
  hideElements(); // Initial hiding

  // Set interval to hide elements every 3 seconds
  setInterval(hideElements, 3000);
}

// Call the function to start hiding elements periodically
hideElementsPeriodically();
