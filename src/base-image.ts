

/*
 * Symbolizes an image.
 * Its attributes resemble - and are, basically - the img tag, with the
 * addition of the image type and size.
 */
export default interface BaseImage {
    source: Buffer; // The binary source or the image
    format: string; // The image format, like 'PNG' or 'JPG'
    width: number;
    height: number;
    name: String
};
