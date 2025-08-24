import { Schema } from "../../data/resource";
import {env} from '$amplify/env/sayHello'

type handlerType = Schema["sayHello"]["functionHandler"];

export const handler: handlerType = async (event, context) => {
  const region = env.REGION;
  const tableName = env.TABLE_NAME;
  console.log("EVENT: \n" + JSON.stringify(event, null, 2));
  const {name} = event.arguments || {};
    return `Hello, ${name || "world "}! from ${region} and table ${tableName}`;
};