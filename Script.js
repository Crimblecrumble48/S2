const boxes = document.querySelectorAll(".box");

		boxes.forEach((box) => {
			box.addEventListener("mouseleave", () => {
				box.querySelector(".overlay").style.transform = "translateY(150%)";
			});
		});