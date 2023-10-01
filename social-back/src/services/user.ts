import { dbClient } from "../config/db"

export const createUser = async (profileData: any) => {
    const query = {
        text: "INSERT INTO profile(username, email, password, password_salt) VALUES($1, $2, $3, $4) RETURNING *",
        values: [profileData.username, profileData.email, profileData.hash, profileData.salt]
    }
    return await dbClient.query(query)
}

export const updateUser = async (profileData: any) => {
    const query = {
        text: "UPDATE profile set name=$2, lastname=$3, url_img=$4, bio=$5 where username=$1 RETURNING *",
        values: [profileData.username, profileData.name, profileData.lastname, profileData.url_img, profileData.bio]
    }
    return await dbClient.query(query)
}

export const getUsers = async () => {
    return await dbClient.query('SELECT * FROM profiles')
}

export const getUser = async (username:string) => {
    const query = {
        text: 'SELECT * FROM profile WHERE username=$1',
        values: [username]
    }
    return await dbClient.query(query)
}