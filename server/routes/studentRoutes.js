const express = require("express");
const { getAllStudents, addStudent, getStudentById,updateStudent ,deleteStudent}= require("../controllers/studentController");

const router= express.Router();

router.get("/",getAllStudents);
router.post("/",addStudent);
router.get("/:id",getStudentById);
router.put("/:id",updateStudent);
router.delete("/:id",deleteStudent);

module.exports = router;
