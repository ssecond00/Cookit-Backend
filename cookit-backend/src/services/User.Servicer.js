// Saving the context of this module inside the _the variable
_this = this

// Async function to get the User List
exports.getUserByMail = async function (query, page, limit) {

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }

    // Try Catch the awaited promise to handle the error 
    try {
        console.log("GetUserByMail --> ",query)
        //var Users = await User.paginate(query, options)

        var Users = 'Endpoint GetUsersByMail';
        // Return the Userd list that was retured by the mongoose promise
        return Users;

    } catch (e) {
        // return a Error message describing the reason 
        console.log("error services",e)
        throw Error('Error while Paginating Users');
    }
}