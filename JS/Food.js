class Food {
    constructor(x, y, width, height, foodStock) {
        var options = {
            isStatic: true
        }
        this.width = width;
        this.height = height;
        this.image = loadImage("Images/Milk.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    } 
    display() {
        var foodPos = this.body.position;

        push();
        translate(foodPos.x, foodPos.y);
        image(this.image, 0, 0, this.width, this.height);
        imageMode(CENTER);
        pop();
    }
    getFoodStock() {

    }
    updateFoodStoke() {

    }
    deductFood() {
        
    }
}