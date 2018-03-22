
import LocalImage from '../src/image.ts';
import BaseImage from "../src/base-image.ts";
import ImageContainer from "../src/image-container.ts";
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

    it('should add BaseImages to a container', (done) => {
	const img1: BaseImage  = {
	    format: "test",
	    width: 48,
	    height: 48,
	    source: Buffer.alloc(16),
	    name: "testimg1"
	};

	const img2: BaseImage = {
	    format: "test",
	    width: 64,
	    height: 64,
	    source: Buffer.alloc(16),
	    name: "testimg2"	    
	};

	let cont = new ImageContainer("cont", (ccont: ImageContainer) => {
	    ccont.children.push(img1);
	    ccont.children.push(img2);

	    expect(ccont.children[0].width).to.not.equal(ccont.children[1].height);
	    expect(ccont.children.length).to.equal(2);
	    done();
	})
	
    });

    it('should add LocalImages to a container', (done) => {
	const img1 = {
	    format: "test",
	    width: 48,
	    height: 48,
	    source: Buffer.alloc(16),
	    name: "testimg1"
	};

	const img2 = {
	    format: "test",
	    width: 64,
	    height: 64,
	    source: Buffer.alloc(16),
	    name: "testimg2"
	};

	let cont = new ImageContainer("cont", (ccont: ImageContainer) => {
	    ccont.children.push(img1);
	    ccont.children.push(img2);

	    jimp.read('test/image-test.png').then( (img: any) => {
		
		img.getBuffer(jimp.MIME_PNG, (err: any, buf: any) => {
		    let lc = new LocalImage("LocalImage", buf, 'png', (li: LocalImage) => {
			ccont.children.push(li);
			expect(ccont.children[0].name).to.not.equals("LocalImage");
			expect(ccont.children[2].name).to.equals("LocalImage");
			done();
		    });
		});
		
	    });
	});
				      
    });
});
