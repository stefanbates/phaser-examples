
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.image('atari', 'assets/sprites/atari130xe.png');
    game.load.image('mushroom', 'assets/sprites/mushroom2.png');

}

var sprite1;
var sprite2;

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.stage.backgroundColor = '#2d2d2d';

    //  This will check Sprite vs. Sprite collision

    sprite1 = game.add.sprite(50, 200, 'atari');
    sprite2 = game.add.sprite(700, 220, 'mushroom');

    game.physics.enable( [ sprite1, sprite2 ], Phaser.Physics.ARCADE);

    sprite1.name = 'atari';
    sprite1.body.velocity.x = 100;
    
    sprite2.name = 'mushroom';
    sprite2.body.velocity.x = -100;

}

function update() {

    // object1, object2, collideCallback, processCallback, callbackContext
    game.physics.arcade.collide(sprite1, sprite2, collisionHandler, null, this);

}

function collisionHandler (obj1, obj2) {

    //  The two sprites are colliding
    game.stage.backgroundColor = '#992d2d';

}

function render() {

    game.debug.body(sprite1);
    game.debug.body(sprite2);

}