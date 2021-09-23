let ERRORS = []

const countAccess = async(username, access) => {
    if (access) {
        let QuantityErrors = ERRORS.error
        ERRORS.pop()
        ERRORS.push({ error: QuantityErrors + 1, username: username })
        return ERRORS
    } else {
        ERRORS = 0
    }
}

module.exports = { countAccess, ERRORS }