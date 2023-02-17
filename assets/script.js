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


document.querySelector("#minus").addEventListener("click", () => {
    app.updateState((obj) => {
        if (obj.times === 0) return obj;
        return { times: obj.times - 1 }
    })
})