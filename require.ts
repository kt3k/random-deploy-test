// import { createRequire } from "https://deno.land/std@0.149.0/node/module.ts";
import { createRequire } from "https://raw.githubusercontent.com/kt3k/deno_std/require-debug/node/module.ts";
import { serve } from "https://deno.land/std@0.149.0/http/server.ts";
const require = createRequire(import.meta.url);
//const a = require("./a.js");
console.log(import.meta.url);
console.log(new URL("./a.js", import.meta.url).href);
console.log(await Deno.readTextFile(new URL("./a.js", import.meta.url)));
require("./a");
serve(() => new Response("hello"));
