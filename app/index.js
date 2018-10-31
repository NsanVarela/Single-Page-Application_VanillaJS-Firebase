import { config } from './config.js';
import * as mvc from '../lib/mvc.js';
import SignupView from '../views/SignupView.js';


document.addEventListener("DOMContentLoaded", function(event)
{
    
    firebase.initializeApp(config);
    mvc.initialize();
    mvc.addRoute({
        url: 'user/signup', 
        template: './signup.html', 
        view: new SignupView()
    });
    mvc.run();
    
});

