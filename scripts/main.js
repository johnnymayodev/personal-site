const trailer = document.getElementById("trailer");

const mouseVelocity = {
    x: 0,
    y: 0,
    prevX: 0,
    prevY: 0,
    update: function (x, y) {
        this.prevX = this.x;
        this.prevY = this.y;
        this.x = x;
        this.y = y;
    },
    getVelocity: function () {
        return Math.sqrt(Math.pow(this.x - this.prevX, 2) + Math.pow(this.y - this.prevY, 2));
    },
};


const animateTrailer = (e) => {
	const x = e.clientX - trailer.offsetWidth / 2,
		y = e.clientY - trailer.offsetHeight / 2;

	const keyframes = {
		transform: `translate(${x}px, ${y}px) scale(${mouseVelocity.getVelocity() / 20 + 1})`,
	};

	trailer.animate(keyframes, {
		duration: 800,
		fill: "forwards",
	});
};


window.onmousemove = (e) => {
    mouseVelocity.update(e.clientX, e.clientY);

	animateTrailer(e, mouseVelocity);
};
