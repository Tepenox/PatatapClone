var circles = [];
var deleteText; //to set opacity of text to 0 once the user hit a key

var text = new PointText();
text.fontFamily = 'Muli';
text.fontSize = 30;
text.fontWeight = 700;
text.justification = 'center';
text.fillColor = 'white';
text.content = 'Press Letter Keys To start';
text.position = new Point((view.size.width) / 2, view.size.height / 2);
text.opacity = 1;


var keyData = {

    q: {
        sound: new Howl({
            src: ['sounds/bubbles.mp3']
        }),
        color: '#1abc9c'
    },
    w: {
        sound: new Howl({
            src: ['sounds/clay.mp3']
        }),
        color: '#2ecc71'
    },
    e: {
        sound: new Howl({
            src: ['sounds/confetti.mp3']
        }),
        color: '#3498db'
    },
    r: {
        sound: new Howl({
            src: ['sounds/corona.mp3']
        }),
        color: '#9b59b6'
    },
    t: {
        sound: new Howl({
            src: ['sounds/dotted-spiral.mp3']
        }),
        color: '#34495e'
    },
    y: {
        sound: new Howl({
            src: ['sounds/flash-1.mp3']
        }),
        color: '#16a085'
    },
    u: {
        sound: new Howl({
            src: ['sounds/flash-2.mp3']
        }),
        color: '#27ae60'
    },
    i: {
        sound: new Howl({
            src: ['sounds/flash-3.mp3']
        }),
        color: '#2980b9'
    },
    o: {
        sound: new Howl({
            src: ['sounds/glimmer.mp3']
        }),
        color: '#8e44ad'
    },
    p: {
        sound: new Howl({
            src: ['sounds/moon.mp3']
        }),
        color: '#2c3e50'
    },
    a: {
        sound: new Howl({
            src: ['sounds/pinwheel.mp3']
        }),
        color: '#f1c40f'
    },
    s: {
        sound: new Howl({
            src: ['sounds/piston-1.mp3']
        }),
        color: '#e67e22'
    },
    d: {
        sound: new Howl({
            src: ['sounds/piston-2.mp3']
        }),
        color: '#e74c3c'
    },
    f: {
        sound: new Howl({
            src: ['sounds/prism-1.mp3']
        }),
        color: '#95a5a6'
    },
    g: {
        sound: new Howl({
            src: ['sounds/prism-2.mp3']
        }),
        color: '#f39c12'
    },
    h: {
        sound: new Howl({
            src: ['sounds/prism-3.mp3']
        }),
        color: '#d35400'
    },
    j: {
        sound: new Howl({
            src: ['sounds/splits.mp3']
        }),
        color: '#1abc9c'
    },
    k: {
        sound: new Howl({
            src: ['sounds/squiggle.mp3']
        }),
        color: '#2ecc71'
    },
    l: {
        sound: new Howl({
            src: ['sounds/strike.mp3']
        }),
        color: '#3498db'
    },
    z: {
        sound: new Howl({
            src: ['sounds/suspension.mp3']
        }),
        color: '#9b59b6'
    },
    x: {
        sound: new Howl({
            src: ['sounds/timer.mp3']
        }),
        color: '#34495e'
    },
    c: {
        sound: new Howl({
            src: ['sounds/ufo.mp3']
        }),
        color: '#16a085'
    },
    v: {
        sound: new Howl({
            src: ['sounds/veil.mp3']
        }),
        color: '#27ae60'
    },
    b: {
        sound: new Howl({
            src: ['sounds/wipe.mp3']
        }),
        color: '#2980b9'
    },
    n: {
        sound: new Howl({
            src: ['sounds/zig-zag.mp3']
        }),
        color: '#8e44ad'
    },
    m: {
        sound: new Howl({
            src: ['sounds/moon.mp3']
        }),
        color: '#2c3e50'
    }
}

function onKeyDown(event) {
    text.position = new Point((view.size.width) / 2, view.size.height / 2);
    deleteText = true;
    var keyPressed = keyData[event.key];


    if (keyPressed) {
        deleteText = true;
        var color = keyPressed.color;
        keyPressed.sound.play();
        var randomPoint = new Point(view.size.width, view.size.height) * Point.random();
        var newCircle = new Path.Circle(randomPoint, 200);
        newCircle.fillColor = color;
        circles.push(newCircle);
    } else {
        deleteText = false; // if the user doesn t click a letter key 
        text.opacity = 1;
    }
}

function onFrame() {
    if (deleteText) {
        text.opacity = 0;
    } else if (text.opacity > 0) {
        text.opacity -= 0.005;
        if (text.opacity < 0) {  //just a hack of an issue
            text.opacity = 0;
        }
    }


    for (var i = 0; i < circles.length; i++) {
        circles[i].scale(0.9);
        circles[i].fillColor.hue += 1;
        if (circles[i].area < 1) {
            circles[i].remove();
            circles.splice(i, 1);
            i--;
        }
        // console.log(circles);
    }


}
