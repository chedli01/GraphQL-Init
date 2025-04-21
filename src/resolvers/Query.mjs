export const Query={
    hello: (parent,{name},context,info) => `hello from ${name} `,
    hi:()=> 'hi'

}