import * as dom from '../lib/dom.js';
import UserModel from '../models/UserModel.js';

export default class signupView
{
    onSignup()
    {
        // console.log('Ca se passe ici !');
        let userModel = new UserModel;
        let form = dom.getFormFields(['InputFirstName1', 'InputLastName1', 'InputEmail1', 'InputPassword1']);
        // console.log(form['InputEmail1', 'InputPassword1']);
        userModel.signUp(form['InputFirstName1'], form['InputLastName1'], form['InputEmail1'], form['InputPassword1'])
        
    }

    run()
    {
        // console.log('une view');
        dom.onClick("#signUp", this.onSignup)
    }
}