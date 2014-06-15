var galleries = (function(){
    var Gallery = function(div) {
            // Get number of images
            var container = div.getElementsByClassName('gallery-container')[0],
                images = div.getElementsByClassName('gallery-item'),
                currentImage = 0,
                numImages = images.length,
                changeInterval = 500;
            var captions = Array();

            // Set up the footer (caption + buttons)
            var footer = div.getElementsByClassName('gallery-footer')[0];

            // Clear the footer contents
            footer.innerHTML = '';

            // Add forward/back buttons/caption to footer
            var prevButton = document.createElement('div');
            prevButton.appendChild(document.createTextNode('<< Prev')) ;
            prevButton.className = 'gallery-button gallery-prev';

            var caption = document.createElement('div');
            caption.appendChild(document.createTextNode('A caption')) ;
            caption.className = 'gallery-caption';

            var nextButton = document.createElement('div');
            nextButton.appendChild(document.createTextNode('Next >>'));
            nextButton.className = 'gallery-button gallery-next';

            footer.appendChild(prevButton);
            footer.appendChild(caption);
            footer.appendChild(nextButton);
            
            // Set up the gallery-item images
            images = Array.prototype.map.call(images, function(image_div) {
                data = image_div.dataset;
                var new_img = document.createElement('img');
                new_img.setAttribute('src', data.image);
                image_div.innerHTML = '';
                image_div.appendChild(new_img);
                captions.push(data.caption);

                image_div.style.display = 'none';
                return image_div;
            });
            container.appendChild(images[0]);
            images[0].style.display = 'inline-block';

            updateCaption = function updateCaptionF() {
                caption.innerHTML = captions[currentImage];
            };
            updateCaption();

            function animate(opts, callback) {
                var start = new Date();
                var id = setInterval(function() {
                    var timePassed = new Date() - start;
                    var progress = timePassed / opts.duration;
                    if (progress > 1) progress = 1;
                    var delta = opts.delta(progress);
                    opts.step(delta);
                    if (progress == 1) {
                        clearInterval(id);

                        if (callback) {
                            callback();
                        }
                    }
                }, opts.delay || 10);
            }

            function moveL(element, delta, duration, to, callback) {
                to = to || 500;
                var old_left = parseInt(element.style.left, 10);
                animate({
                    delay: 10,
                    duration: duration || 1000, // 1 sec by default
                    delta: delta,
                    step: function(delta) {
                        element.style.left = old_left+(to*delta) + "px";
                    }
                }, callback);
            }

            function moveR(element, delta, duration, to, callback) {
                to = to || 500;
                var old_left = parseInt(element.style.left, 10);
                animate({
                    delay: 10,
                    duration: duration || 1000, // 1 sec by default
                    delta: delta,
                    step: function(delta) {
                        element.style.left = old_left-(to*delta) + "px";
                    }
                }, callback);
            }

            nextImage = function nextImageF() {
                var prevImg = images[currentImage],
                    halfsize = (container.offsetWidth/2);

                currentImage = currentImage + 1;

                if (currentImage >= images.length)
                    currentImage = 0;

                var newImg = images[currentImage];
                newImg.style.display = 'inline-block';
                container.style.left = '0px';
                container.appendChild(newImg);

                moveL(container, function(p) {return p;}, 1000, -halfsize, function() {
                    prevImg.style.display = 'none';
                    div.appendChild(prevImg);
                    container.style.left = '0px';
                });

                updateCaption();
            };
            var prevImage = function prevImageF() {
                var prevImg = images[currentImage],
                    halfsize = (container.offsetWidth/2);

                currentImage = currentImage - 1;
                if (currentImage < 0)
                    currentImage = images.length - 1;

                var newImg = images[currentImage];
                newImg.style.display = 'inline-block';
                container.style.left = -halfsize+'px';
                container.insertBefore(newImg, prevImg);

                moveR(container, function(p) {return p;}, 1000, -halfsize, function() {
                    prevImg.style.display = 'none';
                    div.appendChild(prevImg);
                    container.style.left = '0px';
                });

                updateCaption();
            };

            prevButton.addEventListener('click', prevImage, false);
            nextButton.addEventListener('click', nextImage, false);
        },
        init = function initF() {
            // Get a list of galleries and set them up
            var gals = document.getElementsByClassName('gallery'),
                galleries = Array.prototype.map.call(gals, setUpGallery);
        },
        setUpGallery = function setUpGalleryF(gallery_div) {
            return new Gallery(gallery_div);
        };
    window.onload = init;
})();