module.exports = {
  getalldays: (req, res) => {
    const UserId=req.params.UserId;
    res.status(200).json({
      message: "get all days",
    });
  },
  createdairies: (req, res) => {
    const UserId=req.params.UserId;
    res.status(200).json({
      message: "get all days",
    });
  },
  createdairies1: (req, res) => {
    const UserId=req.params.UserId;
    res.status(200).json({
      message: "get all days",
    });
  },
  deleteById:(req,res)=>{
    const UserId=req.params.UserId;
    res.status(200).json(
        {
            message:'delete all dairies'
        }
    )
}

};
