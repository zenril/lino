function MyWind() {
    var me = this;
    me.strength = 3;
    me.angle = 90;

    me.force = createVector(2,3,0);

    var params = getURLParams();
    var amount = params.smoothing || 0.1;
    amount = + amount;


    me.Deg2Rad = function (angle) {
        return angle * (180 / Math.PI);
    }

    me.update = function(){
        // me.angle += 3;//random( 0, 0.1);
        // me.angle = (me.angle % 360) + 1;
        
       // me.strength = random( max(1 ,me.strength - 1), min(550, 1 + me.strength));

        

       // me.angle = random( max(0,me.angle - amount), min(360, amount + me.angle));

        var a =  me.angle;

        var angle = me.Deg2Rad(a);
        var x = Math.cos(angle);
        var y = Math.sin(angle);
        me.force = createVector(x,y,0);
        me.force.mult(me.strength);
    }
}