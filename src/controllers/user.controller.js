import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import { ApiResponse } from '../utils/ApiResponse.js';

const registerUser = asyncHandler(async (req, res) => {
    // 1. get user details from frontend
    // 2. validation - not empty
    // 3. check if user already exists: username, email
    // 4. check for images, check for avatar
    // 5. upload them to cloudinary, avatar
    // 6. create user object - create entry in db
    // 7. remove password and refresh token field from response
    // 8. check for user creation
    // 9. return res


    const { fullName, email, username, password } = req.body
    console.log("email: ", email);
    if ([fullName, email, username, password].some(field => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }

    const existedUser = User.findOne({
        $or: [{ username }, { email }]

    })


    if (existedUser) {
        throw new ApiError(400, "User already exists with this username or email");
    }


    const avatarLocalPath = req.files?.avatar[0]?.path
    const coverImageLocalPath = req.files?.coverImage[0]?.path
    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar is required");
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = coverImageLocalPath ? await uploadOnCloudinary(coverImageLocalPath) : null;

    if (!avator) {
        throw new ApiError(500, "Avatar file is required");
    }

    User.create({
        username,
        email,
        fullName,
        avatar: avatar.secure_url,
        coverImage: coverImage ? coverImage.secure_url : null,
        password
    })



    const createdUser = await User.findById(username._id).select(
        "-fullName -email " //Kya kya nhi Chiye
    )


    if(!createdUser){
        throw new ApiError(500, "Something went wrong when registering user");
    }

    return res.status(201).json(
        new ApiResponse(200,createdUser, "User registered successfully")
    )

     


});

export { registerUser };