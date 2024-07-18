let btn = document.querySelectorAll("button");
        btn.forEach(button => {
            button.addEventListener("click", function() {
                // Get a random color
                let randomColor = getRandomColor();

                // Select the h1 element and update its text
                let h1 = document.querySelector("h1");
                h1.innerText = `Color: ${randomColor}`;

                // Select the div and change its background color
                let div = document.querySelector("div");
                div.style.backgroundColor = randomColor;

                console.log("Random color: ", randomColor);
            });
        });

        // Function to generate a random color
        function getRandomColor() {
            let red = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            let color = `rgb(${red},${green},${blue})`;
            return color;
        }