import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Avatar} from "@nextui-org/react";

export default function StudentCard(students:any) {
    const{
        Rollno,
        firstName,
        lastName,
        dob,
        email }=students;
        
  return (
    <Card className="max-w-[400px] m-5">
      <CardHeader className="flex gap-3">
      <Avatar showFallback src='https://images.unsplash.com/broken' />
        <div className="flex flex-col">
          <p className="text-xl">{Rollno}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Date of Birth: {dob}</p>
        <p>E-Mail: {email}</p>

      </CardBody>
    </Card>
  );
}
