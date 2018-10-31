import { config } from './config.js';
import * as mvc from './mvc.js';

function initializeRouter()
{
    let router = new Router({
        mode: 'hash'
    });
    
    router.add('Hello', function ()
    {
        mvc.renderView('hello.html');
    });
    
    router.addUriListener().check();
};

document.addEventListener("DOMContentLoaded", function(event)
{
    firebase.initializeApp(config);
    // firebase.auth().createUserWithEmailAndPassword(email, password);
    initializeRouter();

});
