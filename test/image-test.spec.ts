
import {BaseImage, LocalImage} from '../src/image.ts';
import { expect } from 'chai';
import 'mocha';
import * as jimp from 'jimp';

describe('Image libraries', () => {

    it('should return correct data URI', (done) => {

	/* Typescript swears that jimp (the 'img' object, honestly)
	   has no getBase64 object, but it has

	   The any type makes it shut up and believe us.
	*/
	jimp.read('test/image-test.png').then( (img: any) => {
	    let expected_data: string = null;

	    img.getBase64(jimp.MIME_PNG, (err: any, buf: string) => {
		expected_data = buf;
	    })
	    
	    img.getBuffer(jimp.MIME_PNG, (err: any, buf: any) => {
		let lc = new LocalImage("test", buf, 'png', (li: LocalImage) => {
		    expect(li.toDataURI()).to.equal(expected_data);
		    done();
		});
	    });
	   
	});
	
    });

    it('should return correct image size', (done) => {

	jimp.read('test/image-test.png').then( (img) => {
	    img.getBuffer(jimp.MIME_PNG, (err, buf) => {
		let lc = new LocalImage("test", buf, 'png', (li: LocalImage) => {
		    expect(li.width).to.equals(96)
		    expect(li.height).to.equals(96)
		    done();
		})

	    });
	});
	
    });
    
});
