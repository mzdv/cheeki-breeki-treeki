var treeTracker = {
    nextId: 1,
    numberOfNodes: 0
};

var nodes = [];

var addNode = function(value) {
    var newNode = {
        id: treeTracker.id,
        value: value,
        previousNode: nodes[treeTracker.nextId - 1] ? nodes[treeTracker.nextId - 1].id : null,
        leftNode: null,
        rightNode: null,
        freeNodes: 2
    };
};