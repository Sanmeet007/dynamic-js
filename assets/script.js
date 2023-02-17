const buttonClickListener = () => {
    app.updateState(obj => {
        return { times: ++obj.times }
    });
}

const app = new DynamicJS("#updatable", {
    times: 0,
}, () => {
    // On Mount Adding Listeners
    document.querySelector("button").addEventListener("click", buttonClickListener);
}, () => {
    // On Unmount clean up  
    document.querySelector("button").removeEventListener("click", buttonClickListener);
});
