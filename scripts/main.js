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
    component.id = componentName + "-component";
    $ (function() {
        $(`#${componentName}-component`).load(`/components/${componentName}.html`);
    })
    document.body.appendChild(component);
}
// importComponent("trailer");
importComponent("clock")

function createApp() {

    const app = document.createElement("div");
    app.id = "app";

    $ (function() {
        $(`#app`).load(`/src/App.html`);
    })

    document.body.appendChild(app);
}
createApp();

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
