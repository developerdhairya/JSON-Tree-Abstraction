const { v4: uuidv4 } = require('uuid');

const json = {
  root: {
    id: -1,
    fileName: "root",
    methods: { "GET": false, "POST": false, "PUT": false, "PATCH": false },
    children: [],
  },
};

const createNode = (parentId, fileName) => {
  return {
    id: uuidv4(),
    fileName,
    methods: { "GET": false, "POST": false, "PUT": false, "PATCH": false },
    children: [],
  };
};

const getNodeById = (node, id) => {
  if (node.id === id) {
    return node;
  }

  let foundNode = null;
  const keys = Object.keys(node.children);
  for (let i = 0; i < keys.length; i++) {
    const child = node.children[keys[i]];
    const result = getNodeById(child, id);
    if (result) {
      foundNode = result;
      break; // Stop iteration if the node is found
    }
  }

  return foundNode;
};

const addChildNode = (parentId, fileName) => {
  const newNode = createNode(parentId, fileName);
  getNodeById(json.root, parentId).children.push(newNode);
  return newNode.id;
};

const updateMethods = (nodeId, methods) => {
  const node = getNodeById(json.root, nodeId);
  Object.assign(node.methods, methods);
};

const deleteNode = (nodeId) => {
  const deletedIds = [];
  const traverseAndDelete = (node) => {
    deletedIds.push(node.id);
    const keys = Object.keys(node.children);
    for (let i = 0; i < keys.length; i++) {
      const child = node.children[keys[i]];
      traverseAndDelete(child);
    }
  };
  traverseAndDelete(getNodeById(json.root, nodeId));
  delete getNodeById(json.root, nodeId);
  return deletedIds;
};

const newChildNodeId = addChildNode(-1, "firstChild");
addChildNode(newChildNodeId, "first_child_child");
console.log(deleteNode(newChildNodeId));

// updateMethods("root.children[0]", { "GET": true, "PUT": true });
// const deletedIds = deleteNode(newChildNodeId);

// console.log(json);
// console.log("New Child Node ID:", newChildNodeId);
// console.log("Deleted IDs:", deletedIds);
