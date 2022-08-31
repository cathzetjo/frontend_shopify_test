const collapsibleButton = document.querySelector('.collapsible__button');
const collapsibleContent = document.querySelector('.collapsible__content');
const collapsibleActionVisible = document.querySelector('.collapsible__action--visible');
const collapsibleActionHidden = document.querySelector('.collapsible__action--hidden');

document.addEventListener('DOMContentLoaded', () => {
    collapsibleActionHidden.hidden = true;
});

collapsibleButton.addEventListener("click", () => {
    switch (collapsibleActionVisible.hidden) {
        case true:
            collapsibleContent.hidden = false;
            collapsibleActionVisible.hidden = false;
            collapsibleActionHidden.hidden = true;
            break;
        case false:
            collapsibleContent.hidden = true;
            collapsibleActionVisible.hidden = true;
            collapsibleActionHidden.hidden = false;
            break;
    }
});


