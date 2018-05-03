const WorkspaceSwitcherPopup = imports.ui.workspaceSwitcherPopup;

let oldShow;

function init() {
    oldShow = WorkspaceSwitcherPopup.WorkspaceSwitcherPopup.prototype._show;
}

function enable() {
    Tweener.addTween(this._container, { opacity: 255,
                                            time: 0.01,
                                            transition: 'easeOutQuad'
                                           });
        this.actor.show();
}

function disable() {
    WorkspaceSwitcherPopup.WorkspaceSwitcherPopup.prototype._show = oldShow;
}

// Backwards compatability with 3.0.2
function main() {
    enable();
}
