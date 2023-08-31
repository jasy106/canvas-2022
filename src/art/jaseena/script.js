function drawShape() {
            
            // get the canvas element using the DOM
            var canvas = document.getElementById('mycanvas');
            
            // Make sure we don't execute when canvas isn't supported
            if (canvas.getContext) {
               

               const ctx = canvas.getContext("2d");
               ctx.font = "30px Verdana";

               // Create gradient
               const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
               gradient.addColorStop("0", "magenta");
               gradient.addColorStop("0.5", "blue");
               gradient.addColorStop("1.0", "red");

               // Fill with gradient
               ctx.strokeStyle = gradient;
               ctx.strokeText("Jaseena!", 10, 50);

            } else {
               alert('You need Safari or Firefox 1.5+ to see this demo.');
            }
         }