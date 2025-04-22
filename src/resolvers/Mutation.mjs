export const Mutation = {
    addUser:async (parent,{id,name,email},{db,pubsub},info) =>{
        const newUser={id,name,email}
        const result =  await db.collection('users').insertOne(newUser)
        pubsub.publish('user', {userAdded:newUser} )

        return newUser


    },
    updateUser: async (parent, { id, userInputUpdate }, context, info) => {
        await context.db.collection('users').updateOne({ id }, { $set: userInputUpdate });
        const updatedUser = await context.db.collection('users').findOne({ id });
        return updatedUser;
      }
}