

const signup = async(e)=>{
    e.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // console.log( email, password);
  
  
  
   try {
    const results =  await firebase.auth().createUserWithEmailAndPassword(email, password);
    await results.user.updateProfile({
      displayName: "User"
    })
    createusercollection(results.user)
    await results.user.sendEmailVerification()
    console.log(results)
    alert(`Wellcom ${results.user.email}`)
  
   } catch (error) {
    console.log(error)
    alert(error.message)
   }
   email.value = ""
      email.password = ""
  }
  
  
  
  const Login = async(e)=>{
    e.preventDefault()
    const email = document.getElementById('Login_email').value;
    const password = document.getElementById('Login_password').value;
   //  console.log( email, password);
  
  
  
   try {
    const results =  await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log(results)
    alert(`successfully login ${results.user.email} `)
  
   } catch (error) {
    console.log(error)
    alert("valid_password")
   }
   email.value = ""
   email.password = ""
  }
  
  
  const logout = ()=>{
    firebase.auth().signOut()
  }
  
  const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      /// new used 
      //getuserinfo(user.uid)
      getuserinfoRealtime(user.uid)
    console.log(user)
    } else {
      console.log("logout user successfully")
      alert("logout user successfully")
      // getuserinfo(null)
      getuserinfoRealtime(null)
    }
  });