/**
 * @complexity
 * T: O(n)
 * S: O(n)
 */
export const isBracketsBalanced = (str: string) => {
  const brackets = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ]);

  const stack: string[] = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i] as string;

    if (brackets.has(char)) {
      stack.push(char);
    } else if (brackets.get(stack[stack.length - 1] ?? '') !== char) {
      return false;
    } else {
      stack.pop();
    }
  }

  return stack.length === 0;
};
