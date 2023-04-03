const Course = require("../models/courseModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");


exports.getAllCourses = catchAsync(async (req, res, next) => {
    const courses = await Course.find();
    res.status(200).json({
        status: "success",
        results: courses.length,
        data: {
            courses,
        },
    });
});