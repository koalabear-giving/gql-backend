const { AuthenticationError } = require('apollo-server');

module.exports = {
    authorization: () => ({
        authorizeAdminOnly: (user) => {
            if (!user || !user.roles.includes("admin")) throw AuthenticationError("You must be an admin user.")
            return true;
        },
        requestPWChange: (email) => {
            return {
                success: true
            }
        }
    })
}