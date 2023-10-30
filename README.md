# Some code to remember
### Path of Building string convert to XML
```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/pako/2.1.0/pako.min.js"></script>
function convertPobStringToXML(base64_pob_string) {
	// not url, base64 content itself
	const str = base64_pob_string.replaceAll('-', '+').replaceAll('_','/');
	const strDecoded = atob(str);
	const binData = new Uint8Array(strDecoded.split('').map((x) => x.charCodeAt(0)));
	const strDecompressed = pako.inflate(binData);
	const xml = String.fromCharCode.apply(null, strDecompressed); // new Uint16Array(strDecompressed) for utf16
	return xml;
}
```

### nodejs
```
// --watch restarts the process when an imported file is changed
node --watch index.js
```

### opencv
```js
const emptyMat = new cv.Mat(500, 500, 24); // 24 for PNG
cv.imread("path/to/image.png", cv.IMREAD_UNCHANGED).getRegion(new cv.Rect( 555, 555, 555, 555 ));
someImgMat.copyMakeBorder(61, 62, 58, 59, cv.BORDER_CONSTANT); // top bottom left right
someImgMat.copyTo(emptyMat.getRegion(new cv.Rect(0, 0, 300, 300)));
cv.addWeighted(firstImg, 1, secondImg, 1, 0); // img combine
cv.imwrite("path/to/image.png", emptyMat,  [cv.IMWRITE_PNG_COMPRESSION, 0] ); // no png compression
```
### texconv (dds convert)
```js
// in case of errors add flag -f FP16 
execSync(`texconv.exe "${ srcFullPath }" -y -ft png -o "${ outputDir }"`); 
```
`texconv.exe -r:keep "R:\ggpk\extracted\folder\*.dds" -ft png -o s -y`
### discord.js
```js
// max files.length === 10, max total attachments size < 25MB
const HOOK = new Discord.WebhookClient({ url: 'https://discord.com/api/webhooks/..'});
HOOK.send({ files: [{ attachment: "<path/to/file.txt>", name: "attach_name" }] }); 
```
### Convert bk2 files to webm
1. Unpack .bk2 video as PNG sequence using RADtools
2. Create .apng file with Apng assembler
3. Convert .apng to .webm with FFMPEG `ffmpeg -i converted_bk_file.apng -c:v libvpx -crf 4 -b:v 20M -auto-alt-ref 0 output.webm`
Can skip apng creation using straight FFMPEG, but output will be twice the size 
`ffmpeg -framerate 60 -i "file%03d.png" -c:v libvpx-vp9 -pix_fmt yuva420p -b:v 20M -auto-alt-ref 0 output.webm`
