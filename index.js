const dotenv =require('dotenv').config()
const {ApolloServer}=require('apollo-server')
const {makeExecutableSchema}=require('graphql-tools')
const {merge}=require('lodash')
const mongoose=require('mongoose')
const rootTypeDef=require('./root')


mongoose.connect(process.env.MOONGO_DB,{
    useNewUrlParser:true
})

const schema=makeExecutableSchema({
    typeDefs:[],
    resolvers:merge()
})

const server=new ApolloServer({
    schema,
    formatError(err){
        console.log(err)
        return err
    },
    async context({req}){
        const token=req && req.headers && req.headers.authorization
        if(token){
            const data=jwt.verfiy(token,process.env.TOP_SECRET)
            const user=data.id?await User.findById(data.id):null
            return {user}
        }
    },
})

server.listen().then(({url})=>{
    console.log('🌸 server is runnig on'+url)
})