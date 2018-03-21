import {BaseImage, LocalImage} from "./image.ts";

let bi = <BaseImage>{};

bi.source = "test.png";
bi.format = "png";

console.log(`Hello, ${bi.source}`);
