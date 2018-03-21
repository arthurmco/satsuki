/**
 * Default image class
 */

/*
 * Symbolizes an image.
 * Its attributes resemble - and are, basically - the img tag, with the
 * addition of the image type and size.
 */
interface BaseImage {
    source: Buffer; // The binary source or the image
    format: string; // The image format, like 'PNG' or 'JPG'
    width: number;
    height: number;
};

/*
 * An image that has a local source
 *
 * Effectively, the 'source' is a buffer, to store the binary data
 */
class LocalImage implements BaseImage {
    name: string;
    source: Buffer; // The source, as if you were passing it to the HTML tag
    format: string; // The image format, like 'PNG' or 'JPG'
    readonly width: number;
    readonly height: number;
    
    constructor(name: string, source: Buffer, format: string) {
	this.name = name;
	this.source = source;
	this.format = format;

	this.width = 0;
	this.height = 0;
    }

    /**
     * Transforms the image in a data URI
     */
    toDataURI() {
	return "";
    }
    
    
}

export {BaseImage, LocalImage};
