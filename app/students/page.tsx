'use client';
import React,{useState,useEffect} from "react";
import { title } from "@/components/primitives";
import StudentCard from "@/components/StudCard";
import axios from "axios";
import StudentDataEntry from "@/components/studentDataEntry";


export default function StudentPage() {
	// const studURL="http://localhost:3000/api/students";
	// const [students,setStudents]=useState([]);
	// useEffect(()=>{
	// 	axios.get(studURL).then((res)=>{
	// 		setStudents(res.data);
	// 	});
	// },[]);	

	return (
		<div className="w-full">
			<StudentDataEntry/>
		</div>
	);
}
