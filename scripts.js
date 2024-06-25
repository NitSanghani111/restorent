
const body = document.querySelector("body"),
    loader = document.querySelector(".loader-wrap"),
    links = document.querySelectorAll('a[href="#"]'),
    nav = document.querySelector("header nav"),
    navToggle = document.querySelector("header nav .toggle"),
    navSpanMiddle = document.querySelector("header nav .toggle .middle"),
    navNavigationBar = document.querySelector("header nav .navigation-bar"),
    navNavigationBarLi = document.querySelectorAll(
        "header nav .navigation-bar li"
    ),
    headerText = document.querySelector("header .text"),
    headerSection = document.querySelector("header"),
    aboutSection = document.querySelector(".about-us"),
    recipeSection = document.querySelector(".recipes"),
    menuSection = document.querySelector(".menu"),
    fixedImageSection = document.querySelector(".fixed-image"),
    footerSection = document.querySelector("footer"),
    dotOne = document.querySelector(".dots .one"),
    dotTwo = document.querySelector(".dots .two"),
    dotThree = document.querySelector(".dots .three"),
    dots = document.querySelectorAll(".dots > div"),
    logoImage = document.querySelector("header nav .logo img"),
    svgDown = document.querySelector("header .arrow-down"),
    svgUp = document.querySelector(".copyright .arrow-up"),
    menuImgs = document.querySelectorAll(".menu .menu-image-container img"),
    boxModel = document.querySelector(".menu .box-model"),
    menuImageContainer = document.querySelector(".menu-image-container"),
    boxModelArrow = document.querySelector(".menu .box-model .arrow"),
    boxModelImage = document.querySelector(".menu .box-model img"),
    pageTitle = document.querySelector("title");


function fadeOutEffect() {
    const fadeEffect = setInterval(function() {
        if (!loader.style.opacity) {
            loader.style.opacity = 1;
        }
        if (loader.style.opacity > 0) {
            loader.style.opacity -= 0.4;
        } else {
            body.classList.remove('stop-scroll');
            loader.classList.add('remove');
            clearInterval(fadeEffect);
        }
    }, 100);
}
window.addEventListener("load", fadeOutEffect);


links.forEach(link =>
    link.addEventListener("click", function(e) {
        e.preventDefault();
    })
);


navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navSpanMiddle.classList.toggle("hide");
    navNavigationBar.classList.toggle("show");
});


navNavigationBarLi.forEach(li =>
    li.addEventListener("click", () => {
        const arr = Array.from(li.parentElement.children);
        arr.forEach(li => li.classList.remove("active"));
        li.classList.add("active");
    })
);


svgUp.addEventListener("click", () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
});

window.onscroll = function() {
    
    if (window.pageYOffset > headerSection.offsetHeight - 75) {
        nav.classList.add("active");
        logoImage.src = "data:image/jpeg;base64,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";
    } else {
        nav.classList.remove("active");
        logoImage.src = "data:image/jpeg;base64,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" ;
    }

    if (window.pageYOffset > 0) {
        headerText.style.opacity = -window.pageYOffset / 300 + 1;
    }
    if (pageTitle.text === "ROSA- Restaurant") {

        if (window.pageYOffset < headerSection.offsetHeight * 0.5) {
            dots.forEach(dot => dot.classList.remove("black"));
            dotTwo.classList.remove("active");
            dotOne.classList.add("active");
        } else if (
            window.pageYOffset > headerSection.offsetHeight * 0.5 &&
            window.pageYOffset < recipeSection.offsetTop * 0.72
        ) {
            dots.forEach(dot => dot.classList.add("black"));
        } else if (
            window.pageYOffset > recipeSection.offsetTop * 0.75 &&
            window.pageYOffset < menuSection.offsetTop * 0.81
        ) {
            dots.forEach(dot => dot.classList.remove("black"));
            dotOne.classList.remove("active");
            dotThree.classList.remove("active");
            dotTwo.classList.add("active");
        } else if (
            window.pageYOffset > menuSection.offsetTop * 0.81 &&
            window.pageYOffset < fixedImageSection.offsetTop * 0.86
        ) {
            dots.forEach(dot => dot.classList.add("black"));
            dotThree.classList.remove("active");
            dotTwo.classList.add("active");
        } else if (
            window.pageYOffset > fixedImageSection.offsetTop * 0.86 &&
            window.pageYOffset < footerSection.offsetTop * 0.72
        ) {
            dots.forEach(dot => dot.classList.remove("black"));
            dotTwo.classList.remove("active");
            dotThree.classList.add("active");
        } else if (
            window.pageYOffset > footerSection.offsetTop * 0.72 &&
            window.pageYOffset < footerSection.offsetTop * 0.901
        ) {
            dots.forEach(dot => dot.classList.add("black"));
        } else if (window.pageYOffset > footerSection.offsetTop * 0.901) {
            dots.forEach(dot => dot.classList.remove("black"));
        }
    }
};


if (pageTitle.text === "ROSA- Restaurant") {
 
    svgDown.addEventListener("click", () => {
        window.scroll({
            top: aboutSection.offsetTop - 30,
            behavior: "smooth"
        });
    });

    dots.forEach(dot =>
        dot.addEventListener("click", function() {
            window.scrollTo({
                top: document.querySelector(this.dataset.x).offsetTop - 100,
                behavior: "smooth"
            });
        })
    );


    menuImgs.forEach(img =>
        img.addEventListener("click", function() {
            const arr = Array.from(this.parentElement.parentElement.children);

            arr.forEach(div => div.classList.remove("active"));

            this.parentElement.classList.add("active");
            boxModel.classList.add("active");
            boxModelImage.src = this.src;
            boxModelImage.classList.add("active");
            body.classList.add("hide-scroll");
        })
    );

    function boxModelFun(e) {
    
        if (
            e.code === "Escape" ||
            (e.target.tagName === "DIV" && !e.target.classList.contains("arrow")) ||
            e.target.classList.contains("close")
        ) {
            boxModel.classList.remove("active");
            body.classList.remove("hide-scroll");
        }

        if (boxModel.classList.contains("active")) {
            if (
                e.code === "ArrowRight" ||
                e.code === "ArrowLeft" ||
                e.target.classList.contains("arrow-right") ||
                e.target.classList.contains("arrow-left")
            ) {
                const arr = Array.from(menuImageContainer.children);
                const active = arr.find(div => div.classList.contains("active"));

                // change box model image
                if (
                    e.target.classList.contains("arrow-right") ||
                    e.code === "ArrowRight"
                ) {
                    if (active.nextElementSibling === null) {
                        active.parentElement.firstElementChild.classList.add("active");
                        boxModelImage.src =
                            active.parentElement.firstElementChild.firstElementChild.src;
                    } else {
                        active.nextElementSibling.classList.add("active");
                        boxModelImage.src = active.nextElementSibling.firstElementChild.src;
                    }
                }

                else if (
                    e.target.classList.contains("arrow-left") ||
                    e.code === "ArrowLeft"
                ) {
                    if (active.previousElementSibling === null) {
                        active.parentElement.lastElementChild.classList.add("active");
                        boxModelImage.src =
                            active.parentElement.lastElementChild.lastElementChild.src;
                    } else {
                        active.previousElementSibling.classList.add("active");
                        boxModelImage.src =
                            active.previousElementSibling.firstElementChild.src;
                    }
                }
                active.classList.remove("active");
            }
        }
    }

    window.addEventListener("keydown", boxModelFun);
    window.addEventListener("click", boxModelFun);
    boxModelArrow.addEventListener("click", boxModelFun);
}