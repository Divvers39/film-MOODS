// This waits for the content of the page to be loaded
// Document is the HTML page
// DOMContentLoaded is an event that is fired when the HTML page is loaded
document.addEventListener('DOMContentLoaded', function(){
    var cStream = document.getElementById("canvas").captureStream(30);
    var recorder = new MediaRecorder(cStream);
    var chunks = [];
    recorder.ondataavailable = saveChunks; 
    function saveChunks(e) {
        chunks.push(e.data);
    } 
    document.getElementById("start").addEventListener("click", function(){
        recorder.start();
    }); 
    document.getElementById("stop").addEventListener("click", function(){
        recorder.stop();
    }); 
    document.getElementById("export").addEventListener("click", function(){
        var blob = new Blob(chunks, { type: 'video/webm' });
        var vidURL = URL.createObjectURL(blob);
        // Create a link element
        var a = document.createElement('a');
        a.style.display = 'none';
        a.href = vidURL;
        a.download = 'recorded_video.webm'; // specify the filename here
     
        // Append the link to the body
        document.body.appendChild(a);
     
        // Trigger a click event on the link
        a.click();
     
        // Cleanup
        URL.revokeObjectURL(vidURL);
    });
    // This gets the element with the id of selection
    // This adds an event listener to the selection element
    // The event listener is a function that is called when the selection element is changed
    document.getElementById("selection").addEventListener("change", function() {
        // This gets the value of the selection element
        // It then saves it to the option variable
        var option = document.getElementById("selection").value
        // This gets the body element and saves it to the body variable
        var body = document.getElementById("body");
        // Initalizing the information variable
        var information
        // This checks the value of the selection element
        // If the value is red, it changes the background color to red
        // If the value is blue, it changes the background color to blue
        // If the value is green, it changes the background color to green
        // It will also display infomration about the color

        var container = document.getElementById("container")
        container.innerHTML = ""
        if(option === "custom"){
            document.getElementById("redSlider").style.display = "block"
            document.getElementById("greenSlider").style.display = "block"
            document.getElementById("blueSlider").style.display = "block"
            document.getElementById("saturationSlider").style.display = "none"
        }else{
            document.getElementById("redSlider").style.display = "none"
            document.getElementById("greenSlider").style.display = "none"
            document.getElementById("blueSlider").style.display = "none"
            document.getElementById("saturationSlider").style.display = "block"
        }
    
        
        if(option === "red"){
            var paragraph1 = document.createElement("p")
            paragraph1.innerHTML = "“Red is one of the most intense, stimulating colors that raises a room\'s energy. Muted shades can pique feelings of love, passion, and sensuality, while bright hues may trigger anger, strength, and power. It\'s a warm, generally positive, motivating color that encourages people to act and gives shy, soft-spoken folks more confidence” (MHA, 2024)."
            container.appendChild(paragraph1)

            var link1 = document.createElement("a")
            link1.setAttribute("href","https://mhanational.org/surroundings/color-psychology-explained#:~:text=Bright%2C%20warm%20colors%20")
            link1.innerHTML = "Source"
            link1.setAttribute("target", "_blank")
            paragraph1.appendChild(link1)

            var paragraph2 = document.createElement("p")
            paragraph2.innerHTML = "“Red - Passion, love, anger, danger” (Montanari, 2023)."
            container.appendChild(paragraph2)

            var link2 = document.createElement("a")
            link2.setAttribute("href", "https://www.tobiamontanari.com/the-psychological-effects-of-color-in-films-and-tv/")
            link2.innerHTML = "Source"
            link2.setAttribute("target", "_blank")
            paragraph2.appendChild(link2)

            var paragraph3 = document.createElement("p")
            paragraph3.innerHTML = "“Red - anger, passion, rage, desire, excitement, energy, speed, strength, power, heat, love, aggression, danger, fire, blood, war, violence”(Fucso & Hellerman, 2023)."
            container.appendChild(paragraph3)

            var link3 = document.createElement("a")
            link3.setAttribute("href", "https://nofilmschool.com/color-psychology-in-film")
            link3.innerHTML = "Source"
            link3.setAttribute("target", "_blank")
            paragraph3.appendChild(link3)

        } else if (option === "blue"){
            var paragraph1 = document.createElement("p")
            paragraph1.innerHTML = "“Blue has the opposite effects of red and is the most soothing color. Primary blue is used in therapeutic settings for meditation and relaxation because it helps you unwind, find peace, and become more comfortable expressing your inner feelings. It’s also associated with wisdom, creativity, and spirituality. Light blues are serene and can help with insomnia, while too much exposure to dark shades can trigger feelings of sadness, loneliness, or lethargy” (MHA, 2024)."
            container.appendChild(paragraph1)

            var link1 = document.createElement("a")
            link1.setAttribute("href", "https://mhanational.org/surroundings/color-psychology-explained#:~:text=Bright%2C%20warm%20colors%20")
            link1.innerHTML = "Source"
            link1.setAttribute("target", "_blank")
            paragraph1.appendChild(link1)

            var paragraph2 = document.createElement("p")
            paragraph2.innerHTML = "“Blue - Calmness, tranquility, sadness, melancholy” (Montanri, 2023)."
            container.appendChild(paragraph2)

            var link2 = document.createElement("a")
            link2.setAttribute("href", "https://www.tobiamontanari.com/the-psychological-effects-of-color-in-films-and-tv/")
            link2.innerHTML = "Source"
            link2.setAttribute("target", "_blank")
            paragraph2.appendChild(link2)

            var paragraph3 = document.createElement("p")
            paragraph3.innerHTML = "“Blue - faith, spirituality, contentment, loyalty, fulfillment peace, tranquility, calm, stability, harmony, unity, trust, truth, confidence, conservatism, security, cleanliness, order, sky, water, cold, technology, depression” (Fusco & Hellerman, 2023)."
            container.appendChild(paragraph3)

            var link3 = document.createElement("a")
            link3.setAttribute("href", "https://nofilmschool.com/color-psychology-in-film")
            link3.innerHTML = "Source"
            link3.setAttribute("target", "_blank")
            paragraph3.appendChild(link3)

        } else if (option === "green"){
            var paragraph1 = document.createElement("p")
            paragraph1.innerHTML = "“Green can improve your mood when you\'re feeling sad, hopeless, or depressed because of its association with nature. It\'s considered the most balanced color, and it\'s usually the first color patients trying color psychology experiment with. It encourages you to be independent and make changes, as well as enhances feelings of love, joy, and inner peace. Green is also said to stimulate wisdom, hope, strength, and serenity, although shades too close to yellow may be anxiety-inducing for some people” (MHA, 2024)."
            container.appendChild(paragraph1)

            var link1 = document.createElement("a")
            link1.setAttribute("href", "https://mhanational.org/surroundings/color-psychology-explained#:~:text=Bright%2C%20warm%20colors%20")
            link1.innerHTML = "Source"
            link1.setAttribute("target", "_blank")
            paragraph1.appendChild(link1)

            var paragraph2 = document.createElement("p")
            paragraph2.innerHTML = "“Green - Nature, growth, envy, sickness” (Montanri, 2023)."
            container.appendChild(paragraph2)

            var link2 = document.createElement("a")
            link2.setAttribute("href", "https://www.tobiamontanari.com/the-psychological-effects-of-color-in-films-and-tv/")
            link2.innerHTML = "Source"
            link2.setAttribute("target", "_blank")
            paragraph2.appendChild(link2)

            var paragraph3 = document.createElement("p")
            paragraph3.innerHTML = "“Green - healing, soothing, perseverance, tenacity, self-awareness, proud, unchanging nature, environment, healthy, good luck, renewal, youth, vigor, spring, generosity, fertility, jealousy, inexperience, envy” (Fusco & Hellerman, 2023)."
            container.appendChild(paragraph3)

            var link3 = document.createElement("a")
            link3.setAttribute("href", "https://nofilmschool.com/color-psychology-in-film")
            link3.innerHTML = "Source"
            link3.setAttribute("target", "_blank")
            paragraph3.appendChild(link3)

        } else if (option === "purple"){
            var paragraph1 = document.createElement("p")
            paragraph1.innerHTML = "“Purple is similar to blue in the way it makes you feel calm and relaxed. Lighter shades, like lavender, tend to feel more hopeful or optimistic while dark, rich shades inspire feelings of power or strength. It encourages introspection and creativity, and may also make you feel more sensitive and compassionate” (MHA, 2024)."
            container.appendChild(paragraph1)

            var link1 = document.createElement("a")
            link1.setAttribute("href", "https://mhanational.org/surroundings/color-psychology-explained#:~:text=Bright%2C%20warm%20colors%20")
            link1.innerHTML = "Source"
            link1.setAttribute("target", "_blank")
            paragraph1.appendChild(link1)

            var paragraph2 = document.createElement("p")
            paragraph2.innerHTML = "“Purple - Royalty, luxury, mystery” (Montanri, 2023)."
            container.appendChild(paragraph2)

            var link2 = document.createElement("a")
            link2.setAttribute("href", "https://www.tobiamontanari.com/the-psychological-effects-of-color-in-films-and-tv/")
            link2.innerHTML = "Source"
            link2.setAttribute("target", "_blank")
            paragraph2.appendChild(link2)

            var paragraph3 = document.createElement("p")
            paragraph3.innerHTML = "“Purple - erotic, royalty, nobility, spirituality, ceremony, mysterious, transformation, wisdom, enlightenment, cruelty, arrogance, mourning, power, sensitive, intimacy” (Fusco & Hellerman, 2023)."
            container.appendChild(paragraph3)

            var link3 = document.createElement("a")
            link3.setAttribute("href", "https://nofilmschool.com/color-psychology-in-film")
            link3.innerHTML = "Source"
            link3.setAttribute("target", "_blank")
            paragraph3.appendChild(link3)

        } else if (option === "orange"){
            var paragraph1 = document.createElement("p")
            paragraph1.innerHTML = "“Orange is another stimulating color that can trigger feelings like enthusiasm and passion. Its revitalizing nature is also said to boost the amount of oxygen that goes to your brain, making you feel vivacious” (MHA, 2024)."
            container.appendChild(paragraph1)

            var link1 = document.createElement("a")
            link1.setAttribute("href", "https://mhanational.org/surroundings/color-psychology-explained#:~:text=Bright%2C%20warm%20colors%20")
            link1.innerHTML = "Source"
            link1.setAttribute("target", "_blank")
            paragraph1.appendChild(link1)

            var paragraph2 = document.createElement("p")
            paragraph2.innerHTML = "“Orange - Warmth, excitement, enthusiasm” (Montanri, 2023)."
            container.appendChild(paragraph2)

            var link2 = document.createElement("a")
            link2.setAttribute("href", "https://www.tobiamontanari.com/the-psychological-effects-of-color-in-films-and-tv/")
            link2.innerHTML = "Source"
            link2.setAttribute("target", "_blank")
            paragraph2.appendChild(link2)

            var paragraph3 = document.createElement("p")
            paragraph3.innerHTML = "“Orange - humor, energy, balance, warmth, enthusiasm, vibrant, expansive, flamboyant” (Fusco & Hellerman, 2023)."
            container.appendChild(paragraph3)

            var link3 = document.createElement("a")
            link3.setAttribute("href", "https://nofilmschool.com/color-psychology-in-film")
            link3.innerHTML = "Source"
            link3.setAttribute("target", "_blank")
            paragraph3.appendChild(link3)

        } else if (option === "yellow"){
            var paragraph1 = document.createElement("p")
            paragraph1.innerHTML = "“Yellow is another intense, motivating color that triggers feelings of happiness. It tends to bring out your intelligence, wisdom, and creativity and is the most optimistic, hopeful color (probably because it's associated with sunlight). It's light and playful in small doses, but can be overwhelming or anxiety-inducing in large amounts (especially if you're already stressed). Lighter or pastel shades are less stimulating than bright hues” (MHA, 2024)."
            container.appendChild(paragraph1)

            var link1 = document.createElement("a")
            link1.setAttribute("href", "https://mhanational.org/surroundings/color-psychology-explained#:~:text=Bright%2C%20warm%20colors%20")
            link1.innerHTML = "Source"
            link1.setAttribute("target", "_blank")
            paragraph1.appendChild(link1)

            var paragraph2 = document.createElement("p")
            paragraph2.innerHTML = "“Yellow - Happiness, energy, caution” (Montanri, 2023)."
            container.appendChild(paragraph2)

            var link2 = document.createElement("a")
            link2.setAttribute("href", "https://www.tobiamontanari.com/the-psychological-effects-of-color-in-films-and-tv/")
            link2.innerHTML = "Source"
            link2.setAttribute("target", "_blank")
            paragraph2.appendChild(link2)

            var paragraph3 = document.createElement("p")
            paragraph3.innerHTML = "“Yellow - wisdom, knowledge, relaxation, joy, happiness, optimism, idealism, imagination, hope, sunshine, summer, dishonesty, cowardice, betrayal, jealousy, covetousness, deceit, illness, hazard” (Fusco & Hellerman, 2023)."
            container.appendChild(paragraph3)

            var link3 = document.createElement("a")
            link3.setAttribute("href", "https://nofilmschool.com/color-psychology-in-film")
            link3.innerHTML = "Source"
            link3.setAttribute("target", "_blank")
            paragraph3.appendChild(link3)

        } else if (option === "pink"){
            var paragraph1 = document.createElement("p")
            paragraph1.innerHTML = "“Pink is associated with kindness and love, and it\'s believed to boost creativity and feelings of peace, calm, and hopefulness. Bright shades like fuchsia are linked to higher energy and confidence, while lighter shades give feelings of care and quiet strength. Pink is the calmest of the warm colors and has been used to soothe feelings of anger, resentment, or aggression (although too much can feel draining)” (MHA, 2024)."
            container.appendChild(paragraph1)

            var link1 = document.createElement("a")
            link1.setAttribute("href", "https://mhanational.org/surroundings/color-psychology-explained#:~:text=Bright%2C%20warm%20colors%20")
            link1.innerHTML = "Source"
            link1.setAttribute("target", "_blank")
            paragraph1.appendChild(link1)

            var paragraph2 = document.createElement("p")
            paragraph2.innerHTML = "“Pink - love, innocence, healthy, happy, content, romantic, charming, playfulness, soft, delicate, feminine” (Fusco & Hellerman, 2023)."
            container.appendChild(paragraph2)

            var link2 = document.createElement("a")
            link2.setAttribute("href", "https://nofilmschool.com/color-psychology-in-film")
            link2.innerHTML = "Source"
            link2.setAttribute("target", "_blank")
            paragraph2.appendChild(link2)

        } else if (option === "brown"){
            var paragraph1 = document.createElement("p")
            paragraph1.innerHTML = "“Brown is a warm, grounding, neutral color that provokes a feeling of safety (probably since it\'s a rich, earthy color). It doesn\'t stand out much on its own, even though it can be used for entire walls or rooms. Brown reminds people of their basic necessities and important connections, like family and shelter. It blends well with most other colors and can add a sense of stability to bright, energetic hues like orange or yellow” (MHA, 2024)."
            container.appendChild(paragraph1)

            var link1 = document.createElement("a")
            link1.setAttribute("href", "https://mhanational.org/surroundings/color-psychology-explained#:~:text=Bright%2C%20warm%20colors%20")
            link1.innerHTML = "Source"
            link1.setAttribute("target", "_blank")
            paragraph1.appendChild(link1)

            var paragraph2 = document.createElement("p")
            paragraph2.innerHTML = "“Brown - materialistic, sensation, earth, home, outdoors, reliability, comfort, endurance, stability, simplicity” (Fusco & Hellerman, 2023)."
            container.appendChild(paragraph2)

            var link2 = document.createElement("a")
            link2.setAttribute("href", "https://nofilmschool.com/color-psychology-in-film")
            link2.innerHTML = "Source"
            link2.setAttribute("target", "_blank")
            paragraph2.appendChild(link2)

        } else if (option === "custom"){
          
            information = "Main Menu" 
            } else if (option === "grey"){
           
            information = "Main Menu"             
        } else{
           
            information="not a valid color"
            console.log(option)
            console.log("this is not a valid color")
        }
       
    });

        const processor = {
            timerCallback() {
                if (this.video.paused || this.video.ended) {
                    return;
                }
                this.computeFrame();
                setTimeout(() => {
                    this.timerCallback();
                }, 16); // roughly 60 frames per second
            },
 
            doLoad() {
                this.video = document.getElementById("video");
                this.c1 = document.getElementById("canvas");
                this.ctx1 = this.c1.getContext("2d");
 
                // Wait for the video to be loaded
                this.video.addEventListener('loadedmetadata', () => {
                    this.width = this.video.videoWidth;
                    this.height = this.video.videoHeight;
                    this.timerCallback();
                });
 
                // Start the timer when the video starts playing
                this.video.addEventListener('play', () => {
                    this.timerCallback();
                });
 
                // If the video is paused or ends, clear the timer
                this.video.addEventListener('pause', () => {
                    clearTimeout(this.timer);
                });
                this.video.addEventListener('ended', () => {
                    clearTimeout(this.timer);
                });
            },
 
            computeFrame() {
                const aspectRatio = this.width / this.height;
                const canvasAspectRatio = this.c1.width / this.c1.height;
                let drawWidth, drawHeight;
               
                if (aspectRatio > canvasAspectRatio) {
                    drawWidth = this.c1.width;
                    drawHeight = drawWidth / aspectRatio;
                } else {
                    drawHeight = this.c1.height;
                    drawWidth = drawHeight * aspectRatio;
                }
 
                const x = (this.c1.width - drawWidth) / 2;
                const y = (this.c1.height - drawHeight) / 2;
 
                this.ctx1.drawImage(this.video, x, y, drawWidth, drawHeight);
                const frame = this.ctx1.getImageData(0, 0, this.width, this.height);
                const l = frame.data.length / 4;
 
                for (let i = 0; i < l; i++) {
                    const grey =
                        (frame.data[i * 4 + 0] +
                        frame.data[i * 4 + 1] +
                        frame.data[i * 4 + 2]) /
                        3;
                    const currentColor = document.getElementById("selection").value
                    //   frame.data[i * 4 + 0] this is red
                    //   frame.data[i * 4 + 1] this is green
                    //   frame.data[i * 4 + 2] this is blue
                    var red = frame.data[i * 4 + 0]
                    var green = frame.data[i * 4 + 1]
                    var blue = frame.data[i * 4 + 2]
                    var saturation = document.getElementById("saturation").value/100
                    if(currentColor === "red"){
                        red +=50 *saturation 
                    }
                    else if(currentColor === "blue"){  
                        blue +=50 *saturation
                    }
                    else if(currentColor === "green"){ 
                        green +=50 *saturation
                    }
                    else if(currentColor === "purple"){
                        red +=50  *saturation
                        blue +=50 *saturation
                    }
                    else if(currentColor === "orange"){
                        red +=100 *saturation
                        green +=75 *saturation
                    }
                    else if(currentColor === "yellow"){
                        red +=50  *saturation
                        green +=75  *saturation
                    }
                    else if(currentColor === "pink"){
                        red +=100 *saturation
                        blue +=50 *saturation
                    }
                    else if(currentColor === "brown"){
                        red +=140  *saturation
                        green +=50 *saturation
                    }
                    else if(currentColor === "custom"){
                        red+=document.getElementById("red").value
                        green+=document.getElementById("green").value
                        blue+=document.getElementById("blue").value
                    }

                    frame.data[i * 4 + 0] = red
                    frame.data[i * 4 + 1] = green
                    frame.data[i * 4 + 2] = blue
                }

                this.ctx1.putImageData(frame, 0, 0);
               
                // Call the timerCallback recursively
                this.timer = setTimeout(() => {
                    this.timerCallback();
                }, 10);
            },
        };
 
        // Function to handle file input change
        function handleFileInputChange(event) {
            const file = event.target.files[0];
            const video = document.getElementById('video');
            video.setAttribute("controls","controls")
 
            // Set the source of the video element to the uploaded file
            video.src = URL.createObjectURL(file);
 
            // Show the video element
            video.style.display = 'block';
 
            // Initialize the processor
            processor.doLoad();
        }
 
        // Attach event listener to file input
        document.getElementById('inputBox').addEventListener('change', handleFileInputChange);
});

