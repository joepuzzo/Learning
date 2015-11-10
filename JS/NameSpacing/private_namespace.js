
//BEFORE 
var ARMORY = { 
    weaponList: ["Sword","Mace","Gun"],
    armorList: ["Shield","Guantlets"],
    removeWeapon: function(){ 
    },
    replaceWeapon: function(){ 
    },
    removeArmor: function(){ 
    },
    replaceArmor: function(){
    },
    makeWeaponRequest: function(){ 
    },
    makeArmorRequest: function(){ 
    }
}

//AFTER
//HERE we make some of the parts of this namespace private to that namespace
var ARMORY = function(){ 
    // PRIVATE ----------------------------
    var weaponList = ["Sword","Mace","Gun"];
    var armorList = ["Shield","Guantlets"];
    var removeWeapon = function(){ 
    };
    var replaceWeapon = function(){ 
    };
    var removeArmor = function(){ 
    };
    var replaceArmor = function(){
    };

    // PUBLIC ----------------------------
    return { 
        makeWeaponRequest: function(){ 
        },
        makeArmorRequest: function(){ 
        }
    };
}();

// TODO Note, this beggs the question, can we do the same for objects with prototypes???? 
