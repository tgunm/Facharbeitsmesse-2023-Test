// Get the root element
var r = document.querySelector(':root');

let colorPickerBg;
let colorPickerMain;
let colorPickerSecondary;
let colorPickerAccent;
let reserBtn;
let borderRadius;
let textSize;


const colors = {
    "--body-color": "#ffffff",
    "--main-color": "#7ea3c9",
    "--secondary-color": "#ffffff",
    "--accent-color":"#0064af",
    "--text-color": "#000000"
};

const rest_settings = {
    "--border-radius-px": 15,
    "--p-font-size": 18
};

const color_input_ids_css_vars = {
    "bgcolor": "--body-color",
    "maincolor": "--main-color", 
    "secondarycolor": "--secondary-color", 
    "accentcolor": "--accent-color",
    "textcolor": "--text-color"
};

const rest_settings_input_ids_css_vars = {
    "borderradius": "--border-radius-px",
    "textsize": "--p-font-size"
};

window.addEventListener("load", startup, false);

function startup() {
    // sessionStorage
    for (const key in colors) {
        if (sessionStorage.getItem(key) !== null) {
            null;
        } else {
            sessionStorage.setItem(key, colors[key]);
        }
    };

    for (const key in rest_settings) {
        if (sessionStorage.getItem(key) !== null) {
            null;
        } else {
            sessionStorage.setItem(key, rest_settings[key]);
        }
    };

    setColorsFromStorage();
    setRestFromStorage();

    // color settings
    reserBtn = document.querySelector("#resetcolor");
    reserBtn.addEventListener("onclick", resetColors, false);

    colorPickerBg = document.querySelector("#bgcolor");
    colorPickerBg.addEventListener("input", function () {setColor("bgcolor");}, false);

    colorPickerMain = document.querySelector("#maincolor");
    colorPickerMain.addEventListener("input", function () {setColor("maincolor");}, false);

    colorPickerSecondary = document.querySelector("#secondarycolor");
    colorPickerSecondary.addEventListener("input", function () {setColor("secondarycolor");}, false);

    colorPickerAccent = document.querySelector("#accentcolor");
    colorPickerAccent.addEventListener("input", function () {setColor("accentcolor");}, false);

    colorPickerText = document.querySelector("#textcolor");
    colorPickerText.addEventListener("input", function () {setColor("textcolor");}, false);

    // settings rest
    borderRadius = document.querySelector("#borderradius");
    borderRadius.addEventListener("input", function () {setSizeWithPx("borderradius")}, false);

    textSize = document.querySelector("#textsize");
    textSize.addEventListener("input", function () {setSizeWithPx("textsize")}, false);
}

// color settings
function setColor(field_id) {
    const current_elem = document.getElementById(field_id);
    const current_value = current_elem.value;
    current_elem.setAttribute("value", current_value);
    r.style.setProperty(color_input_ids_css_vars[field_id], current_value);
    sessionStorage.setItem(color_input_ids_css_vars[field_id], current_value);
}

function setColorsFromStorage() {
    for (const key in colors) {
        r.style.setProperty(key, sessionStorage.getItem(key))
    }

    for (const [key, storage_key] of Object.entries(color_input_ids_css_vars)) {
        document.getElementById(key).setAttribute("value", sessionStorage.getItem(storage_key));
    }
}

function resetColors() {
    for (const [key, value] of Object.entries(colors)) {
        r.style.setProperty(key, value)
        sessionStorage.setItem(key, value)
    }

    for (const [key, value] of Object.entries(color_input_ids_css_vars)) {
        document.getElementById(key).setAttribute("value", colors[value]);
    }
}

// settings rest
function setSizeWithPx(field_id) {

    const current_value = document.getElementById(field_id).value
    console.log(current_value, rest_settings_input_ids_css_vars[field_id])
    r.style.setProperty(rest_settings_input_ids_css_vars[field_id], current_value + "px")
    sessionStorage.setItem(rest_settings_input_ids_css_vars[field_id], current_value)
}

function resetRest() {
    for (const [key, value] of Object.entries(rest_settings)) {
        r.style.setProperty(key, value + "px")
        sessionStorage.setItem(key, value)
    }

    for (const [key, value] of Object.entries(rest_settings_input_ids_css_vars)) {
        document.getElementById(key).setAttribute("value", rest_settings[value]);
    }
}

function setRestFromStorage() {
    for (const key in rest_settings) {
        r.style.setProperty(key, sessionStorage.getItem(key) + "px")
    }

    for (const [key, storage_key] of Object.entries(rest_settings_input_ids_css_vars)) {
        document.getElementById(key).setAttribute("value", sessionStorage.getItem(storage_key));
    }
}

