importComponent("trailer");
importComponent("grid");

function importComponent(component) {

    if (!checkIfFileExists(`/components/${component}.html`)) {
        console.log(`Component ${component} does not exist`);
        return;
    }

    // // ----- iframe method ----- (styles and script tags are not loaded (bad))
    // var html = document.createElement("iframe");
    // html.src = `/components/${component}.html`;
    // document.body.appendChild(html);
    
    // ----- jquery method ----- (requires jquery to be imported in index.html)
    const componentName = component;
    var component = document.createElement("div");
    component.id = componentName;
    $ (function() {
        $(`#${componentName}`).load(`/components/${componentName}.html`);
    })
    document.body.appendChild(component);
}

function importScript(script) {

    if (!checkIfFileExists(`/scripts/${script}.js`)) {
        console.log(`Script ${script} does not exist`);
        return;
    }

    var script = document.createElement("script");
    script.src = `/scripts/${script}.js`;
    document.body.appendChild(script);
}

function checkIfFileExists(file) {
    try {
        var xhr = new XMLHttpRequest();
        xhr.open("HEAD", file, false);
        xhr.send();
        return xhr.status != 404;
    } catch (e) {
        return false;
    }
}