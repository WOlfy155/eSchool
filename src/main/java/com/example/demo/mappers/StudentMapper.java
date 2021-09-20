package com.example.demo.mappers;

import com.example.demo.models.Student;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface StudentMapper {
    @Select("SELECT * FROM students")
    List<Student> getAll();

    @Insert("INSERT INTO students(first_name,last_name,grade,gpa) Values(#{first_name},#{last_name},#{grade},#{gpa})")
    void insert(Student student);

    @Delete("DELETE FROM students WHERE id = #{id}")
    void delete(int id);


    @Insert("CREATE TABLE IF NOT EXISTS public.students\n" +
            "(\n" +
            "    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),\n" +
            "    first_name character varying COLLATE pg_catalog.\"default\",\n" +
            "    last_name character varying COLLATE pg_catalog.\"default\",\n" +
            "    grade integer,\n" +
            "    gpa real\n" +
            ");" +
            "INSERT INTO public.students(\n" +
            "\tfirst_name, last_name, grade, gpa)\n" +
            "\tVALUES ( 'Иван', 'Морозов', 3, 4.5),\n" +
            "\t( 'Михаил', 'Смирнов', 5, 4.0),\n" +
            "\t( 'Илья', 'Киселев', 6, 3.5),\n" +
            "\t( 'Кольцова', 'Ирина', 2, 2.5),\n" +
            "\t( 'Ян', 'Пётр', 5, 3.5),\n" +
            "\t( 'Ефимова', 'Кристина', 6, 4),\n" +
            "\t( 'Горбачева', 'Алёна', 2, 3.0),\n" +
            "\t( 'Лука', 'Казаков', 1, 5),\n" +
            "\t( 'Панова', 'Есения', 3, 5),\n" +
            "\t( 'Яна', 'Маслова', 7, 3.0);")
    void defaultStudents();
}
