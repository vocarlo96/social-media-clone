import { RequestHandler } from "express";
import { dbClient } from "../config/db";
import crypto from 'crypto'
// import passport from 'passport'
import {Strategy} from 'passport-local'
import { create } from "./profiles";

export const LocalStrategy = new Strategy(async (username, password, cb) => {
    const query = {
        text: 'SELECT * FROM profile WHERE username=$1',
        values: [username]
    }
    try{
        const res = await dbClient.query(query)

// separar password del user

        if(res.rowCount === 0) return cb(null, false, { message: 'Incorrect username or password.' })

        crypto.pbkdf2(password, res.rows[0].saltPassport, 310000, 32, 'sha256', function(err, hashedPassword) {
            if (err) { return cb(err); }
            if (!crypto.timingSafeEqual(res.rows[0].passport, hashedPassword)) {
              return cb(null, false, { message: 'Incorrect username or password.' });
            }
            return cb(null, res.rows[0]);
          });
    } catch(e){
        return cb(e)
    }
    
})

export const login: RequestHandler= ()=>{
    // passport.authenticate('local', {}, (authError: any, user: any) => {
    //     try {
    //         // if (authError) HttpErrorCreator.default();
    //         // if (!user) HttpErrorCreator.unauthorized();
    //         req.login(user, (loginError) => {
    //             // if (loginError) HttpErrorCreator.default();
    //             res.status(202).json({
    //                 message: 'Login succesfull',
    //                 user,
    //             });
    //         });
    //     } catch (error) {
    //         next(error);
    //     }
    // })(req, res, next)
}

export const singUp: RequestHandler = (req, res, next)=>{

    const {password} = req.body
    const salt = crypto.randomUUID()
    crypto.pbkdf2(password, salt, 310000, 32, "sha256", async (err, hashedPassword)=>{
        if (err) { return next(err); }
        
        const profileData = {...req.body, hashedPassword: hashedPassword.toString("hex"), salt}
        try{
            console.log('hi')
            const users = await create(profileData)
            res.send(users.rows)
        } catch(e){ 
            console.log(e)
            next()
        }finally{
            res.end()
        }
    })
}