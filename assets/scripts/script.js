// Link Handling
function openInternal(url) {
    window.open(url, "_self");
}
function openExternal(url, trusted) {
    if (trusted != 1) {
        if (window.confirm("You are about to be directed to an external site, wish to continue?\n\nSite Link: " + url)) {
            window.open(url, "_blank");
        }
    } else {
        window.open(url, "_blank");
    }
}
function copyEmail(text) {
    window.alert('Email "' + text + '" copied to clipboard');
    navigator.clipboard.writeText(text);
}

function copyDiscUser(text) {
    window.alert('Discord Name "' + text + '" copied to clipboard');
    navigator.clipboard.writeText(text);
}
// Rigs.html
lib = "assets/lib"
function openSACR(branch, ver, source, modifier) {
    version = branch + ver
    if (modifier == null) {
        file = "SACR_" + version + ".blend"
    } else {
        modifier = "_" + modifier
        file = "SACR_" + version + modifier + ".blend"
    }

    var sacrPath
    switch (source) {
        case "local":
            sacrPath = lib + "/SACR/" + version + "/" + file;
            break;
        case "git":
            sacrPath = "https://github.com/SakuraSedaia/SACR-MC-Rig/releases/tag/" + version;
            break;
    }

    window.open(sacrPath, "_blank");
    console.info(sacrPath);
}

function openAddon(file, source) {
    console.info("Downloading " + file);
    var addonPath 
    switch (source) {
        case "local":
            addonPath = lib + "/Rig_GUI/" + file + ".zip"
            break;
        case "blend":
            addonPath = null
            break;
    }

    
    window.open(addonPath, "_blank");
    console.info(addonPath);
}


let mdPath = "assets/docs/"
function openMarkdown(md) {
    if (md == null) {
        window.alert("File does not exist")
    } else {
        window.open(mdPath + md, "_blank", "width=800px")
    }
}

var catList = document.getElementsByClassName('catagory')
var ico;
function expandCatagory(index) {
    ico = catList[index].childNodes[1].childNodes[3]
    if (ico.getAttribute('active') == "false") {
        ico.setAttribute('active', true)
        catList[index].setAttribute('expanded', true);
    } else {
        ico.setAttribute('active', false)
        catList[index].setAttribute('expanded', false);
    }
}