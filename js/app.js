// GameFile
Game = {
    "init": function(objectSet=this.default.object, dataSet=this.default.data, customInit=function(){}) {
        this.data = dataSet;
        this.object = objectSet;
        customInit();
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
if(Swal) {
    alert = function(a="", b="") {
        if(a=="" && b=="") return;
        if(b=="") {
            Swal.fire(a);
        } else {
            Swal.fire(a, b);
        }
    };
}
