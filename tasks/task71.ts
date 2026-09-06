



/**
 * Task 6: Address the TypeScript error in the following generic function.
 */
function greet<T extends { name: string }>(entity: T): string {
  return `Hello, ${entity.name}!`;
}