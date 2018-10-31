import { config } from './config.js';
import * as mvc from './mvc.js';
import SignupController from '../controllers/SignupController.js';
import SignupView from '../views/SignupView.js';


document.addEventListener("DOMContentLoaded", function(event)
{
    
    firebase.initializeApp(config);
    // firebase.auth().createUserWithEmailAndPassword(email, password);
    mvc.initialize();
    mvc.addRoute('user/signup', new SignupController(), './signup.html', new SignupView());
    mvc.run();
    
});


    // let firstName = document.getElementById('InputFirstName1').value;
    // let lastName = document.getElementById('InputLastName1').value;
    // let email = document.getElementById('InputEmail1').value;
    // let password = document.getElementById('InputPassword1').value;

