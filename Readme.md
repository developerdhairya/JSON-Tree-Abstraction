# React State-Compatible JSON Tree Abstraction

This repository provides a React state-compatible JSON tree abstraction, allowing you to manage hierarchical data structures in your React applications. The implementation includes various functions for creating, accessing, updating, and deleting nodes within the tree.

## Functions

### `createNode(parentId, fileName)`

This function creates a new node with the provided `parentId` and `fileName`.

- `parentId` (number): The ID of the parent node.
- `fileName` (string): The name of the file associated with the new node.

Returns the newly created node object.

### `getNodeById(node, id)`

This function retrieves a node from the tree based on its `id` value.

- `node` (object): The starting node to begin the search from.
- `id` (number): The ID of the node to find.

Returns the node object with the matching `id`, or `null` if no match is found.

### `addChildNode(parentId, fileName)`

This function adds a new child node to the node with the provided `parentId` and `fileName`.

- `parentId` (number): The ID of the parent node.
- `fileName` (string): The name of the file associated with the new child node.

Returns the ID of the newly created child node.

### `updateMethods(nodeId, methods)`

This function updates the HTTP methods of a node specified by `nodeId` with the provided `methods`.

- `nodeId` (number): The ID of the node to update.
- `methods` (object): An object representing the updated HTTP methods and their status (true/false).

### `deleteNode(nodeId)`

This function deletes a node and all its child nodes from the tree based on the provided `nodeId`.

- `nodeId` (number): The ID of the node to delete.

Returns an array of the IDs of the deleted nodes.

## Dependencies

The following dependency is required:

- `uuid`: A library for generating UUIDs (Universally Unique Identifiers).

Please ensure that this dependency is installed before using the code.

## Usage Example

```javascript
const newChildNodeId = addChildNode(-1, "firstChild");
addChildNode(newChildNodeId, "first_child_child");
console.log(deleteNode(newChildNodeId));
