// const { createUser } = require("auth/authentication")
module.exports = {
  resolvers: {
    Mutation: {
      // signup args: { email, password, firstName, lastName, zipcode } per schema
      signup: async (parent, args, context, info) =>
        await context.models.Authentication.signupUser(args),

      // requestPasswordChange args: { email } per schema
      requestPasswordChange: async (parent, args, context, info) =>
        await context.models.Authentication.requestPasswordChange(args),

      // validateFromCode args: { verificationCode } per schema
      validateFromCode: async (parent, args, context, info) =>
        await context.models.Authentication.verifyFromCode(args),

      refreshAccess: async (parent, args, context, info) => {},
    },
  },
}
