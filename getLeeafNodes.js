var GetLeafNodes = (function () {
    var myleaves = [];
    var getLeafNodes = function(leafNodes, obj) {
        if (obj.values) {
            obj.values.forEach(function (child) {
                getLeafNodes(leafNodes, child)
            });
        } else {
            leafNodes.push(obj);
        }
        myleaves = leafNodes;
    }

    var findIds = function(json, name) {
        if (json.values) {
            if (json.key == name) {
                var leafNodes = [];
                getLeafNodes(leafNodes, json);
                //console.log("leafNodes = "+leafNodes.map(function(leafNode){ return leafNode.id; })); //Logs leaf node ids to the console
            } else {
                json.values.forEach(function (child) {
                    findIds(child, name);
                });
            }
        }
        //else console.log("other leaf "+JSON.stringify(json,null,1));
        //console.log("leafNodes end = "+leafNodes); //Logs leaf node ids to the console
    }

    return {
        getLeafNodes: getLeafNodes;
    }

})