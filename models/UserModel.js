export default class UserModel 
{
    signUp (firstName, lastName, email, password)
    {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(){
            // Add a new document with a generated id
            firebase.firestore().collection("User").add({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            })
        })
    }

}