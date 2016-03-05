
function imgDispatchDelete(x_path, x_imageId, x_seq) {
    if (confirm("Wollen Sie das Bild wirklich aus der Rubrik entfernen?")) {
        document.location.href = x_path + "authors/speciessheet/imgdispatch.do?doDeleteTopictextImage&imageId=" + x_imageId + "&seq=" + x_seq;
    }
}
function imageDelete(x_path, x_imageId) {
    if (confirm("Wollen Sie das Bild wirklich aus dem Bilderpool l\ufffdschen?")) {
        document.location.href = x_path + "authors/speciessheet/ImageSelect.do?doDeleteImage&imageId=" + x_imageId;
    }
}
function imgDispatchPlate(x_path, x_topictextId, x_topicsId, x_ptnameId, x_projectpart, x_control) {
    var oWindow = null;
    var iWidth = 800;
    var iHeight = 750;
    oWindow = window.open(x_path + "authors/speciessheet/topictextImage.do?topictextId=" + x_topictextId + "&topicsId=" + x_topicsId + "&ptnameId=" + x_ptnameId + "&projectpart=" + x_projectpart + "&control=" + x_control, "POPUP_IMGDISPATCH", "dependent=yes,locationbar=no,menubar=no,scrollbars=yes,resizable=yes,status=yes,screenX=0,screenY=0,height=" + iHeight + ",width=" + iWidth);
    if (top.window.opener) {
        oWindow.opener = top.window.opener;
    }
    var posX = (screen.availWidth - iWidth) / 2;
    var posY = (screen.availHeight - iHeight) / 2;
    oWindow.moveTo(posX, posY);
    oWindow.focus();
}
function newslinkDelete(x_path, x_newslinksId) {
    if (confirm("Wollen Sie den News-Eintrag wirklich l\ufffdschen?")) {
        document.location.href = x_path + "admin/news/edit.do?doDelete&newslinksId=" + x_newslinksId;
    }
}
function newslinkEdit(x_path, x_newslinksId, x_category) {
    var oWindow = null;
    var iWidth = 800;
    var iHeight = 750;
    oWindow = window.open(x_path + "admin/news/edit.do?newslinksId=" + x_newslinksId + "&category=" + x_category, "POPUP_EDITORIAL", "dependent=yes,locationbar=no,menubar=no,scrollbars=no,resizable=no,status=no,screenX=0,screenY=0,height=" + iHeight + ",width=" + iWidth);
    if (top.window.opener) {
        oWindow.opener = top.window.opener;
    }
    var posX = (screen.availWidth - iWidth) / 2;
    var posY = (screen.availHeight - iHeight) / 2;
    oWindow.moveTo(posX, posY);
    oWindow.focus();
}
function setTopicsId(x_path) {
    var check = false;
    var topicsId = 0;
    for (i = 0; i < document.topicselect.topic.length; i++) {
        if (document.topicselect.topic[i].checked) {
            topicsId = document.topicselect.topic[i].value;
            check = true;
        }
    }
    if (check) {
        location.href = x_path + "authors/speciessheet/topictext.do?topicsId=" + topicsId;
    } else {
        alert("Sie m\ufffdssen eine Rubrik ausw\ufffdhlen!");
    }
}
function adminSpeciesAddList(x_path) {
    var oWindow = null;
    var iWidth = 800;
    var iHeight = 750;
    oWindow = window.open(x_path + "admin.do?doSpeciesAddList", "POPUP_EDITORIAL", "dependent=yes,locationbar=no,menubar=no,scrollbars=yes,resizable=yes,status=no,screenX=0,screenY=0,height=" + iHeight + ",width=" + iWidth);
    if (top.window.opener) {
        oWindow.opener = top.window.opener;
    }
    var posX = (screen.availWidth - iWidth) / 2;
    var posY = (screen.availHeight - iHeight) / 2;
    oWindow.moveTo(posX, posY);
    oWindow.focus();
}
function adminSpeciesDelete(x_path, x_ptnameId, x_projectId) {
    if (confirm("Wollen Sie das Taxon wirklich l\ufffdschen?")) {
        document.location.href = x_path + "admin/species/edit.do?doDelete&ptnameId=" + x_ptnameId + "&projectId=" + x_projectId;
    }
}
function adminSpeciesEdit(x_path, x_ptnameId, x_projectId) {
    var oWindow = null;
    var iWidth = 600;
    var iHeight = 650;
    oWindow = window.open(x_path + "admin/species/edit.do?ptnameId=" + x_ptnameId + "&projectId=" + x_projectId, "POPUP_EDITORIAL", "dependent=yes,locationbar=no,menubar=no,scrollbars=no,resizable=no,status=no,screenX=0,screenY=0,height=" + iHeight + ",width=" + iWidth);
    if (top.window.opener) {
        oWindow.opener = top.window.opener;
    }
    var posX = (screen.availWidth - iWidth) / 2;
    var posY = (screen.availHeight - iHeight) / 2;
    oWindow.moveTo(posX, posY);
    oWindow.focus();
}
function topictextDelete(x_path, x_topictextId, x_delaction) {
    if (confirm("Wollen Sie den Beitrag wirklich l\ufffdschen?")) {
        document.location.href = x_path + x_delaction + x_topictextId;
    }
}
function topictextEdit(x_path, x_topictextId) {
    var oWindow = null;
    var iWidth = 800;
    var iHeight = 750;
    oWindow = window.open(x_path + "authors/speciessheet/topictext.do?topictextId=" + x_topictextId, "POPUP_EDITORIAL", "dependent=yes,locationbar=no,menubar=no,scrollbars=no,resizable=no,status=no,screenX=0,screenY=0,height=" + iHeight + ",width=" + iWidth);
    if (top.window.opener) {
        oWindow.opener = top.window.opener;
    }
    var posX = (screen.availWidth - iWidth) / 2;
    var posY = (screen.availHeight - iHeight) / 2;
    oWindow.moveTo(posX, posY);
    oWindow.focus();
}
function topictextNew(x_path) {
    var oWindow = null;
    var iWidth = 800;
    var iHeight = 750;
    oWindow = window.open(x_path + "authors.do?doSelectTopic", "POPUP_EDITORIAL", "dependent=yes,locationbar=no,menubar=no,scrollbars=no,resizable=no,status=no,screenX=0,screenY=0,height=" + iHeight + ",width=" + iWidth);
    if (top.window.opener) {
        oWindow.opener = top.window.opener;
    }
    var posX = (screen.availWidth - iWidth) / 2;
    var posY = (screen.availHeight - iHeight) / 2;
    oWindow.moveTo(posX, posY);
    oWindow.focus();
}

function topictextDelete(text, actionpath, topictextId) {
    if (confirm(text)) {
        document.location.href = actionpath + "&topictextId=" + topictextId;
    }
}


function editorialDelete(x_path, x_topictextId) {
    if (confirm("Wollen Sie den Link wirklich l\ufffdschen?")) {
        document.location.href = x_path + "admin/editorial/edit.do?doDelete&topictextId=" + x_topictextId;
    }
}
function editorialEdit(x_path, x_topicsId, x_topictextId) {
    var oWindow = null;
    var iWidth = 800;
    var iHeight = 750;
    oWindow = window.open(x_path + "admin/editorial/edit.do?topicsId=" + x_topicsId + "&topictextId=" + x_topictextId, "POPUP_EDITORIAL", "dependent=yes,locationbar=no,menubar=no,scrollbars=no,resizable=no,status=no,screenX=0,screenY=0,height=" + iHeight + ",width=" + iWidth);
    if (top.window.opener) {
        oWindow.opener = top.window.opener;
    }
    var posX = (screen.availWidth - iWidth) / 2;
    var posY = (screen.availHeight - iHeight) / 2;
    oWindow.moveTo(posX, posY);
    oWindow.focus();
}
function linksDelete(x_path, x_topictextId) {
    if (confirm("Wollen Sie den Link wirklich l\ufffdschen?")) {
        document.location.href = x_path + "admin/linklist.do?doDelete&topictextId=" + x_topictextId;
    }
}
function linksEdit(x_path, x_topicsId, x_topictextId) {
    var oWindow = null;
    var iWidth = 800;
    var iHeight = 750;
    oWindow = window.open(x_path + "admin/linklist.do?topicsId=" + x_topicsId + "&topictextId=" + x_topictextId, "POPUP_EDITORIAL", "dependent=yes,locationbar=no,menubar=no,scrollbars=no,resizable=no,status=no,screenX=0,screenY=0,height=" + iHeight + ",width=" + iWidth);
    if (top.window.opener) {
        oWindow.opener = top.window.opener;
    }
    var posX = (screen.availWidth - iWidth) / 2;
    var posY = (screen.availHeight - iHeight) / 2;
    oWindow.moveTo(posX, posY);
    oWindow.focus();
}

