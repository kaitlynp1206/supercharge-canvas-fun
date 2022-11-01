let c = new Candy("#c", 500, 500);
let width = CANVAS_WIDTH;
let height = CANVAS_HEIGHT;
let points = [];
let maxParticles = 10;
let pointSize = 4;

c.createScreenBuffer("osc");
let osc = c.screenBuffers.osc;

window.onload = function () {
  let url =
    "https://github.githubassets.com/images/modules/logos_page/Octocat.png";

    // let url =
    // "https://myoctocat.com/assets/images/octocat-accessories.png";

  let mouse = new Vector(0, 0);

  let img = c.loadImage(url);
  img.setAttribute("crossOrigin", "");
  c.trypreload();
  c.preload = function () {
    animate();
  };

  c.noStroke();
  let count = 1;
  function animate() {
    c.clear("steelblue");

    mouse.setXY(mouseX, mouseY);

    osc.image(img, 25, 25, width - 100, height - 50);

    if (count > 0) getPixelCoords();
    count--;

    for (let i = 0; i < points.length; i++) {
      points[i].behaviour(mouse);
      points[i].update();
      points[i].render();
    }
    c.loop(animate);
  }
};
