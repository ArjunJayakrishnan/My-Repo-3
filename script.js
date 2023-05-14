"use strict";
//////////// ELEMENTS ////////////
const rateContainer = document.querySelector(".rate--container");
const thankYouContainer = document.querySelector(".thank-you--container");
const ratings = document.querySelectorAll(".rating");
const button = document.querySelector(".btn");

///////// DOM manipulation ////////////
// 1) Changing selected rating color
ratings.forEach(function (rating) {
	rating.addEventListener("click", function (e) {
		ratings.forEach((otherItem) => {
			otherItem.classList.remove("rated");
		});
		rating.classList.add("rated");
		// 2) Pressing submit
		button.addEventListener("click", function () {
			thankYouContainer.classList.remove("hidden");
			rateContainer.classList.add("hidden");
			// 3) Your selection showing up
			const dataId = rating.dataset.id;
			const yourSelSpan = document.querySelector(".your-selection--span");
			yourSelSpan.textContent = dataId;
		});
	});
});
