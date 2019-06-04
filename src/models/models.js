const { authentication } = require("./authentication");

module.exports = {
    models: ({ user }) => ({
        Authentication: authentication()
    })
}