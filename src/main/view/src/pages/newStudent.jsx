import React, {Component, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import axios from "axios";
import {useHistory} from "react-router-dom";


const NewStudent = () => {

    const [student, setStudent] = useState({first_name:'',last_name:'',grade:0,gpa:0.0});
    const router = useHistory();

    const submitStudent = event =>{
            event.preventDefault();

            const formData = new FormData();
            formData.append("first_name",student.first_name);

            const formData2 = new FormData();
            formData.append("last_name",student.last_name);

            const formData3 = new FormData();
            formData.append("grade",student.grade);

            const formData4 = new FormData();
            formData.append("gpa",student.gpa);

            axios.post("http://localhost:8080/students/all",formData);
            axios.post("http://localhost:8080/students/all",formData2);
            axios.post("http://localhost:8080/students/all",formData3);
            axios.post("http://localhost:8080/students/all",formData4);
            axios.get("http://localhost:8080/students/all");
            window.location.reload();
            router.push("/students");
    }

    const firstNameChange = event =>{
        student.first_name = event.target.value;
    }
    const lastNameChange = event =>{
        student.last_name = event.target.value;
    }
    const gradeChange = event =>{
        student.grade = event.target.value;
    }
    const gpaChange = event =>{
        student.gpa = event.target.value;
    }

        return(
            <div>
                <Form onSubmit={submitStudent}>
                    <h1>Создание нового ученика</h1>
                    <div className="newForm">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name="first_name"
                                      onChange={firstNameChange}/>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="last_name"
                                      onChange={lastNameChange}/>
                        <Form.Label>Grade</Form.Label>
                        <Form.Control type="text" name="grade"
                                      onChange={gradeChange}/>
                        <Form.Label>gpa</Form.Label>
                        <Form.Control type="text" name="gpa"
                                      onChange={gpaChange}/>
                    </div>
                <Button  style={{marginLeft:"11em",  marginTop:"3em ",  width:"5em", height:"3em"}} variant="success" type="submit"> Submit </Button>
                </Form>
            </div>
        )


}


export default NewStudent;