
var ENV_INSTANCE = null; 
function MyEnviroment(){
    var me = this;
    if(!ENV_INSTANCE){
        ENV_INSTANCE = me;
    }


    me.tool = {
        width:2,
        number:70,
        color: [18,171,135],
        spring : 2
    };

    me.current = null;

    me.map = {  };

    me.addLayer = function(layer){
        me.map[layer.id] = layer;
        return layer;
    }

    me.setCurrent = function(id){  
        me.current = id;
    }
    
    me.removeLayer = function(id){
        layer = null;
        if(typeof id == "string"){
            layer = me.map[id];
            delete me.map[id];
        } else if(id.id){            
            layer = me.map[id.id];
            delete me.map[id.id];
        }

        return layer;
    }

    me.findLayer = function(id){
        return me.map[id];
    }

    me.getLayers = function(id){
        return Object.values(me.map);
    }

    me.update = function(){
        for(var i in me.map){

            var layer = me.map[i];
            layer.line.update();
            
        }
    }

    me.mouseRadius = function(x,y,r){
        // for(var i in me.map){
        //     var line = me.map[i].line;
        //     if(me.map[i] != me.current){
        //         line.movePointsForRadius(x,y,r);
        //     }
        // }
    }

    me.draw = function(){
        for(var i in me.map){
            var layer = me.map[i];
            layer.line.draw();            
        }
    }

    return ENV_INSTANCE;
    
}