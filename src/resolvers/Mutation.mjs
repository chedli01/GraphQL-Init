export const Mutation = {
    addUser:async (parent,{id,name,email},context,info) =>{
        const newUser={id,name,email}
        const result =  await context.db.collection('users').insertOne(newUser)
        return newUser


    },
    updateUser: async (parent, { id, userInputUpdate }, context, info) => {
        await context.db.collection('users').updateOne({ id }, { $set: userInputUpdate });
        const updatedUser = await context.db.collection('users').findOne({ id });
        return updatedUser;
      }
}