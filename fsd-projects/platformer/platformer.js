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

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(50, 200, 50, 5);
createPlatform(200, 200, 60, 6);
createPlatform(400, 200, 70, 7);
createPlatform(600, 200, 80, 8);
createPlatform(800, 200, 90, 9);
createPlatform(1000, 200, 100, 10);
createPlatform(1200, 100, 90, 9);
createPlatform(1100, 200, 90, 9);
createPlatform(1300, 500, 60 6);
createPlatform(1100, 500, 70, 7);
createPlatform(900, 500, 50, 5);
createPlatform(700, 500, 60, 6);
createPlatform(500, 500, 60, 6);
createPlatform(300, 500, 60, 6);
createPlatform(100, 500, 60, 6);


    // TODO 3 - Create Collectables
createCollectable("steve", 1350, 50);
createCollectable("diamond", 200, 170);
createCollectable("steve", 100, 500);


    
    // TODO 4 - Create Cannons
createCannon("left", 300, 650);

createCannon("top", 500, 2000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
