

function buildThresholdList() {
    let thresholds = [];
    let numSteps = 20;

    thresholds.push(0);

    for (let i = 1.0; i <= numSteps; i++) {
        let ratio = i / numSteps;
        thresholds.push(ratio);
    }

    return thresholds;
}

let observer;

let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList()
};

function handleIntersect(entries, observer) {
    entries.forEach(element => {
        element.target.style.opacity = element.intersectionRatio;
    });
}

observer = new IntersectionObserver(handleIntersect, options);

let fade_items = document.querySelectorAll(".fade");

console.log(fade_items);

fade_items.forEach(element => {
    observer.observe(element);
});

