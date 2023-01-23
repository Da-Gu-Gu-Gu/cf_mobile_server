const dotenv=require('dotenv').config()
const {AppolloServer}=require('apollo-server')
const mongoose=require('mongoose')
// console.log('hi')
// SFeVQaAoeiaaOlLT

console.log(process.env.MONGOSE_DB)

const typeDefs=require('./graphql/typeDefs')
const resolvers=require('./graphql/resolvers')

const server=new AppolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(process.env.MONGOSE_DB,{
    useNewUrlParser:true
}).then(()=>{
    console.log('success')
    return server.listen({port:5000})
}).then(res=>{
    console.log(`runnion on ${res.url}`)
}).catch((err)=>{
    console.log(err)
})