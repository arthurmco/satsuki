import BaseImage from "./base-image.ts";
import LocalImage from "./image.ts";

import * as React from "react";
import * as ReactDOM from "react-dom";
import ImageSquare from "./components/ImageSquare";

ReactDOM.render(
	<ImageSquare dataUri="null" imgName="react.png" imgType="PNG" imgWidth="640" imgHeight="480" />,
    document.getElementById("gallery")
);

console.log("Ahaa");
