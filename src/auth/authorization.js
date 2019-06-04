import { AuthenticationError } from 'apollo-server'

export default {
  authorization: () => ({
    authorizeAdminOnly: user => {
      if (!user || !user.roles.includes('admin'))
        throw AuthenticationError('You must be an admin user.')
      return true
    },
    requestPWChange: email => {
      return {
        success: true,
      }
    },
  }),
}
