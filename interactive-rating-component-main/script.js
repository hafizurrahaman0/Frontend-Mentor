document.addEventListener("DOMContentLoaded", () => {
    // Get all the rating elements and the submit button
    const ratings = document.querySelectorAll(".rate");
    const submitButton = document.getElementById("button");
    const ratingState = document.querySelector(".rating-state");
    const thankYouState = document.querySelector(".thank-you-state");
    const scoreSelected = document.querySelector(".scoreselected");
  
    let selectedRating = null;
  
    // Add event listeners to each rating element
    ratings.forEach((rating) => {
      rating.addEventListener("click", () => {
        // Remove the active class from all ratings
        ratings.forEach((rate) => rate.classList.remove("active"));
        
        // Add the active class to the selected rating
        rating.classList.add("active");
  
        // Store the selected rating value
        selectedRating = rating.textContent.trim();
      });
    });
  
    // Add event listener to the submit button
    submitButton.addEventListener("click", () => {
      if (selectedRating) {
        // Hide the rating state and show the thank you state
        ratingState.parentElement.classList.add("hide");
        thankYouState.parentElement.classList.remove("hide");
        
        // Update the score in the thank you state
        scoreSelected.textContent = selectedRating;
      } else {
        alert("Please select a rating before submitting.");
      }
    });
  });