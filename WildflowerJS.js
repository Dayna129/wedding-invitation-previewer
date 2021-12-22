//js

function changeBGImage(imageName) {

    let bgImageElement = document.getElementById('changeBackGround');

    if(imageName == 'pinkProtia') {

        bgImageElement.style.backgroundImage = "url('../wedding-invitation-previewer/bgImages/pinkProtia.jpeg')";
        bgImageElement.style.fontFamily = "Gill Sans, sans-serif";
        bgImageElement.style.color = "#004d4d";
        bgImageElement.style.fontSize = "22px";
        bgImageElement.style.minHeight = "550px";

    }

    if(imageName == 'yellowBanksia') {
        
        bgImageElement.style.backgroundImage = "url('../wedding-invitation-previewer/bgImages/yellowBanksia.jpeg')";
        bgImageElement.style.fontFamily = "Marker Felt, fantasy";
        bgImageElement.style.color = "DarkSlateGrey";
        bgImageElement.style.fontSize = "26px";
        bgImageElement.style.minHeight = "550px";

    }

    if(imageName == 'blueGum') {

        bgImageElement.style.backgroundImage = "url('../wedding-invitation-previewer/bgImages/blueGum.jpeg')";
        bgImageElement.style.fontFamily = "monospace";
        bgImageElement.style.color = "GoldenRod";
        bgImageElement.style.fontSize = "24px";
        bgImageElement.style.minHeight = "550px";

    }

}


function displayText() {

    let announcement = document.getElementById('announcement').value;
    document.getElementById('showAnn').innerHTML = announcement;

    let nameOne = document.getElementById('nameOne').value;
    document.getElementById('showName1').innerHTML = nameOne;

    let nameTwo = document.getElementById('nameTwo').value;
    document.getElementById('showName2').innerHTML = nameTwo;

    let and = document.getElementById('and').value;
    document.getElementById('showAnd').innerHTML = and;
    
    let welcome = document.getElementById('welcome').value;
    document.getElementById('showMessage').innerHTML = welcome;

    let venue = document.getElementById('venue').value;
    document.getElementById('showVenue').innerHTML = venue;

    let rsvp = document.getElementById('rsvp').value;
    document.getElementById('showRSVP').innerHTML = rsvp;

}


function displayDate() {

    let dateVal = document.getElementById("dateVal").value;
  
    const d = new Date(dateVal);
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
  
    let newDateVal = `${da} ${mo} ${ye}`;
  
    document.getElementById('showingDate').innerHTML = newDateVal;

}


function printInvite(divName) {

    let printContents = document.getElementById(divName).innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}