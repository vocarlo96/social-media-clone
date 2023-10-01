import { getUsers, updateUser } from "../services/user.js";
import {RequestHandler} from 'express'

export const getProfiles: RequestHandler = async (_, res, next) => {
    try{
        const users = await getUsers()
        res.send(users.rows)
    } catch(e){ 
        next()
    }finally{
        res.end()
    }
}

// JUST CREATE A USER WITH A LOGIN
export const createProfile: RequestHandler = async (_, res) => {
    res.redirect(307, '/auth/sign-up');
}

// JUST ADITIONAL INFO
export const updateProfile:RequestHandler = async (req, res, next) => {
    const profileData = req.body
    try{
        const profileUpdated = await updateUser(profileData)
        res.send(profileUpdated.rows)
    } catch(e){ 
        next()
    }finally{
        res.end()
    }
} 