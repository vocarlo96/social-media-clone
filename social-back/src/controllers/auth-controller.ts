import { RequestHandler } from "express";

import passport from "passport";
import {Strategy} from 'passport-local' 
import { genPassword, validPassword } from "../utils/password";
import { createUser, getUser } from "../services/user";

export const LocalStrategy = new Strategy(async (username, password, done) => {
    // user servicie
    try{
        const res = await getUser(username)

        // user not found
        if(res.rowCount === 0) 
            return done(null, false, { message: 'Incorrect username or password.' })

        const itsValidPassword = validPassword(password, res.rows[0].password, res.rows[0].password_salt)
        // invalid password
        if (!itsValidPassword) {
            return done(null, false, { message: 'Incorrect username or password.' });
        }

        //log-in success
        return done(null, res.rows[0]);

    } catch(err){
        console.log(err)
        return done(err)
    }
    
})

export const login: RequestHandler= (req, res, next)=>{
    passport.authenticate('local')(req, res, next)
}

export const singUp: RequestHandler = async (req, res, next)=>{

    const {password} = req.body
    const {hash, salt} = genPassword(password)
    const profileData = {...req.body, hash, salt}
    try{
        const users = await createUser(profileData)
        res.send(users.rows)
    } catch(err){ 
        console.log(err)
        next()
    }finally{
        res.end()
    }
}