export const Query={
    hello: (parent,{user},context,info) => `hello from ${user.name} with ${user.id} `,
    hi:async (parent,args,context,info)=> {
        const users = await context.db.collection('users').find().toArray()
      return `Hello from DB! Total users: ${users.length}` 
    },
    getUsers:async (parent,args,{db},info)=>{
        return await db.collection('users').find().toArray()

    },
    getUser:async (parent,{id},{db},info)=>{
        return await db.collection('users').findOne({id})
    }

}