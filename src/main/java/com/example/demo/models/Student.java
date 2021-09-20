package com.example.demo.models;

public class Student {

    private int id;
    private String first_name;
    private String last_name;
    private int grade;
    private double gpa;

    public Student() {
    }



    public Student(String first_name, String last_name, int grade, double gpa) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.grade = grade;
        this.gpa = gpa;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    public double getGpa() {
        return gpa;
    }

    public void setGpa(double gpa) {
        this.gpa = gpa;
    }
}
