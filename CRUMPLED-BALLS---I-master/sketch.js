
  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;

  //Variables for Matter Elements.
    var world, engine;

  //Variable for Crumpled Paper.
    var crumpledPaper;

  //Variable for ground.
    var ground;

  //To create an office background.
    var background_image;

  //Variable to craete a dustbin.
    var dustbinEdge_1, dustbinEdge_2;

  //Variable for dustbin image.
    var dustbin_image;

//This function creates Canvas as well as Matter Elements.
  function setup() {

    //Canvas
      var canvas = createCanvas(1200,600);

    //Engine on which the Elements of Matter run
      engine = Engine.create();

    //World in which bodies of Matter are placed.
      world = engine.world;

    //To create a dustbin in which crumpled paper will go.
      dustbinEdge_1 = new Dustbin(800, 485, 10, 130);
      dustbinEdge_2 = new Dustbin(950, 485, 10, 130);

    //To create a dustbin image.
      dustbin_image = new Dustbin_image(875, 545, 150, 10);

    //To load picture of background image.
      background_image = loadImage("bg.png");
      background_image.width = 1000;

    //Crumpled paper which will go in the dustbin.
      crumpledPaper = new Crumpled_paper(250,300,30);

      var render = Matter.Render.create({ 
        element: document.body,
        engine: engine,
        options: { 
            width: 1200, 
            height: 600, 
            showAngleIndicator: true,
            showVelocity: true,
            wireframes: true
         } 
        }); 
        Matter.Render.run(render);  
    //ground which will be the base. 
      ground = new Ground(600, 600, 1200, 10);
  }


//This functions displays the Matter elements.
  function draw() {

    //Background color.
      background(background_image);
      background_image.width = 1200;
      background_image.height = 600;
    //This updates the Matter Engine.
      Engine.update(engine);

    //To display Crumpled paper.
      crumpledPaper.display();

    //To display ground.
      ground.display();

    //To display dustbin's edges.
      dustbinEdge_1.display();
      dustbinEdge_2.display();

    //To display dustbin image.
      dustbin_image.display();
  }


//To apply force on the Crumpled paper body.
  function keyPressed() {

    //Key function.
      if(keyCode === UP_ARROW) {
        Matter.Body.applyForce(crumpledPaper.body, crumpledPaper.body.position, {x: random(500, 1000), y: random(-900, -1300)});
      }
  }

