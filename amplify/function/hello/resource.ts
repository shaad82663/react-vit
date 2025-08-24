import { defineFunction } from "@aws-amplify/backend";
const REGION = "us-east-1";
const TABLE_NAME = "MyTable";

export const sayHello = defineFunction({
  name: "sayHello",
  entry: "handler.ts",
  bundling: {
    minify: false,
  },
  environment: { REGION, TABLE_NAME },
});
