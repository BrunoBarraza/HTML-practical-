// The Unknown Type.
let userInput: unknown; // its more restrictive than any.
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('An Error Ocurred!', 500);
