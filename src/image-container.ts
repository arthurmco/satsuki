/**
 * Image container class
 */

import BaseImage from "../src/base-image.ts";

/**
 * A container image class stores other images inside it
 * Since it needs to have a photo, we implements BaseImage, and make a folder
 * photo (in the future, I might put a thumbnail of the conteiner components
 * inside it).
 */

export default class ImageContainer implements BaseImage {
    name: string;
    source: Buffer; // The source, as if you were passing it to the HTML tag
    readonly format: string; // The image format, like 'PNG' or 'JPG'
    width: number;
    height: number;

    constructor(name: string, done_cb: Function) {
	this.name = name;
	this.format = "container";
	this.children = new Array<BaseImage>();
	done_cb(this);
    }

    // BaseImage array allows for elements that are both containers and images.
    children: Array<BaseImage>;
}
