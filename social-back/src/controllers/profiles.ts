import { dbClient } from "../config/db.js";
import {RequestHandler} from 'express'


// export async function getProfiles<RequestHandler>(_, res, next) {
//     try{
//         const users = await dbClient.query('SELECT * FROM profiles')
//         res.send(users.rows)
//     } catch(e){ 
//         next()
//     }finally{
//         res.end()
//     }
// }


export const getProfiles: RequestHandler = async (_, res, next) => {
    try{
        const users = await dbClient.query('SELECT * FROM profiles')
        res.send(users.rows)
    } catch(e){ 
        next()
    }finally{
        res.end()
    }
}

export const create = async (profileData: any) => {
    const query = {
        text: "INSERT INTO profile(username, email, password, password_salt) VALUES($1, $2, $3, $4) RETURNING *",
        values: [profileData.username, profileData.email, profileData.hashedPassword, profileData.salt]
    }
    return await dbClient.query(query)
}

// JUST CREATE A USER WITH A LOGIN
export const createProfile: RequestHandler = async (_, res) => {
    res.redirect(307, '/auth/sign-up');
    // const profileData = req.body

    // try{
    //     const users = await create(profileData)
    //     res.send(users.rows)
    // } catch(e){ 
    //     next()
    // }finally{
    //     res.end()
    // }
}

// JUST ADITIONAL INFO
export const updateProfile:RequestHandler = async (req, res, next) => {

    const profileData = req.body
    console.log("aca")
    try{
        const query = {
            text: "UPDATE profile set name=$2, lastname=$3, url_img=$4, bio=$5 where username=$1 RETURNING *",
            values: [profileData.username, profileData.name, profileData.lastname, profileData.url_img, profileData.bio]
        }
        const profileUpdated = await dbClient.query(query)
        console.log(profileUpdated)
        res.send(profileUpdated.rows)
    } catch(e){ 
        next()
    }finally{
        res.end()
    }
} 