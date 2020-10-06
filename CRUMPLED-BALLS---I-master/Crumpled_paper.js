//To create a Crumpled Paper.
    class Crumpled_paper {

        //This is used to construct an object.
            constructor(x, y, radius) {

                //This is used to specify an object's properties.
                    var paper_options = {
                        restitution: 0.3,
                        friction: 4,
                        density: 6,
                        isStatic: false
                    }

                    this.body = Bodies.circle(x, y, radius, paper_options);
                    this.radius = radius;
                    this.image = loadImage("Crumpled Paper.png");

                //This adds the constructed object.
                    World.add(world, this.body);  
            }

        //This is used to display the constructed object.
            display() {

                //Variable for the constructed object's position.
                    var position = this.body.position;

                //Variable for constructed object's angle.
                    var angle = this.body.angle;

                //This is used for displaying an object.
                    push();
                    translate(position.x, position.y);
                    rotate(angle);
                    
                    //This makes the object be at its center.
                        imageMode(CENTER)
                        image(this.image, 0, 0, 50, 50);                    
                    pop();
            }
    }