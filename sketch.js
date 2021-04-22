let x = [];
// x = x + speed;

function setup() {
    createCanvas(1000, 1000);
    noStroke();
    fill(255, 200);
    for (let i = 0; i < 3000; i++) {
        x[i] = random(-1000, 200);
    }
    
}

function draw() {
    background(0);
    if(mouseIsPressed){
        random(fill(0, 0, 250));
    }
    // click = mouseIsPressed
    // if (cilck) {
    //     fill(20, 20, 200);
    //     rect(x[i], y, 0.52, 5.76);
    // } else {
    //     fill(random();)
    //     rect(x[i], y, 0.52, 5.76);}

    // x = x + speed;
    // if(x > width | x < 1000){
    //     speed = speed * 2
    // }
    for(let i = 0; i < x. length; i++){
        x[i] += random();
        let y = i ;
        rect(x[i], y, 0.52, 5.76);
    }

}