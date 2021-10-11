import { callApi } from '../utils'

interface LoggedUserInfo{
    data:{
        data:{
            me:{
                id: string,
                email: string,
                blocked: boolean
            }
        }
    }
}

interface UserDetails{
  data:{
      data:{
          user:{
              firstName: string,
              lastName: string
          }
      }
  }
}
export default class User {
    defId: string
    defEmail: string
    defBlocked: boolean
    defFirstName: string
    defLastName: string

    constructor (defId: string, defEmail: string, defBlocked: boolean) {
      this.defId = defId
      this.defEmail = defEmail
      this.defBlocked = defBlocked
      this.defFirstName = ''
      this.defLastName = ''
    }

    static async getLoggedInUserFromToken (token: string) {
      const query = `
            query loggedInUserInfo{
                me{
                    id
                    email
                    blocked
                }
            }
        `

      const userInfo: LoggedUserInfo = await callApi({
        query,
        authorization: token
      })
      const { data: { data: { me: { id, email, blocked } } } } = userInfo

      return new User(id, email, blocked)
    }

    static async login (email: string, password: string) {
      const loginMutation = `
            mutation login($input:UsersPermissionsLoginInput!){
                login(input: $input){
                jwt
                user{
                    id
                    email
                    username
                    confirmed
                    blocked
                    role{
                    id
                    name
                    type
                    }
                }
                }
            }
        `
      return callApi({
        query: loginMutation,
        variables: {
          input: {
            identifier: email,
            password
          }
        }
      })
    }

    get id () { return this.defId }

    get email () { return this.defEmail }

    get blocked () { return this.defBlocked }

    get firstName () { return this.defFirstName }

    set firstName (newfirstName) {
      this.defFirstName = newfirstName
    }

    get lastName () { return this.defLastName }

    set lastName (newLastName) {
      this.defLastName = newLastName
    }

    async getUserDetails (token: string) {
      const query = `
        query userDetails($id: ID!) {
          user(id: $id){
            firstName
            lastName 
          }
        }
      `
      const userDetails: UserDetails = await callApi({
        query,
        authorization: token,
        variables: {
          id: this.id
        }
      })

      const { data: { data: { user } } } = userDetails
      this.firstName = user.firstName
      this.lastName = user.lastName
    }
}
