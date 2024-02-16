function calculateTriangleArea(){
    const triangleBaseInput = document.getElementById('traingle-base');
    const triangleBaseText = triangleBaseInput.value;
    // step for converting string to number
    const base = parseFloat(triangleBaseText);
    console.log(base);

    // To get height input value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);

    // To calculate base and height
    const area = 0.5 * base * height;
    console.log('Total caculated area is:', area);

    // To display caculated area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}

// function for calculte racktangle
function calculateRacktangleArea(){
    const racktangleWidthInput = document.getElementById('racktangle-width');
    // console.log(racktangleWidthInput);
    // to get width input
    const racktangleWidthText = racktangleWidthInput.value;
    //console.log(racktangleWidthText);
    const racktangleWidth = parseFloat(racktangleWidthText);
    //console.log(racktangleWidth);

    // To get length for racktangle
    const racktangleLengthInput = document.getElementById('racktangle-length');
    // console.log(racktangleLengthInput);
    const racktangleLengthText = racktangleLengthInput.value;
    // console.log(racktangleLengthText);
    const racktangleLength = parseFloat(racktangleLengthText);
    //console.log(racktangleLength);

    // To calculate Area of racktangle
    const racktangleArea = racktangleWidth * racktangleLength;
    console.log(racktangleArea);

    // To display Racktangle area
    const racktangleAreaSpan = document.getElementById('racktangle-area');
    racktangleAreaSpan.innerText = racktangleArea;

}