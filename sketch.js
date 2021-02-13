const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var polygon;

function preload()
{
    polygon_image = loadImage("polygon.png");
}

function setup()
{
    var canvas = createCanvas(1000,600);

    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(505,500,300,15);
    ground2 = new Ground(800,400,200,15);

    block1 = new Box(400,470,30,40);
    block2 = new Box(430,470,30,40);
    block3 = new Box(460.3,470,30,40);
    block4 = new Box(490.5,470,30,40);
    block5 = new Box(520.8,470,30,40);
    block6 = new Box(550,470,30,40);
    block7 = new Box(580,470,30,40);
    block8 = new Box(610,470,30,40);

    block9 = new Box(430,431,30,40);
    block10 = new Box(460,431,30,40);
    block11 = new Box(490,431,30,40);
    block12 = new Box(520,431,30,40);
    block13 = new Box(550,431,30,40);
    block14 = new Box(580,431,30,40);

    block15 = new Box(460,400,30,40);
    block16 = new Box(490,400,30,40);
    block17 = new Box(520,400,30,40);
    block18 = new Box(550,400,30,40);

    block19 = new Box(490,367,30,40);
    block20 = new Box(520,367,30,40);

    
    block21 = new Box(740,373,30,40);
    block22 = new Box(770,373,30,40);
    block23 = new Box(800,373,30,40);
    block24 = new Box(830,373,30,40);
    block25 = new Box(860,373,30,40);

    block26 = new Box(770,343,30,40);
    block27 = new Box(800,343,30,40);
    block28 = new Box(830,343,30,40);

    block29 = new Box(800,300,30,40);

    this.polygon = Bodies.circle(50,400,20);
    World.add(world,this.polygon);

    slingShot = new Slingshot(this.polygon,{x:150,y:400});

}

function draw()
{
    background("teal");

    Engine.update(engine);

    ground1.display();
    ground2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();

    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();

    imageMode(CENTER);
    image(polygon_image,polygon.position.x,polygon.position.y,40,40);

    slingShot.display();

}

function mouseDragged()
{
    Matter.Body.setPosition(this.polygon,{x:mouseX, y:mouseY});
}

function mouseReleased()
{
    slingShot.fly();
}

function keyPressed()
{
    if(keyCode === 32)
    {
        slingShot.attach(this.polygon);
    }
}
