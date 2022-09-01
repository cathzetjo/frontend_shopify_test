const collapsibleButton = document.querySelector('.collapsible__button');
const collapsibleContent = document.querySelector('.collapsible__content');
const textHide = document.querySelector('.collapsible__action--visible');
const textShow = document.querySelector('.collapsible__action--hidden');

const collapseProperty = [
    { opacity: "0" },
    { opacity: "1" },
];

const collapseEffect = {
    duration: 350,
    fill: "both",
    iterations: 1,
};

const collapse = collapsibleContent.animate(
    collapseProperty,
    collapseEffect,
);

document.addEventListener('DOMContentLoaded', () => {
    textShow.hidden = true;
    collapse.finish();
    collapsibleButton.style.cursor="pointer";
});

collapsibleButton.addEventListener("click", () => {
    collapse.reverse();
    const isHidden = textShow.hidden;
        textHide.hidden = isHidden;
        textShow.hidden = !isHidden;
});


