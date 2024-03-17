//table javascript 
let option = [
    { Options: 'BUY (= "Debit" = "Long")', CALL: "\u2191", PUT: "\u2193" },
    { Options: 'SELL (= "Credit" = "Shot")', CALL: "\u2193", PUT: "\u2191" },

];

function createTableHead(table, data) { //Creating the head of the table
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function createTableNodes(table, data) { //Creating the body that is the nodes under head
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

let table = document.querySelector("table");
let data = Object.keys(option[0]);
createTableHead(table, data);
createTableNodes(table, option);

/* */
//automatic image slideshow javascript
let myImagesArray = [
    'resources/options-trading.jpg',
    'resources/option1.png',
    'resources/option2.jpg',
    'resources/option4.png',
    'resources/option5.png',
];

//make an automatic slide to display the images
let ImageNumber = 0;
let difference = myImagesArray.length - 1;

let delay = 2000; //milliseconds    1sec=1000milliseconds

setInterval('ChangeImages(-1)', delay);
//-1 to show the slide backwards
//1 to show the slide forwards

function ChangeImages(direction) {
    //begin function

    ImageNumber = ImageNumber + direction;

    if (ImageNumber > difference) {
        //begin inner first if
        ImageNumber = 0;
    } //end inner first if

    if (ImageNumber < 0) {
        //begin inner second if
        ImageNumber = difference;
    } //end inner second if
    //document.slideshow.src = myImagesArray[ImageNumber];
    document.getElementById('slideshow').src = myImagesArray[ImageNumber];
} //end function