
// get the Window size
function getWinWidth() {
    if(window.innerWidth!= undefined){
        return window.innerWidth;
    }
    else{
        var B= document.body, 
        D= document.documentElement;
        return Math.min(D.clientWidth, B.clientWidth);
    }
}




function popupSingleImage(x_path, x_image_src) {
    var oWindow = null;

	// get the size of the image
    var sSize = x_image_src.split("_");
    var aSize = sSize[sSize.length - 1].split("x");
    var panelwidth = 6; 

	// close-button(cross)
    var bottomheight = 45;
    var infoheight = 100;
    var infowidth = 200;
    var width = parseInt(aSize[0]);
    var height = parseInt(aSize[1].substr(0, aSize[1].length - 4));
    var format = "L";

	// unterscheiden zwischen Hochformat und Querformat
    if (width > height) {
        width = parseInt(aSize[0]) + panelwidth + panelwidth;
        height = parseInt(aSize[1].substr(0, aSize[1].length - 4)) + panelwidth + panelwidth + infoheight;
        format = "L";
    } else {
        width = parseInt(aSize[0]) + panelwidth + panelwidth + infowidth;
        height = parseInt(aSize[1].substr(0, aSize[1].length - 4)) + panelwidth + panelwidth + bottomheight;
        format = "P";
    }

    oWindow = window.open(x_path + x_image_src, "POPUP_SINGLE_IMAGE","locationbar=no,menubar=no,scrollbars=no,resizable=no,status=no,screenX=0,screenY=0,height="+ height + ",width=" + width);
//    oWindow = window.open(x_path + "/piclease/image.do?doSingle=&image_id=" + x_image_id + "&format=" + format, "POPUP_IMAGE", "locationbar=no,menubar=no,scrollbars=no,resizable=no,status=no,screenX=0,screenY=0,height=" + height + ",width=" + width);

    if (top.window.opener) {
        oWindow.opener = top.window.opener;
    }
    oWindow.resizeTo(width, height);
    centerTopWindow(oWindow, width, height);
    oWindow.focus();
}

	

function openSitemap(x_path, x_sitemap) {
    var oWindow = null;
    var iWidth = 220;
    var iHeight = 500;
    oWindow = window.open(x_path + x_sitemap, "POPUP_SITEMAP", "dependent=yes,locationbar=no,menubar=no,scrollbars=yes,resizable=yes,status=no,screenX=0,screenY=0,height=" + iHeight + ",width=" + iWidth);
    if (top.window.opener) {
        oWindow.opener = top.window.opener;
    }
    var posX = 0;
    var posY = 0;

//	oWindow.resizeTo( iWidth, iHeight);
    oWindow.moveTo(posX, posY);
    oWindow.focus();
}
function setCountry() {
    for (i = 0; i < document.countries.country.length; i++) {
        if (document.countries.country[i].checked) {
//			alert(document.countries.country[i].value);
            parent.opener.form1.country.value = document.countries.country[i].value;
        }
    }
    window.close();
}
function popupCountryList() {
    var oWindow = null;
    var iWidth = 220;
    var iHeight = 180;
    oWindow = window.open("countryList.html", "POPUP_COUNTRYLIST", "dependent=yes,locationbar=no,menubar=no,scrollbars=no,resizable=no,status=no,screenX=0,screenY=0,height=" + iHeight + ",width=" + iWidth);
    if (top.window.opener) {
        oWindow.opener = top.window.opener;
    }
    var posX = (screen.availWidth - iWidth) / 2;
    var posY = (screen.availHeight - iHeight) / 2;

//	oWindow.resizeTo( iWidth, iHeight);
    oWindow.moveTo(posX, posY);
    oWindow.focus();
}
function popupMap(x_html) {
    var oWindow = null;
    var iWidth = 800;
    var iHeight = 700;
    oWindow = window.open(x_html + ".html", "POPUP_MAP", "dependent=yes,locationbar=no,menubar=no,scrollbars=yes,resizable=yes,status=no,screenX=0,screenY=0,height=" + iHeight + ",width=" + iWidth);
    if (top.window.opener) {
        oWindow.opener = top.window.opener;
    }
    var posX = (screen.availWidth - iWidth) / 2;
    var posY = (screen.availHeight - iHeight) / 2;

//	oWindow.resizeTo( iWidth, iHeight);
    oWindow.moveTo(posX, posY);
    oWindow.focus();
}
function popupQuiz() {
    var oWindow = null;
    var iWidth = 950;
    var iHeight = 660;
    oWindow = window.open("http://www.science4you.org/servlets/s2yougames/Quiz", "POPUP_QUIZ", "dependent=yes,locationbar=no,menubar=no,scrollbars=no,resizable=no,status=no,screenX=0,screenY=0,height=" + iHeight + ",width=" + iWidth);
    if (top.window.opener) {
        oWindow.opener = top.window.opener;
    }

//	centerWindow( oWindow, iWidth, iHeight);
}
function popupInfo(path, x_html) {
    var oWindow = null;
    var iWidth = 500;
    var iHeight = 500;
    oWindow = window.open(path + "help/info." + x_html + ".html", "POPUP_INFO", "dependent=yes,locationbar=no,menubar=no,scrollbars=yes,resizable=yes,status=no,screenX=0,screenY=0,height=" + iHeight + ",width=" + iWidth);
    if (top.window.opener) {
        oWindow.opener = top.window.opener;
    }
    var posX = (screen.availWidth - iWidth) / 2;
    var posY = (screen.availHeight - iHeight) / 2;
    oWindow.resizeTo(iWidth, iHeight);
    oWindow.moveTo(posX, posY);
    oWindow.focus();
}

// 
function popupInfoText(x_path, iWidth, iHeight) {
    var oWindow = null;
    oWindow = window.open(x_path, "POPUP_INFOTEXT", "locationbar=no,menubar=no,scrollbars=yes,resizable=yes,status=no,screenX=0,screenY=0,height=" + iHeight + ",width=" + iWidth);
    if (top.window.opener) {
        oWindow.opener = top.window.opener;
    }
    oWindow.resizeTo(iWidth, iHeight);
    centerTopWindow(oWindow, iWidth, iHeight);
}

// leitet auf jsp's weiter (basiert auf sitemesh und wird popupInfo ersetzen)
function popupInfoSite(path, x_html, x_registerProject) {
    var oWindow = null;
    var iWidth = 500;
    var iHeight = 500;
    oWindow = window.open(path + "/help/info." + x_html + ".jsp?registerProject=" + x_registerProject, "POPUP_INFO", "dependent=yes,locationbar=no,menubar=no,scrollbars=yes,resizable=yes,status=no,screenX=0,screenY=0,height=" + iHeight + ",width=" + iWidth);
    if (top.window.opener) {
        oWindow.opener = top.window.opener;
    }
    centerWindow(oWindow, iWidth, iHeight);
}
function changeTwoFrames(x_html1, x_frame1, x_html2, x_frame2) {
    window.top.frames[x_frame1].location.href = x_html1 + ".html";
    window.top.frames[x_frame2].location.href = x_html2 + ".html";
}
function getIsNN() {
    var isNN;
    if (parseInt(navigator.appVersion.charAt(0)) >= 4) {
        isNN = (navigator.appName == "Netscape") ? 1 : 0;
    }
    return isNN;
}
function getIsIE() {
    var isIE;
    if (parseInt(navigator.appVersion.charAt(0)) >= 4) {
        isIE = (navigator.appName.indexOf("Microsoft") != -1) ? 1 : 0;
    }
    return isIE;
}
function reSizeToImage(x_obj) {
    var isNN = getIsNN();
    var isIE = getIsIE();
    if (isIE) {
        x_obj.resizeTo(100, 100);
        width = 100 - (x_obj.document.body.clientWidth - x_obj.document.images[0].width);
        height = 100 - (x_obj.document.body.clientHeight - x_obj.document.images[0].height);
        x_obj.resizeTo(width, height);
    }
    if (isNN) {
        x_obj.innerWidth = x_obj.document.images["imageBig"].width;
        x_obj.innerHeight = x_obj.document.images["imageBig"].height;
        width = x_obj.innerWidth;
        height = x_obj.innerHeight;
    }
    centerWindow(x_obj, width, height);
}
function doTitle(x_title) {
    document.title = x_title;
}
function centerWindow(x_obj, x_width, x_height) {
    var posX = (screen.availWidth - x_width) / 2;
    var posY = (screen.availHeight - x_height) / 2;
    x_obj.moveTo(posX, posY);
    x_obj.focus();
}
function centerTopWindow(x_obj, x_width, x_height) {
    var posX = (screen.availWidth - x_width) / 2;
    x_obj.moveTo(posX, 0);
    x_obj.focus();
}
function WriteHtml(HtmlString, DocObj) {
    DocObj.close();
    DocObj.open();
    DocObj.write(HtmlString);
    DocObj.close();
}

// Plates ---------------------------------------------------------------------------------------------
function getWidthPlate(x_cols) {
    return (x_cols * 175) + 60;
}
function getHeightPlate(x_rows, x_control) {
    var rowHeight = 195 + (x_control > 0 ? 15 : 0);
    return (x_rows * rowHeight) + 120;
}
function popupPlateSimple(x_path, x_imageIds, x_rows, x_cols, x_knoten_id, x_project_id, x_control, x_topics_id) {
    var oWindow = null;
    var width = getWidthPlate(x_cols);
    var height = getHeightPlate(x_rows, x_control);
    oWindow = window.open(x_path + "/plates/plate.do?doSimple=&project_id=" + x_project_id + "&imageIds=" + x_imageIds + "&knoten_id=" + x_knoten_id + "&cols=" + x_cols + "&control=" + x_control + "&topics_id=" + x_topics_id, "POPUP_PLATE", "locationbar=no,menubar=no,scrollbars=yes,resizable=yes,status=no,screenX=0,screenY=0,height=" + height + ",width=" + width);
    if (top.window.opener) {
        oWindow.opener = top.window.opener;
    }
    oWindow.resizeTo(width, height);
    centerWindow(oWindow, width, height);
    oWindow.focus();
}
function popupPlateThread(x_path, x_ThreadId) {
    var oWindow = null;
    oWindow = window.open(x_path + "/plates/plate.do?doPlateThread=&threadId=" + x_ThreadId, "POPUP_PLATETHREAD", "locationbar=no,menubar=no,scrollbars=yes,resizable=yes,status=no,screenX=0,screenY=0,height=500,width=550");
    if (top.window.opener) {
        oWindow.opener = top.window.opener;
    }
    oWindow.focus();
}
function popupPlateSimpleS4(x_path, x_imageIds, x_rows, x_cols, x_control) {
    var oWindow = null;
    var width = getWidthPlate(x_cols);
    var height = getHeightPlate(x_rows, x_control);
    oWindow = window.open(x_path + "/plates/plate.do?doSimpleS4&imageIds=" + x_imageIds + "&cols=" + x_cols + "&control=" + x_control, "POPUP_PLATE", "locationbar=no,menubar=no,scrollbars=yes,resizable=yes,status=no,screenX=0,screenY=0,height=" + height + ",width=" + width);
    if (top.window.opener) {
        oWindow.opener = top.window.opener;
    }
    oWindow.resizeTo(width, height);
    centerWindow(oWindow, width, height);
    oWindow.focus();
}
function popupPlateSingle(x_path, x_image_src, x_image_id) {
    var oWindow = null;

	// get the size of the image
    var sSize = x_image_src.split("_");
    var aSize = sSize[sSize.length - 1].split("x");
    var width = parseInt(aSize[0]) + 30;
    var height = parseInt(aSize[1].substr(0, aSize[1].length - 4)) + 120;
    oWindow = window.open(x_path + "/plates/plate.do?doSingle=&image_id=" + x_image_id, "POPUP_IMAGE", "locationbar=no,menubar=no,scrollbars=no,resizable=no,status=no,screenX=0,screenY=0,height=" + height + ",width=" + width);
    if (top.window.opener) {
        oWindow.opener = top.window.opener;
    }
    oWindow.resizeTo(width, height);
    centerTopWindow(oWindow, width, height);
    oWindow.focus();
}
function popupPlateSingleImage(x_path, x_image_src, x_image_id) {
    var oWindow = null;

	// get the size of the image
    var sSize = x_image_src.split("_");
    var aSize = sSize[sSize.length - 1].split("x");
    var width = parseInt(aSize[0]);
    var height = parseInt(aSize[1].substr(0, aSize[1].length - 4));
    if (width>height) {
    	width = width + 20;
    	height = height + 60;
    } else {
    	width = width + 120;
    	height = height + 20;
    }
    // get the size of the screen
    var screenMaxX = screen.availWidth-10;
    var screenMaxY = screen.availHeight-20;
    if (screenMaxX<width) width = screenMaxX;
    if (screenMaxY<height) height = screenMaxY;
    oWindow = window.open(x_path + "/plates/plate.do?doSingleImage=&image_id=" + x_image_id, "POPUP_IMAGE", "locationbar=no,menubar=no,scrollbars=no,resizable=no,status=no,screenX=0,screenY=0,height=" + height + ",width=" + width);
    if (top.window.opener) {
        oWindow.opener = top.window.opener;
    }
    oWindow.resizeTo(width, height);
    centerTopWindow(oWindow, width, height);
    oWindow.focus();
}
function popupPlateSingleS4(x_path, x_image_src, x_image_id) {
    var oWindow = null;

	// get the size of the image
    var sSize = x_image_src.split("_");
    var aSize = sSize[sSize.length - 1].split("x");
    var width = parseInt(aSize[0]) + 30;
    var height = parseInt(aSize[1].substr(0, aSize[1].length - 4)) + 120;
    oWindow = window.open(x_path + "/plates/plate.do?doSingleS4=&image_id=" + x_image_id, "POPUP_IMAGE", "locationbar=no,menubar=no,scrollbars=no,resizable=no,status=no,screenX=0,screenY=0,height=" + height + ",width=" + width);
    if (top.window.opener) {
        oWindow.opener = top.window.opener;
    }
    oWindow.resizeTo(width, height);
    centerTopWindow(oWindow, width, height);
    oWindow.focus();
}
function gotoSpeciessheet(x_path, x_knoten_id) {
//	alert(top.window.opener.parent.location);
    top.window.opener.parent.topFrame.location.href = x_path + "/encyclopedia/molluscs/pageheading.do?flap1=species";
    top.window.opener.parent.leftFrame.location.href = x_path + "/encyclopedia/molluscs/species/speciessheets/speciesdispatch.do?doSpeciesList&knoten_id=" + x_knoten_id + "#jump" + x_knoten_id;
    top.window.opener.parent.mainFrame.location.href = x_path + "/encyclopedia/molluscs/species/speciessheets/speciesdispatch.do?doSpeciesSheet&knoten_id=" + x_knoten_id;
    top.window.opener.focus();
}
function pagecontrolListDetail(x_path, x_id, x_forward, x_treeselectedgif ) {
    window.top.mainFrame.location.href = x_path + x_forward + x_id;
    if (document.pagecontrol != null) {
        document.pagecontrol["selected" + document.pagecontrol.lastVar.value].src = x_path + "/common/images/layoutelements/onepixel.gif";
        document.pagecontrol["selected" + x_id].src = x_path + x_treeselectedgif;
        document.pagecontrol.lastVar.value = x_id;
    }
}


function openGoogleMap() {
    document.commonMapsMapForm.mapTyp.value = 1;
    document.commonMapsMapForm.submit();
}

/* ============== CSS-Popup ======== 19.11.13 ============ */

function csspToggle(div_id) {
	var el = document.getElementById(div_id);
	if ( el.style.display == 'none' ) {	el.style.display = 'block';}
	else {el.style.display = 'none';}
}
function blanketSize(popupDivVar) {
	if (typeof window.innerWidth != 'undefined') {
		viewportheight = window.innerHeight;
	} else {
		viewportheight = document.documentElement.clientHeight;
	}
	if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
		blanket_height = viewportheight;
	} else {
		if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
			blanket_height = document.body.parentNode.clientHeight;
		} else {
			blanket_height = document.body.parentNode.scrollHeight;
		}
	}
	var blanket = document.getElementById('blanket');
	blanket.style.height = blanket_height + 'px';
	var popupDiv = document.getElementById(popupDivVar);
	popupDiv_height=blanket_height/2-150;//150 is half popup's height
	popupDiv.style.top = popupDiv_height + 'px';
}
function windowPos(popupDivVar) {
	if (typeof window.innerWidth != 'undefined') {
		viewportwidth = window.innerHeight;
	} else {
		viewportwidth = document.documentElement.clientHeight;
	}
	if ((viewportwidth > document.body.parentNode.scrollWidth) && (viewportwidth > document.body.parentNode.clientWidth)) {
		window_width = viewportwidth;
	} else {
		if (document.body.parentNode.clientWidth > document.body.parentNode.scrollWidth) {
			window_width = document.body.parentNode.clientWidth;
		} else {
			window_width = document.body.parentNode.scrollWidth;
		}
	}
	var popupDiv = document.getElementById(popupDivVar);
	window_width=window_width/2-150;//150 is half popup's width
	popupDiv.style.left = window_width + 'px';
}
function popupCSS(windowname) {
	blanketSize(windowname);
	windowPos(windowname);
	csspToggle('blanket');
	csspToggle(windowname);		
}


// -- neue Funktionen ----

//Elemente einblenden
//Mit show_elements() können einzelne oder mehrere Elemente
//via show_elements('ElementIDone','ElementIDtwo','ElementIDthree')
//eingeblendet werden.
function showElements()
{
var elementNames = showElements.arguments;
for (var i=0; i<elementNames.length; i++)
{
  var elementName = elementNames[i];
  document.getElementById(elementName).style.display='block';
}
}
//Elemente ausblenden
//Mit show_elements() können einzelne oder mehrere Elemente
//via hide_elements('ElementIDone','ElementIDtwo','ElementIDthree')
//ausgeblendet werden.
function hideElements()
{
var elementNames = hideElements.arguments;
for (var i=0; i<elementNames.length; i++)
{
  var elementName = elementNames[i];
  document.getElementById(elementName).style.display='none';
}
}

// Position near cursor
// corrected to show the left border of the div
function AssignPosition(divEl, width) {
	if(self.pageYOffset) {
		rX = self.pageXOffset;
		rY = self.pageYOffset;
		}
	else if(document.documentElement && document.documentElement.scrollTop) {
		rX = document.documentElement.scrollLeft;
		rY = document.documentElement.scrollTop;
		}
	else if(document.body) {
		rX = document.body.scrollLeft;
		rY = document.body.scrollTop;
		}
	if(document.all) {
		cX += rX; 
		cY += rY;
		}
	// position verschieben wenn zu weit rechts
	var iw = window.getWinWidth();
	if (iw-width<cX) {
		cX = iw-width;
		};
	// position verschieben wenn zu weit rechts
	divEl.style.left = (cX+10) + "px";
	divEl.style.top = (cY+10) + "px";
	}


function calcPosition(width) {
	var pos = 0;
	pos = (window.innerwidth - width) / 2;
	return pos;
}

function loadMoreFactsheetImages(piclist) {
	var el = document.getElementById('speciessheetmoreimages');
	if ( el.style.display == 'none' ) {	el.style.display = 'block';}
	// piclist splitten
	var picarray = new Array();
	picarray = split(piclist);
	// Bilder einfügen
	//Ajax-Funktion für Einzelbildabholung per JSON einbauen
	
}

// Anzeige Detailmaske in Layer
function showDetails(gathdataId,projectpath) {
	hideElements('memberLayer');
	showElements('detailLayer','blanket');
	
	var x = document.getElementById('detailLayer');
	AssignPosition(x,650);
	var url = projectpath+'observation/show.do?doDetail&gathdataId='+gathdataId+'&panel';
	var panel = '<div id="detailContent"></div>';
	
	var closelink = "<div class='closelink'><a href='javascript:hideElements(\"detailLayer\",\"blanket\");' title=\"close\">[x]</a></div>";
	
	x.innerHTML= closelink + panel;
	loadContentSync(url,'detailContent');
}


//Anzeige Visitenkarte in Layer
function showMember(userId,projectpath) {
	showElements('memberLayer');
	var x = document.getElementById('memberLayer');
	AssignPosition(x,600);
	var url = projectpath+'member/card.do?user='+userId+'&panel';
	var panel = '<div id="memberContent">bitte warten ...</div>';
	var closelink = "<div class='closelink'><a href='javascript:hideElements(\"memberLayer\");'>[x]</a></div>";

	x.innerHTML= closelink + panel;
	loadContentSync(url,'memberContent');
}

// Formular zum Ändern des QS-Status
function changeQsStatus(gathdataId) {
	showElements('qseditLayer');
	var x = document.getElementById('qseditLayer');
	x.style.width = 400;
	x.style.height = 400;
	x.top = 50;
	var closelink = "<div class='closelink'><a href='javascript:hideElements(\"qseditLayer\");'>x</a></div>";
	x.innerHTML = "QS-Status" + closelink;
}


//Anzeige LoginLayer
function showLogin(projectname,projectpath) {
	showElements('loginLayer');
	var x = document.getElementById('loginLayer');
	x.style.left = calcPosition(x.style.width);
	var url = projectpath+'register/status.do?project='+projectname+'&panel';
	var panel = '<div id="loginContent">bitte warten ...</div>';
	var closelink = "<div class='closelink'><a href='javascript:hideElements(\"loginLayer\");'>[x]</a></div>";

	x.innerHTML= closelink + panel;
	loadContentSync(url,'loginContent');
}

//Anzeige Sprachumschaltung-Layer
function showLanguage(userId,projectpath) {
	showElements('languageLayer');
	var x = document.getElementById('languageLayer');
	x.style.left = calcPosition(x.style.width);
	var url = projectpath+'language.do?user='+userId+'&panel';
	var panel = '<div id="languageContent">bitte warten ...</div>';
	var closelink = "<div class='closelink'><a href='javascript:hideElements(\"languageLayer\");'>[x]</a></div>";

	x.innerHTML= closelink + panel;
	loadContentSync(url,'languageContent');
}

//Anzeige Funddaten-Layer
function showGathlist(projectpath,url) {
	showElements('gathlistLayer');
	var x = document.getElementById('gathlistLayer');
	x.style.left = calcPosition(x.style.width);
	var panel = '<div id="gathlistContent">' + i8nLabel["wait"]["deu"] + '</div>';
	var closelink = "<div class='closelink'><a href='javascript:hideElements(\"gathlistLayer\");'>[x]</a></div>";

	x.innerHTML= closelink + panel;
	loadContentSync(url,'gathlistContent');
}


//Anzeige Bildinformation in DIV
function showPicInfo(projectpath) {
	var imageId = document.getElementById('searchId').value;
	var x = document.getElementById('searchResult');
	x.innerHTML= "Bitte warten ... ich suche ...";
	var url = projectpath+'qscheck.do?doImage&id='+imageId+'&panel';
	var panel = '<div id="imageContent"></div>';
	x.innerHTML= panel;
	loadContentSync(url,'imageContent');
}

function showGathPicInfo(gathdataId,projectpath) {
	var x = document.getElementById('gdpic');
	var url = projectpath+'observation/show.do?doDetail&gathdataId='+gathdataId+'&panel';
	var panel = '<div id="imageContent2"></div>';
	x.innerHTML= panel;
	loadContentSync(url,'imageContent2');
}

// --- 9-2015: AJAX/JQuery Anzeigen





