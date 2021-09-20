package com.example.demo;

import com.example.demo.controllers.StudentController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.testng.Assert;
import org.testng.annotations.Test;

@SpringBootTest
public class MyTest extends AbstractTestNGSpringContextTests {
    @Autowired
    StudentController studentController;

    @Test
    void Mytest(){
        Assert.assertEquals(true,studentController.isUser("admin","admin"));
        Assert.assertNotEquals(true,studentController.isUser("notAdmin","notAdmin"));
    }
}
