
let navState = {
    viewStack: [".app-icons"]
};

let btns = {
    openApp: $("#open-app"),
    goBack: $(".back"),
    openLink: $(".openlink")
};
let views = {
    loaderView: ".loader-view",
    profile: ".profile"
};
let iconicViews = [views.loaderView];
btns.openApp.on("click", ()=> {
    showLoader();
    wait(()=> {
        presentView(views.profile)
    },2000);
});
btns.goBack.on("click", ()=> {
    goBackView();
});
btns.openLink.on("click", function(){
    window.open($(this).attr("data-url"));
})
function presentView(view) {
    if(!iconicViews.includes(view)) {
        navState.viewStack.push(view);
    }
    $(".view").hide();
    $(".view"+view).show();
}
function wait(callback,time=2000) {
    setTimeout(callback,time);
}
function showLoader() {
    presentView(views.loaderView);
}
function hideLoader() {
    $(getView(views.loaderView)).hide();
}
function getView(view_id) {
    return $(".view"+view_id);
}
function goBackView() {
    presentView(navState.viewStack.slice(-2)[0]);
}
Object.defineProperty(Node.prototype, 'on', {
    value(type,callback) {
        this.addEventListener(type,callback);
    }
})