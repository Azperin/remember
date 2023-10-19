# opencv
```js
const emptyMat = new cv.Mat(500, 500, 24); // 24 for PNG
cv.imread("path/to/image.png", cv.IMREAD_UNCHANGED).getRegion(new cv.Rect( 555, 555, 555, 555 ));
someImgMat.copyMakeBorder(61, 62, 58, 59, cv.BORDER_CONSTANT); // top bottom left right
someImgMat.copyTo(emptyMat.getRegion(new cv.Rect(0, 0, 300, 300)));
cv.addWeighted(firstImg, 1, secondImg, 1, 0); // img combine
cv.imwrite("path/to/image.png", emptyMat,  [cv.IMWRITE_PNG_COMPRESSION, 0] ); // no png compression
```
