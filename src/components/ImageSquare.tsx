/* React image component */

import * as React from "react";


interface ImageProps {
    dataUri: string;
    imgWidth: string;
    imgHeight: string;
    imgName: string;
    imgType: string
}

class ImageSquare extends React.Component<ImageProps, {}> {
    render() {
	return <div className="gallery-item">
	    <img id="gallery-image" alt="" src="{this.props.dataUri}"/>
	    <div id="gallery-details">
		<p>{this.props.imgName}, {this.props.imgType} file</p>
		<p>{this.props.imgWidth}&times;{this.props.imgHeight} pixels</p>
	    </div>
	</div>;
    }    
}

export default ImageSquare;
