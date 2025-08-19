exports.getHomePage= (req,res,next) =>{
    res.status(200).json(
        {
            "message":"This is the home Page"
        }
    )
}