# Some code to remember
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
execSync(`texconv.exe "${ srcFullPath }" -y -ft png -o "${ outputDir }"`); // -f FP16 
```
### discord.js
```js
// max file.length === 10, max total attachments size < 25MB
const HOOK = new Discord.WebhookClient({ url: 'https://discord.com/api/webhooks/..'});
HOOK.send({ files: [{ attachment: "<path/to/file.txt>", name: "attach_name" }] }); 
```
