
var xmlHttp;
function srvTime(){
    try {
        //FF, Opera, Safari, Chrome
        xmlHttp = new XMLHttpRequest();
    }
    catch (err1) {
        //IE
        try {
            xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
        }
        catch (err2) {
            try {
                xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
            }
            catch (eerr3) {
                //AJAX not supported, use CPU time.
                alert("AJAX not supported");
            }
        }
    }
    xmlHttp.open('HEAD',window.location.href.toString(),false);
    xmlHttp.setRequestHeader("Content-Type", "text/html");
    xmlHttp.send('');
    return xmlHttp.getResponseHeader("Date");
}
  

var st = srvTime();
var date = new Date(st);
SimpleDateFormat = new SimpleDateFormat("HH:mm:ss a");

	if (hours == 0) {
	 hours = 12;
    }
    if (minutes < 10) {
	 minutes = "0" + minutes;
    }
    if (seconds < 10) {
	 seconds = "0" + seconds;
    }
