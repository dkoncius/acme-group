function onScroll() {
    var logoSVGRect = document.querySelector('.logo svg').getBoundingClientRect();
    var rightElementsRect = document.querySelector('.right').getBoundingClientRect(); // Assuming .menu encapsulates all menu elements
    var collidables = document.querySelectorAll('.collidable');
    var svgPaths = document.querySelectorAll('.logo svg path');
    var menuText = document.querySelector('.right span');
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
        path.style.fill = isLogoColliding ? "#E7ECFF" : "#15276A";
    });

    if (isMenuColliding) {
        menuText.style.color = "#E7ECFF";
        line.style.backgroundColor = "#E7ECFF";
        bubble.style.backgroundColor = "#E7ECFF";
        language.style.backgroundColor = "#E7ECFF";
        language.style.color = "#15276A";
    } else {
        menuText.style.color = "#15276A";
        line.style.backgroundColor = "#15276A";
        bubble.style.backgroundColor = "#15276A";
        language.style.backgroundColor = "#15276A";
        language.style.color = "#E7ECFF";
    }
}

function checkCollision(rect1, rect2) {
    var horizontalOverlap = Math.max(0, Math.min(rect1.right, rect2.right) - Math.max(rect1.left, rect2.left));
    var verticalOverlap = Math.max(0, Math.min(rect1.bottom, rect2.bottom) - Math.max(rect1.top, rect2.top));
    return horizontalOverlap > 0 && verticalOverlap > 0;
}

window.addEventListener('scroll', onScroll);
