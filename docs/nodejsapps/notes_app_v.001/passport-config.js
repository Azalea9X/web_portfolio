const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

async function initialize(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (email, password, done) => {
    const user = await getUserByEmail(email);
    if (!user) return done(null, false, { message: 'No user with that email' });

    const getUserById = () => {
        await 
    }
    try {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) return done(null, user, { message: 'Logged in' });
      else return done(null, false, { message: 'Password incorrect' });
    } catch (e) {
      return done(e);
    }
  };

  passport.serializeUser((user, done) => {
    // Implement user serialization logic 

    done(null, user.id); // Replace 'user.id' with the actual user ID value
  });

  passport.deserializeUser((id, done) => {
    // Implement user deserialization logic here
return done(null, getUserById(id)) // Replace 'getUserById(id)' with the actual function to get the user by ID  

});

  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        
      },
      authenticateUser
    )
  );
}

module.exports = initialize;
