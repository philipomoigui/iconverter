var currencies, displayAmount = [], values = [], counter = 0;

function converter(inputValue) {
    var oneTh = oneThousand(inputValue), fivehd = fiveHundred(oneTh), twohd = twoHundred(fivehd), onehd = oneHundred(twohd), fiftyTen = fifty(onehd), twentyTen = twenty(fiftyTen), tenTen = ten(twentyTen), fiveT = five(tenTen);

    if (inputValue > 1000) {
        oneTh;
    }
    else if (oneTh > 500) {
        fivehd;
    }
    else if(fivehd > 200) {
        twohd;
    }
    else if(twohd > 100){
        onehd;
    }
    else if(onehd > 50){
        fiftyTen;
    }
    else if(fiftyTen > 20) {
        twentyTen;
    }
    else if(twentyTen > 10) {
        tenTen;
    }
    else if(tenTen > 5){
        fiveT;
    }
    
}

function oneThousand(number) {
    oneThousand = number / 1000;
    var processedThousand = Math.floor(oneThousand)
    var oneThousanRemainder = number - (processedThousand * 1000)
     if (!processedThousand < 1){
         counter++
        values.push(processedThousand)
        displayAmount.push("1,000")
     }
     return oneThousanRemainder;
}

function fiveHundred(remainder){
    var fiveHundred = remainder / 500;
    var processedFiveHundred = Math.floor(fiveHundred);
    var fiveHundredRemainder = remainder - (processedFiveHundred * 500)
    if (!processedFiveHundred < 1){
        counter++
        values.push(processedFiveHundred)
        displayAmount.push("500")
     }
    return fiveHundredRemainder
}

function twoHundred(remainder){
    var twoHundred = remainder / 200;
    var processedTwoHundred = Math.floor(twoHundred);
    var twoHundredRemainder = remainder - (processedTwoHundred * 200)
    if (!processedTwoHundred < 1){
        counter++
        values.push(processedTwoHundred)
        displayAmount.push("200")
     }
    return twoHundredRemainder;
}

function oneHundred(remainder){
    var oneHundred = remainder / 100;
    var processedOneHundred = Math.floor(oneHundred);
    var oneHundredremainder = remainder - (processedOneHundred * 100)
    if (!processedOneHundred < 1){
        counter++
        values.push(processedOneHundred)
        displayAmount.push("100")
     }
    return oneHundredremainder;
}

function fifty(remainder) {
    var fifty = remainder / 50;
    var processedFifty = Math.floor(fifty);
    var fiftyRemainder = remainder - (processedFifty * 50)
    if (!processedFifty < 1){
        counter++
        values.push(processedFifty)
        displayAmount.push("50")
     }
    return fiftyRemainder;
    
}

function twenty(remainder) {
    var twenty = remainder / 20;
    var processedTwenty = Math.floor(twenty);
    var twentyRemainder = remainder - (processedTwenty * 20)
    if (!processedTwenty < 1){
        counter++
        values.push(processedTwenty)
        displayAmount.push("20")
     }
    return twentyRemainder;
    
}

function ten(remainder) {
    var ten = remainder / 10;
    var processedTen = Math.floor(ten);
    var tenRemainder = remainder - (processedTen * 10)
    if (!processedTen < 1){
        counter++
        values.push(processedTen)
        displayAmount.push("10")
     }
    return tenRemainder;
    
}

function five(remainder) {
    var five = remainder / 5;
    var processedFive = Math.floor(five);
    var fiveRemainder = remainder - (processedFive * 5)
    if (!processedFive < 1){
        counter++
        values.push(processedFive)
        displayAmount.push("5")
     }
    return fiveRemainder;
}

function displayResult(){
    var inputValue = document.getElementById("input").value;

    if (isNaN(inputValue)){
        alert("Plese Input a valid number")
    }

    // else if (inputValue = ""){
    //     alert("Please Enter a number")
    // }
    converter(inputValue)

    var body = document.getElementsByTagName("body")[0];
    var tbl = document.getElementById("table");
    var tblBody = document.getElementById("tableBody")

    for (var i =0; i < values.length; i++){
       var row = document.createElement("tr");
        
        var cell = document.createElement("td");
        var cellText = document.createTextNode(i+1);
        cell.appendChild(cellText);
        row.appendChild(cell);

        var cell = document.createElement("td");
        var cellText = document.createTextNode(values[i]);
        cell.appendChild(cellText)
        row.appendChild(cell) 

        var cell = document.createElement("td");
        var cellText = document.createTextNode(displayAmount[i]);
        cell.appendChild(cellText)
        row.appendChild(cell)

        tblBody.appendChild(row);
        tbl.appendChild(tblBody); 
        body.appendChild(tbl);
    }

    var para = document.createElement("p")
    var textNode = para.textContent = "Total  "+"#" + inputValue;
    var total = document.getElementById("total")
    total.appendChild(para);
    
}