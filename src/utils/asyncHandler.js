const asyncHandler = (requestHandler)=>{
   return (req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err));
    }
}










    //2nd Approach



//     const asyncHandler = (fn)=> async (req,res,next)=>{
// try {
//     await fn(req,res,next);
// } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal Server Error" });
//     next(error);
    
// }
//     }




export {asyncHandler}