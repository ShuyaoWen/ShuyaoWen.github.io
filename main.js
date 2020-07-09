

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
        // get viewport height
        let viewportHeight = window.innerHeight
        // get height of observed element
        let elementHeight = element.target.offsetHeight;
        // if observed element is smaller than viewport, set opacity to intersection ratio
        // else set opacity = intersection ratio * element height / viewport height 
        if(viewportHeight >= elementHeight){
            element.target.style.opacity = element.intersectionRatio;
        }
        else {
            element.target.style.opacity = element.intersectionRatio * elementHeight / viewportHeight;
        }
        
    });
}

observer = new IntersectionObserver(handleIntersect, options);

let fade_items = document.querySelectorAll(".fade");

fade_items.forEach(element => {
    observer.observe(element);
});

