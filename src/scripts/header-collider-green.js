function onScroll() {
    var logoSVGRect = document.querySelector('.logo svg').getBoundingClientRect();
    var rightElementsRect = document.querySelector('.right').getBoundingClientRect();
    var collidables = document.querySelectorAll('.collidable');
    var svgPaths = document.querySelectorAll('.logo svg path');
    var rightText = document.querySelector('.right span');
    var line = document.querySelector('.right .line');
    var bubble = document.querySelector('.right .bubble');
    var language = document.querySelector('.right .language');

    var isLogoColliding = false;
    var isMenuColliding = false;

    collidables.forEach(function(collidable) {
        var elemRect = collidable.getBoundingClientRect();

        if (checkCollision(logoSVGRect, elemRect)) {
            isLogoColliding = true;
        }

        if (checkCollision(rightElementsRect, elemRect)) {
            isMenuColliding = true;
        }
    });


    svgPaths.forEach(function(path) {
        path.style.fill = isLogoColliding ? "#E6F5E4" : "#004A4E";
    });

    if (isLogoColliding || isMenuColliding) {
        // If either logo or menu is colliding, change styles
        rightText.style.color = "#E6F5E4";
        line.style.backgroundColor = "#E6F5E4";
        bubble.style.backgroundColor = "#E6F5E4";
        language.style.backgroundColor = "#E6F5E4";
        language.style.color = "#004A4E";
    } else {
        // If neither is colliding, revert styles
        rightText.style.color = "#004A4E";
        line.style.backgroundColor = "#004A4E";
        bubble.style.backgroundColor = "#004A4E";
        language.style.backgroundColor = "#004A4E";
        language.style.color = "#E6F5E4";
    }
}

function checkCollision(rect1, rect2) {
    var horizontalOverlap = Math.max(0, Math.min(rect1.right, rect2.right) - Math.max(rect1.left, rect2.left));
    var verticalOverlap = Math.max(0, Math.min(rect1.bottom, rect2.bottom) - Math.max(rect1.top, rect2.top));
    return horizontalOverlap > 0 && verticalOverlap > 0;
}

window.addEventListener('scroll', onScroll);
