

importScript("trailer");
importScript("grid");

function importScript(script) {
	var imported = document.createElement("script");
	imported.src = `/scripts/${script}.js`;
	document.head.appendChild(imported);
}

function importStyle(style) {
    var imported = document.createElement("link");
    imported.href = `/styles/${style}.css`;
    imported.rel = "stylesheet";
    document.head.appendChild(imported);
}

function importHTML(html) {
    var imported = document.createElement("link");
    imported.href = `/html/${html}.html`;
    imported.rel = "import";
    document.head.appendChild(imported);
}

function importComponent(component) {
    importHTML(component);
    importStyle(component);
    importScript(component);
}

function checkIfFileExists(file) {
    var http = new XMLHttpRequest();
    http.open('HEAD', file, false);
    http.send();
    return http.status != 404;
}

console.log(checkIfFileExists("/scripts/trailer.js"));