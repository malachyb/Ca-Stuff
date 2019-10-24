let message = "Healthy as a bean!!!";
let image = "https://ph-files.imgix.net/caf5608a-67ec-4f9f-acb5-db0052c33bed?auto=format"


document.body.innerHTML += '<div id="sick-counter" style="position: fixed; top: 60px; right: 10px; z-index: 2000; padding: 10px;' +
    'border-radius:3px;font-size:25px; background: white none repeat scroll 0 0; margin: 2px; cursor: pointer; border: 3px solid red;">' +
    '<img src="' + image + '"> ' + message + '</img> </div>';

