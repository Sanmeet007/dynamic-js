const app = new Template("#updatable", {
    QUOTE: "Coolest person in world ? ya that's me  :-)",
    NAME: "sanmeet",
    GAME: "football",
    HEADING: "About Me",
    AGE: 19,
    HOBBIES: "Coding and doing cool stuff",
});

setTimeout(function () {
    app.updateState({
        GAME: "chess",
        HEADING: "Really about me ! ",
    });
}, 2000);