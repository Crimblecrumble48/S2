const boxes = document.querySelectorAll(".Navigation");

		boxes.forEach((Navigation) => {
			Navigation.addEventListener("mouseleave", () => {
				Navigation.querySelector(".overlay").style.transform = "translateX(100%)";
			});
		});