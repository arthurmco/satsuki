/**
 * Default image class
 */

const idu = require('image-data-uri');
import * as jimp from 'jimp';

import BaseImage from './base-image.ts';

/*
 * An image that has a local source
 *
 * Effectively, the 'source' is a buffer, to store the binary data
 */
export default class LocalImage implements BaseImage {
    name: string;
    source: Buffer; // The source, as if you were passing it to the HTML tag
    readonly format: string; // The image format, like 'PNG' or 'JPG'
    width: number;
    height: number;

    img_object: any = null;
  
    /*
     * Builds a image.
     *
     * If 'done_cb' is defined, run it when the function is done
     */
    constructor(name: string, source: Buffer, format: string,
		done_cb: Function) {
	this.name = name;
	this.source = source;
	this.format = format;
	
	jimp.read(source).then((img) => {
	    this.width = img.bitmap.width;
	    this.height = img.bitmap.height;
	    this.img_object = img;

	    done_cb(this);
	});
    }

    /**
     * Transforms the image in a data URI
     */
    toDataURI() {
	return idu.encode(this.source, this.format);
    }
    
    
}
