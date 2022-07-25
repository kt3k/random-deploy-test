import { createRequire } from "https://deno.land/std@0.149.0/node/module.ts";
import { serve } from "https://deno.land/std@0.149.0/http/server.ts";
const require = createRequire(import.meta.url);
//const a = require("./a.js");
console.log(import.meta.url);
console.log(await Deno.readTextFile(new URL("./a.js", import.meta.url)));
serve(() => new Response("hello"));
