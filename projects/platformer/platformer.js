$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * You won't be able to play the game while these lines are uncommented
     * Comment the lines out to remove the grid
     */

    // Loop to create vertical grid lines
    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, 0, 1, canvas.height);
    // }

    // Loop to create horizontal gride lines
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(0, i, canvas.width, 1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
  createPlatform(1000, 250, 50, 20); // short but wide platform located 1000 pixels from the left of the screen and 100 pixels from the top of the screen
  createPlatform(1000, 500, 200, 200); // short but wide platform located 1000 pixels from the left of the screen and 500 pixels from the top of the screen
  createPlatform(100, 400, 500, 100); // short but wide platform located 100 pixels from the left of the screen and 400 pixels from the top of the screen
  createPlatform(750, 600, 100, 50); // short but wide platform located 750 pixels from the left of the screen and 600 pixels from the top of the screen
  createPlatform(200, 700, 400, 70); // short but wide platform located 200 pixels from the left of the screen and 700 pixels from the top of the screen
  createPlatform(750, 450, 100, 50); // short but wide platform located 150 pixels from the left of the screen and 50 pixels from the top of the screen
  createPlatform(1000, 450, 200, 200); // short but wide platform located 1000 pixels from the left of the screen and 100 pixels from the top of the screen
  createPlatform(950, 525, 50, 20); // short but wide platform located 1000 pixels from the left of the screen and 100 pixels from the top of the screen
  createPlatform(750, 300, 100, 50); // short but wide platform located 1000 pixels from the left of the screen and 100 pixels from the top of the screen
  createPlatform(550, 450, 100, 50); // short but wide platform located 150 pixels from the left of the screen and 50 pixels from the top of the screen
  // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
  createCollectable("diamond", 1000, 190, 1, 1);
  createCollectable("database", 150, 300, 1, 1);
  createCollectable("kennedi", 200, 600, 1, 1);
  createCollectable("grace", 600, 400, 1, 1);
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
  createCannon("top", 760, 1000);
  createCannon("right", 350, 2000);



    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
