import {Express, Request, Response, NextFunction, Router} from 'express';
import passport from "passport";
import { GoogleOneTapStrategy } from "passport-google-one-tap";
import { UserDocument } from "./models/user.model"
import { User } from './models';

export const initGoogleOneTapAuth = () => {
  passport.use( 
    new GoogleOneTapStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        verifyCsrfToken: false,
      },
      async (profile, done) => {
        console.log(profile);
        
        let user = await User.findOne({ email: profile.emails?.[0].value });
        if (!user) {
          user = new User({
            email: profile.emails?.[0].value,
            avatar: profile?.photos?.[0].value,
            name: profile.displayName,
          });
  
          await user.save();
        }

        return done(null, user);
      }
    )
  );

  passport.serializeUser(function({id, name, emails}: any, cb) {
    process.nextTick(function() {
      return cb(null, {id, name, emails});
    });
  });
  
  passport.deserializeUser(function(user: UserDocument, cb) {
    process.nextTick(function() {
      console.log(user);
      return cb(null, user);
    });
  });
}


const router = Router();

export const authGuard = router.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.user);
  
  if (!req.isAuthenticated()) {
    return res.sendStatus(401);
  }

  next();
});
