export const userTypeDefs=`
    type User{
        name:String!,
        fbId:String!,
        email:String!,
        image:String!,
        cl:[String]!
    }

    extend type Query{
        users
    }
`