import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.models.js";
import ApiErrorHandling from "../utils/ApiErrorHandling.js";
import ApiResponseHander from "../utils/ApiResponceHandler.js";


const registerUser = asyncHandler(async (req, res, next) => {
    //step 1: Validate the request body
    const { fullName, email, password } = req.body;

    //step 2: Check if the required fields are present
    if (!fullName) {
        return next(new ApiErrorHandling("Full name is required", 400));
    }

    if (!email) {
        return next(new ApiErrorHandling("Email is required", 400));
    }

    //step 3: Validate the email format
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return next(new ApiErrorHandling("Invalid email format", 400));
    }

    if (!password) {
        return next(new ApiErrorHandling("Password is required", 400));
    }

    const user = await User.create({
        fullName,
        email,
        password
    });

    return ApiResponseHander.success(res, user, "User registered successfully", 201);
});

export { registerUser };