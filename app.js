var treeTracker = {
    currentId: 1,
    numberOfNodes: 0
};

var treeNodes = [];

var addNode = function(value) {
    var fatherPosition = Math.floor(treeTracker.currentId / 2) - 1;
    var father = treeNodes[fatherPosition] ? treeNodes[fatherPosition] : null;

    var newNode = {
        id: treeTracker.currentId++,
        value: value,
        previousNode: null,
        leftNode: null,
        rightNode: null,
        freeNodes: 2
    };

    if(father !== null) { // no need to check if freeNodes === 0 since we are using a tracker and cannot remove nodes
        newNode.previousNode = father.id;

        if(father.freeNodes === 2) {
            father.leftNode = newNode.id;
        } else if(father.freeNodes === 1) {
            father.rightNode = newNode.id;
        }

        father.freeNodes--;
    }
        treeNodes.push(newNode);
        // this chain of ifs is ugly as hell
};

addNode(5);
addNode(3);
addNode(2);

console.log(treeNodes);