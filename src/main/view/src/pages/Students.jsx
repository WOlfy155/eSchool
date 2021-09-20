import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import '../styles/App.css'
import {useHistory} from "react-router-dom";
import {AuthContext} from "../context";



const Students = () => {

    const [students, setStudetns] = useState([]);
    const router = useHistory();
    const {isAuth, setAuth} = useContext(AuthContext);

    const getStudents = event =>{
        axios.get("http://localhost:8080/students/all").then(res =>{
            setStudetns(res.data);
        })
    }
    const deleteStudent = (id) => {

        axios.delete('http://localhost:8080/students/all/'+id);
        window.location.reload();
    }

    useEffect(() =>{
        getStudents()
    },[])
    useEffect(()=>{

    },[])



    return (
        <div >
            <h1 style={{marginTop:"3em"}}>Список Учащихся</h1>

            <div className="Mybtns">
                <button style={{marginLeft:'35em', height:'3em',width:'6em'}} onClick={() => router.push("/new")}>Добавить Ученика</button>
                <button style={{marginLeft:'1em', height:'3em',width:'6em'}} onClick={() => {
                    setAuth(false);
                    localStorage.removeItem('auth');
                }}>Выйти</button>
            </div>

            <table className={"table"}>
                <thead>
                <tr>

                    <td>Student id</td>
                    <td>Student First name</td>
                    <td>Student Last name</td>
                    <td>Student grade</td>
                    <td>Student gpa</td>

                </tr>
                </thead>
                <tbody>
                {
                    students.map(
                        (student,index) =>
                            <tr key={index}>
                                <td >{student.id}</td>
                                <td>{student.first_name}</td>
                                <td>{student.last_name}</td>
                                <td>{student.grade}</td>
                                <td>{student.gpa}</td>
                                <td className={"td_btns"}  id={student.id}>
                                    <button   onClick={() => deleteStudent(student.id)} >Удалить</button>
                                </td>
                            </tr>
                    )
                }
                </tbody>

            </table>
        </div>
    )
};

export default Students;