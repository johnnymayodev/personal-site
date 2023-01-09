const wrapper = document.getElementById("wrapper");

const combinations = [
	{ configuration: 1, roundness: 1 },
	{ configuration: 1, roundness: 2 },
	{ configuration: 1, roundness: 4 },
	{ configuration: 2, roundness: 2 },
	{ configuration: 2, roundness: 3 },
	{ configuration: 3, roundness: 3 },
];

let prev = 0;

setInterval(() => {

    // const index = pickIndex(prev);
    // prev = index;

    let index = prev + 1;
    const combination = combinations[index];
    prev = index;

	wrapper.dataset.configuration = combination.configuration.toString();
	wrapper.dataset.roundness = combination.roundness.toString();
}, 2000);

function pickIndex(prev=0, min=0, max=combinations.length-1) {
    const index = Math.floor(Math.random() * (max - min + 1)) + min;
    if (index === prev) {
        return pickIndex(min, max, prev);
    } else if (combinations[index]['configuration'] === combinations[prev]['configuration']) {
        return pickIndex(min, max, prev);
    } else if (combinations[index]['roundness'] === combinations[prev]['roundness']) {
        return pickIndex(min, max, prev);
    }
    return index;
}