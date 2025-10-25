/**
 * Test helper utility
 * Version: 2.0 - Moved and updated!
 * Location: /app/src/lib/testHelper.ts
 */

export const testFunction = (message: string) => {
  console.log(`Test: ${message}`);
  return message.toUpperCase();
};

export const calculateTestValue = (a: number, b: number) => {
  return a + b;
};
