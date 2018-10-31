export default class UserModel 
{
    signUp (firstName, lastName, email, password)
    {
        firebase.auth().createUserWithEmailAndPassword(email, password);
    }
    
}