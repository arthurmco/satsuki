
import {BaseImage, LocalImage} from '../image.ts';
import { expect } from 'chai';
import 'mocha';
import * as jimp from 'jimp';

describe('Image libraries', () => {

    it('should return correct data URI', (done) => {
	const expected_data = "data:image/png;base64,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";

	jimp.read('src/test/image-test.png').then( (img) => {
	    img.getBuffer(jimp.MIME_PNG, (err, buf) => {
		let lc = new LocalImage("test", buf, 'png');
		expect(lc.toDataURI()).to.equal(expected_data);
		done();
	    });
 
	});
	
    });

    it('should return correct image size', (done) => {

	jimp.read('src/test/image-test.png').then( (img) => {
	    img.getBuffer(jimp.MIME_PNG, (err, buf) => {
		let lc = new LocalImage("test", buf, 'png');
		expect(lc.width).to.equals(96)
		expect(lc.height).to.equals(96)
		done();
	    });
	});
	
    });
    
});
