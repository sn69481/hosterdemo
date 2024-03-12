const db = require("../models/index");
const Student = db.students;
const Op = db.Sequelize.Op;

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    return res.status(200).json({students});
  } catch (error) {
    res.status(500).json({
      message: err.message || "Some error occurred while retriving Students.",
    });
  }
};

const addStudent = async (req, res) => {
  try {
    const { name, email, mobile } = req.body;
    console.log(name,email,mobile);
    if (!name || !email || !mobile) {
      res.status(400).json({
        message: "All Student Details are mandatory!",
      });
      return;
    }

    const student = {
      name,
      email,
      mobile,
    };

    const savedStudent = Student.create(student);
    res.status(201).json({student:savedStudent});
  } catch (error) {
    res.status(500).json({
      message: err.message || "Some error occurred while creating the Student.",
    });
  }
};

const getStudentById=async(req,res)=>{
  try {
    const id= req.params.id;
    if(!id) return res.status(400).json({message:"please provide student id"});
    
    const student = await Student.findByPk(id);
    if(student) return res.status(200).json({student});
    res.status(400).json({message:"cannot find student with given id"});
  } catch (error) {
    res.status(500).json({
      message: err.message || "Some error occurred while retriving Student.",
    });
  }
}

const updateStudent=async(req,res)=>{
  try {
    const id= req.params.id;
    if(!id) return res.status(400).json({message:"please provide student id"});
    
    const updated = await Student.update(req.body, {
      where: { id }
    });
    if(updated==1) return res.status(200).json({message:"student successfully updated"});

    res.status(400).json({message:"cannot find student with given id"});
  } catch (error) {
    res.status(500).json({
      message: err.message || "Some error occurred while retriving Student.",
    });
  }
}


const deleteStudent=async(req,res)=>{
  try {
    const id= req.params.id;
    if(!id) return res.status(400).json({message:"please provide student id"});
    
    const deleted = await Student.destroy({
      where: { id }
    });
    if(deleted) return res.status(200).json({message:"Stuidet deleted Successfully"});

    res.status(400).json({message:"cannot find student with given id"});
  } catch (error) {
    res.status(500).json({
      message: err.message || "Some error occurred while retriving Student.",
    });
  }
}
module.exports = { getAllStudents, addStudent, getStudentById,updateStudent ,deleteStudent};
