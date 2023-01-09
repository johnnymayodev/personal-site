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

    const index = pickIndex(0, combinations.length - 1, prev);
    prev = index;

    const combination = combinations[index];
    console.log(combination);

	wrapper.dataset.configuration = combination.configuration.toString();
	wrapper.dataset.roundness = combination.roundness.toString();
}, 3000);

function pickIndex(min, max, prev=1) {
    const index = Math.floor(Math.random() * (max - min + 1)) + min;
    if (index === prev) {
        return pickIndex(min, max, prev);
    }
    return index;
}