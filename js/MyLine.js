var myEnv = new MyEnviroment();

function MyLine(wind, length, sv) {
    var me = this;
    me.segmentLength = 440;
    me.speed = 2;
    me.points = [];
    me.wind = wind;

    for(var i = 0; i < length; i++){
        me.points[i] = createVector(sv.x,sv.y,sv.z);
    }
    

this.moveCloser = function(v1, v2, mspeed){
    // Calculate direction towards player
    var toV1X = v2.x - v1.x;
    var toV1Y = v2.y - v1.y;
    var toV1Z = v2.z - v1.z;

    // Normalize
    var toV1Length = v1.dist(v2);

    var speed = toV1Length / 2;

    toV1X = toV1X / toV1Length;
    toV1Y = toV1Y / toV1Length;
    toV1Z = toV1Z / toV1Length;

    // Move towards the player
    v2.x -= (toV1X * speed) - me.wind.force.x;
    v2.y -= (toV1Y * speed) - me.wind.force.y;
    v2.z -= toV1Z * speed;

}


this.moveAway = function(v1, v2, mspeed){
    // Calculate direction towards player
    var toV1X = v2.x - v1.x;
    var toV1Y = v2.y - v1.y;
    var toV1Z = v2.z - v1.z;

    // Normalize
    var toV1Length = v1.dist(v2);

    var speed = toV1Length / 40;

    toV1X = toV1X / toV1Length;
    toV1Y = toV1Y / toV1Length;
    toV1Z = toV1Z / toV1Length;

    // Move towards the player
    v2.x += (toV1X * speed) ///- me.wind.force.x;
    v2.y += (toV1Y * speed) ///- me.wind.force.y;
    v2.z += toV1Z ;

}

    this.update = function(){

        var last = null; 
        var last2 = null; 

        for(var i = 0; i < me.points.length; i++){
            var current = me.points[i];
            if(last != null){
                var distance = current.dist(last);
                if( distance > 0.1){
                    me.moveCloser(last,current,me.speed);
                }
            }
            last = current;
        }
    }

    me.movePointsForRadius = function(x,y,r){
        for(var i = 0; i < me.points.length; i++){
            var vector = me.points[i];
            if(vector.x > x - r && vector.x < x + r && vector.y > y - r && vector.y < y + r){
                me.moveAway(createVector(x,y,1), vector);
            }
        }
    }

    this.draw = function(){
        noFill();
        strokeCap(ROUND);
        beginShape();
        strokeWeight(myEnv.tool.width);
        
      
        stroke.apply(null, myEnv.tool.color);
        for(var i = 0; i < me.points.length; i++){
            curveVertex(me.points[i].x, me.points[i].y);
        }
        endShape();
    }
}