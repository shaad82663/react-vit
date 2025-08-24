import { Schema } from "../../data/resource";

type handlerType = Schema["sayHello"]["functionHandler"];

export const handler: handlerType = async (event, context) => {
  console.log("EVENT: \n" + JSON.stringify(event, null, 2));
  const {name} = event.arguments || {};
    return `Hello, ${name || "world"}!`;
};