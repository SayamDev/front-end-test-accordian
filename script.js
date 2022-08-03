var toggleStatus = 1;
		function toggleMenu() {
			if (toggleStatus == 1) {
				document.getElementById("menu").style.display = "block";
				toggleStatus = 0;
			} else if (toggleStatus == 0) {
				document.getElementById("menu").style.display = "none";
				toggleStatus = 1;
			}
		}