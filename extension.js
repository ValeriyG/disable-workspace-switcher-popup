const WorkspaceSwitcherPopup = imports.ui.workspaceSwitcherPopup;

let oldShow;

function init() {
    oldShow = WorkspaceSwitcherPopup.WorkspaceSwitcherPopup.prototype._show;
}

function enable() {
    WorkspaceSwitcherPopup.WorkspaceSwitcherPopup.prototype._show = function() {
        Tweener.addTween(this._container, { opacity: 255,
                                            time: 0,
                                            delay: 0
                                           });
        this.actor.show();
    }
}

function disable() {
    WorkspaceSwitcherPopup.WorkspaceSwitcherPopup.prototype._show = oldShow;
}

// Backwards compatability with 3.0.2
function main() {
    enable();
}
