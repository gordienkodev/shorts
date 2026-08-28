



/**
* Task 1: Generics and Key Type Safety
* Create a function `getProperty` that takes an object and a key, and returns the value of that key.
* Use generics to ensure the function is type-safe, such that it only accepts keys that exist on the object.
*/

function getProperty(obj: T, key: K) {
  return obj[key];
}