import { passport } from 'passport';
import GoogleStrategy from ('passport-google-oauth20');
import { GOOGLE_CLIENTE_ID, GOOGLE_CLIENTE_SECRET } from '../utils/secrets';
import User from '../models/user_models';
import { access } from 'fs/promises';
import { profile } from 'console';

const googleStrategy = GoogleStrategy.Strategy

passport.serializeUser((user,done)=>{
    done(null, user.id);
});

passport.deserializaUser(async(id, done)=>{
    try{
        const user = await User.findById(id);
        done(null, user);
    }catch(err){
        done(err, null)
    }
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({ googleId: profile.id });
      
      if (!user) {
        // Usuario nuevo: crea registro sin rol
        user = await User.create({
          googleId: profile.id,
          email: profile.emails[0].value,
          name: profile.displayName,
          isNewUser: true, // 👈 Marca como nuevo
        });
      }
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  }));