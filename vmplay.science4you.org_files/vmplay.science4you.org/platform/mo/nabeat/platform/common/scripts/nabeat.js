
function changeFormtype(x_basepath, x_formtype) {
	// nabeatWorkspaceGatheringAddForm
    var objForm = document.nabeatWorkspaceGatheringAddForm;
    var path = x_basepath + "/common/images/text/";
    objForm.cocoon.src = path + "text_cocoon_ger.gif";
    objForm.larve.src = path + "text_larve_ger.gif";
    objForm.egg.src = path + "text_egg_ger.gif";
    if (x_formtype == 1) {
        objForm.male.src = path + "text_male_ger.gif";
        objForm.elements["value(DATA_LIVE_IMG_MAL)"].readOnly = false;
        objForm.elements["value(DATA_DEAD_IMG_MAL)"].readOnly = false;
        objForm.female.src = path + "text_female_ger.gif";
        objForm.elements["value(DATA_LIVE_IMG_FEM)"].readOnly = false;
        objForm.elements["value(DATA_DEAD_IMG_FEM)"].readOnly = false;
        objForm.cocoon.src = path + "text_cocoon_ger.gif";
        objForm.elements["value(DATA_LIVE_COCOON)"].readOnly = false;
        objForm.elements["value(DATA_DEAD_COCOON)"].readOnly = false;
        objForm.larve.src = path + "text_larve_ger.gif";
        objForm.elements["value(DATA_LIVE_LARVE)"].readOnly = false;
        objForm.elements["value(DATA_DEAD_LARVE)"].readOnly = false;
        objForm.egg.src = path + "text_egg_ger.gif";
        objForm.elements["value(DATA_LIVE_EGG)"].readOnly = false;
        objForm.elements["value(DATA_DEAD_EGG)"].readOnly = false;
        objForm.live.src = path + "text_live_ger.gif";
        objForm.dead.src = path + "text_dead_ger.gif";
        objForm.elements["value(DATA_DEAD_IMG_WO)"].readOnly = false;
    }
    if (x_formtype == 2) {
        objForm.male.src = path + "text_male_ger.gif";
        objForm.elements["value(DATA_LIVE_IMG_MAL)"].readOnly = false;
        objForm.elements["value(DATA_DEAD_IMG_MAL)"].readOnly = false;
        objForm.female.src = path + "text_female_ger.gif";
        objForm.elements["value(DATA_LIVE_IMG_FEM)"].readOnly = false;
        objForm.elements["value(DATA_DEAD_IMG_FEM)"].readOnly = false;
        objForm.cocoon.src = path + "text_-_ger.gif";
        objForm.elements["value(DATA_LIVE_COCOON)"].readOnly = true;
        objForm.elements["value(DATA_DEAD_COCOON)"].readOnly = true;
        objForm.larve.src = path + "text_younganimal_ger.gif";
        objForm.elements["value(DATA_LIVE_LARVE)"].readOnly = false;
        objForm.elements["value(DATA_DEAD_LARVE)"].readOnly = false;
        objForm.egg.src = path + "text_egg_ger.gif";
        objForm.elements["value(DATA_LIVE_EGG)"].readOnly = false;
        objForm.elements["value(DATA_DEAD_EGG)"].readOnly = false;
        objForm.live.src = path + "text_live_ger.gif";
        objForm.dead.src = path + "text_dead_ger.gif";
        objForm.elements["value(DATA_DEAD_IMG_WO)"].readOnly = false;
    }
    if (x_formtype == 3) {
        objForm.male.src = path + "text_male_ger.gif";
        objForm.elements["value(DATA_LIVE_IMG_MAL)"].readOnly = false;
        objForm.elements["value(DATA_DEAD_IMG_MAL)"].readOnly = false;
        objForm.female.src = path + "text_female_ger.gif";
        objForm.elements["value(DATA_LIVE_IMG_FEM)"].readOnly = false;
        objForm.elements["value(DATA_DEAD_IMG_FEM)"].readOnly = false;
        objForm.cocoon.src = path + "text_-_ger.gif";
        objForm.elements["value(DATA_LIVE_COCOON)"].readOnly = true;
        objForm.elements["value(DATA_DEAD_COCOON)"].readOnly = true;
        objForm.larve.src = path + "text_larve_ger.gif";
        objForm.elements["value(DATA_LIVE_LARVE)"].readOnly = false;
        objForm.elements["value(DATA_DEAD_LARVE)"].readOnly = false;
        objForm.egg.src = path + "text_egg_ger.gif";
        objForm.elements["value(DATA_LIVE_EGG)"].readOnly = false;
        objForm.elements["value(DATA_DEAD_EGG)"].readOnly = false;
        objForm.live.src = path + "text_live_ger.gif";
        objForm.dead.src = path + "text_dead_ger.gif";
        objForm.elements["value(DATA_DEAD_IMG_WO)"].readOnly = false;
    }
    if (x_formtype == 4) {
        objForm.male.src = path + "text_male_ger.gif";
        objForm.elements["value(DATA_LIVE_IMG_MAL)"].readOnly = false;
        objForm.elements["value(DATA_DEAD_IMG_MAL)"].readOnly = false;
        objForm.female.src = path + "text_female_ger.gif";
        objForm.elements["value(DATA_LIVE_IMG_FEM)"].readOnly = false;
        objForm.elements["value(DATA_DEAD_IMG_FEM)"].readOnly = false;
        objForm.cocoon.src = path + "text_-_ger.gif";
        objForm.elements["value(DATA_LIVE_COCOON)"].readOnly = true;
        objForm.elements["value(DATA_DEAD_COCOON)"].readOnly = true;
        objForm.larve.src = path + "text_younganimal_ger.gif";
        objForm.elements["value(DATA_LIVE_LARVE)"].readOnly = false;
        objForm.elements["value(DATA_DEAD_LARVE)"].readOnly = false;
        objForm.egg.src = path + "text_-_ger.gif";
        objForm.elements["value(DATA_LIVE_EGG)"].readOnly = true;
        objForm.elements["value(DATA_DEAD_EGG)"].readOnly = true;
        objForm.live.src = path + "text_live_ger.gif";
        objForm.dead.src = path + "text_dead_ger.gif";
        objForm.elements["value(DATA_DEAD_IMG_WO)"].readOnly = false;
    }
    if (x_formtype == 5) {
        objForm.male.src = path + "text_-_ger.gif";
        objForm.elements["value(DATA_LIVE_IMG_MAL)"].readOnly = true;
        objForm.elements["value(DATA_DEAD_IMG_MAL)"].readOnly = true;
        objForm.female.src = path + "text_-_ger.gif";
        objForm.elements["value(DATA_LIVE_IMG_FEM)"].readOnly = true;
        objForm.elements["value(DATA_DEAD_IMG_FEM)"].readOnly = true;
        objForm.cocoon.src = path + "text_-_ger.gif";
        objForm.elements["value(DATA_LIVE_COCOON)"].readOnly = true;
        objForm.elements["value(DATA_DEAD_COCOON)"].readOnly = true;
        objForm.larve.src = path + "text_-_ger.gif";
        objForm.elements["value(DATA_LIVE_LARVE)"].readOnly = true;
        objForm.elements["value(DATA_DEAD_LARVE)"].readOnly = true;
        objForm.egg.src = path + "text_-_ger.gif";
        objForm.elements["value(DATA_LIVE_EGG)"].readOnly = true;
        objForm.elements["value(DATA_DEAD_EGG)"].readOnly = true;
        objForm.live.src = path + "text_specimen_ger.gif";
        objForm.dead.src = path + "text_-_ger.gif";
        objForm.elements["value(DATA_DEAD_IMG_WO)"].readOnly = true;
    }
    if (x_formtype == 6) {
        objForm.male.src = path + "text_-_ger.gif";
        objForm.elements["value(DATA_LIVE_IMG_MAL)"].readOnly = true;
        objForm.elements["value(DATA_DEAD_IMG_MAL)"].readOnly = true;
        objForm.female.src = path + "text_-_ger.gif";
        objForm.elements["value(DATA_LIVE_IMG_FEM)"].readOnly = true;
        objForm.elements["value(DATA_DEAD_IMG_FEM)"].readOnly = true;
        objForm.cocoon.src = path + "text_-_ger.gif";
        objForm.elements["value(DATA_LIVE_COCOON)"].readOnly = true;
        objForm.elements["value(DATA_DEAD_COCOON)"].readOnly = true;
        objForm.larve.src = path + "text_younganimal_ger.gif";
        objForm.elements["value(DATA_LIVE_LARVE)"].readOnly = false;
        objForm.elements["value(DATA_DEAD_LARVE)"].readOnly = false;
        objForm.egg.src = path + "text_egg_ger.gif";
        objForm.elements["value(DATA_LIVE_EGG)"].readOnly = false;
        objForm.elements["value(DATA_DEAD_EGG)"].readOnly = false;
        objForm.live.src = path + "text_live_ger.gif";
        objForm.dead.src = path + "text_shell_ger.gif";
        objForm.elements["value(DATA_DEAD_IMG_WO)"].readOnly = false;
    }
}




