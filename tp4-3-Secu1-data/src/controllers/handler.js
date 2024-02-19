export const getAuthHandler = function (req, rep) {

    // Il faut mettre des trucs ici...

    // return rep.send("Il faut mettre des trucs avant")

    try {
        // Access user information from req.user (provided by your authentication middleware)
        const { email, role } = req.user;

        // Define the access message based on the user's role
        let accessMessage;
        if (role === 'admin') {
            accessMessage = 'Full access';
        } else if (role === 'utilisateur') {
            accessMessage = 'Accès limité';
        } else {
            accessMessage = 'Unknown access';
        }

        // Return an object containing user information and the access message
        return rep.send({
            user: { email, role },
            accessMessage,
        });
    } catch (err) {
        // Handle any errors that might occur during user information retrieval
        return rep.send({
            error: 'Error retrieving user information',
        });
    }
}

export const getHomeHandler = (req, res) => {
    return res.send({'hello': 'world'})
}