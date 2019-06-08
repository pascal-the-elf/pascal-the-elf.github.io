// GameFile
Game = {
    "init": function(objectSet=this.default.object, dataSet=this.default.data) {
        this.data = dataSet;
        this.object = objectSet;
    },
    "do": function(func) {
        this.func[func]();
    },
    "func": {
        
    },
    "data": {},
    "object": {},
    "default": {
        "data": {},
        "object": {}
    }
};

alert = function(a="", b="") {
    if(a=="" && b=="") return;
    if(b=="") {
        Swal.fire(a);
    } else {
        Swal.fire(a, b);
    }
}
