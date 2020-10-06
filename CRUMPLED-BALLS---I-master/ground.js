//To create a Ground.
    class Ground {

        //This is used to construct an object.
            constructor(x, y, width, height) {

                //This is used to specify an object's properties.
                    var ground_options = {
                        isStatic: true,
                        visible: false
                    }

                    this.body = Bodies.rectangle(x, y, width, height, ground_options);
                    this.width = width;
                    this.height = height;
                
                //This adds the constructed object.
                    World.add(world, this.body);  
            }

         //This is used to display the constructed object.
            display() {

                //Variable for the constructed object's position.
                    var position = this.body.position

                 //This is used for displaying an object.
                    push();
                    translate(position.x, position.y);                                
                    pop();
            }
    }
    