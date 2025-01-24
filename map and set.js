// map

// Create a new Map
const map = new Map();

// Add key-value pairs
map.set('name', 'Alice');
map.set(42, 'The answer');
map.set({ id: 1 }, 'An object key');

// Access values
console.log(map.get('name')); // Output: Alice
console.log(map.get(42));     // Output: The answer

// Check if a key exists
console.log(map.has('name')); // Output: true

// Iterate over the Map
for (const [key, value] of map) {
console.log(key, value);
}

// set

// Create a new Set
const set = new Set();

// Add values
set.add(1);
set.add(2);
set.add(2); // Duplicate, won't be added
set.add('hello');
set.add({ key: 'value' });

// Check if a value exists
console.log(set.has(2)); // Output: true

// Get the size of the Set
console.log(set.size); // Output: 4

// Iterate over the Set
for (const value of set) {
console.log(value);
}

