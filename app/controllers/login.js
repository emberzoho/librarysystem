import Controller from '@ember/controller';

export default Controller.extend({
		actions:{
	sendPasswordReset() {
      var email = this.get('email');
      firebase.auth().sendPasswordResetEmail(email).then(function() {
        alert('Password Reset Email Sent!');
      }).catch(function(error) {
        
        var errorCode = error.code;
        var errorMessage = error.message;
        
        if (errorCode == 'auth/invalid-email') {
          alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
          alert(errorMessage);
        }
        console.log(error);
        
      });
      
    },
    toggleSignIn() {
      if (firebase.auth().currentUser) {
        
        firebase.auth().signOut();
        
      } else {
        var email = this.get('email');
        var password = this.get('password');
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }
        
        firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{this.transitionToRoute('library.books');
            this.setProperties({
              email:'',
              password:''
            });

        }).catch(function(error) {
          
          var errorCode = error.code;
          var errorMessage = error.message;
          
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          
        });
        
        
      }
      
    }
},
});
