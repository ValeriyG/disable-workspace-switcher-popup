const WorkspaceSwitcherPopup = imports.ui.workspaceSwitcherPopup;
const Tweener = imports.ui.tweener;

let oldShow;

function init() {
    oldShow = WorkspaceSwitcherPopup.WorkspaceSwitcherPopup.prototype._show;
}

function enable() {
    WorkspaceSwitcherPopup.WorkspaceSwitcherPopup.prototype._show = function() {
        Tweener.addTween(this._container, { opacity: 255,
                                            time: 0.8,
                                            transition: "linear"
                                           });
        this.actor.show();
    }
}

function disable() {
    WorkspaceSwitcherPopup.WorkspaceSwitcherPopup.prototype._show = oldShow;
}

