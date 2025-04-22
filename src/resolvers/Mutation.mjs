export const Mutation = {
    addUser:async (parent,{id,name,email},context,info) =>{
        const newUser={id,name,email}
        const result =  await context.db.collection('users').insertOne(newUser)
        return newUser


    }
}