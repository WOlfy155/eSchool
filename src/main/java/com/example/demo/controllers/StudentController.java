package com.example.demo.controllers;

import com.example.demo.mappers.StudentMapper;
import com.example.demo.models.Student;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/students")
public class StudentController {

    private StudentMapper studentMapper;

    public StudentController(StudentMapper studentMapper) {
        this.studentMapper = studentMapper;
        this.studentMapper.defaultStudents();
    }



    @GetMapping("/all")
    public List<Student> getAll(){
        return studentMapper.getAll();
    }

    @GetMapping("/user")
    public boolean isUser(@RequestParam("username") String username,
                               @RequestParam("password") String password){
        return username.equals("admin") && password.equals("admin");
    }

    @PostMapping("/all")
    public void insertStudent( String first_name, String last_name, int grade,double gpa){
        Student student = new Student(first_name,last_name,grade,gpa);
        studentMapper.insert(student);

    }

    @DeleteMapping("/all/{id}")
    public void deleteStudent(@PathVariable("id") int id){
        System.out.println(id);
        studentMapper.delete(id);
    }

}
