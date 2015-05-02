var Tree = function(nodes) {
    for(i = 0; i < nodes.length; i++) {
        this.addNode(nodes[i]);
    }
};

Tree.prototype.treeTracker = {
    currentId: 1,
    numberOfNodes: 0
};

Tree.prototype.treeNodes = [];

Tree.prototype.addNode = function(value) {
    var fatherPosition = Math.floor(this.treeTracker.currentId / 2) - 1;
    var father = this.treeNodes[fatherPosition] ? this.treeNodes[fatherPosition] : null;

    var newNode = {
        id: this.treeTracker.currentId++,
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
        this.treeNodes.push(newNode);
        this.treeTracker.numberOfNodes++;
        // this chain of ifs is ugly as hell
};

Tree.prototype.prefixTraverseTree = function(startingNodeId) {
    if(typeof this.treeNodes[startingNodeId-1] !== 'undefined') {
        console.log(this.treeNodes[startingNodeId-1].value);
        this.prefixTraverseTree(this.treeNodes[startingNodeId-1].leftNode);
        this.prefixTraverseTree(this.treeNodes[startingNodeId-1].rightNode);
    }
};

Tree.prototype.postfixTraverseTree = function(startingNodeId) {
    if(typeof this.treeNodes[startingNodeId-1] !== 'undefined') {
        this.postfixTraverseTree(this.treeNodes[startingNodeId-1].leftNode);
        this.postfixTraverseTree(this.treeNodes[startingNodeId-1].rightNode);
        console.log(this.treeNodes[startingNodeId-1].value);
    }
};

Tree.prototype.infixTraverseTree = function(startingNodeId) {
    if(typeof this.treeNodes[startingNodeId-1] !== 'undefined') {
        this.infixTraverseTree(this.treeNodes[startingNodeId-1].leftNode);
        console.log(this.treeNodes[startingNodeId-1].value);
        this.infixTraverseTree(this.treeNodes[startingNodeId-1].rightNode);
    }
};

var t = new Tree([3, 4, 5]);
t.addNode(6);

console.log(t.treeNodes);
t.prefixTraverseTree(1);
console.log('\n');
t.infixTraverseTree(1);
console.log('\n');
t.postfixTraverseTree(1);