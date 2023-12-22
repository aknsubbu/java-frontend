import React from 'react'
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"


const CourseCard = (data:any) => {
    const{studentName, studentID, studentSubject, studentGrade} = data;
  return (
    <Card className="bg-[#000000] shadow-md rounded-md">
    <CardHeader className="p-4 border-b border-gray-200">
      <CardTitle className="text-xl font-semibold">{studentName}</CardTitle>
      <p className="text-sm text-gray-200">ID: {studentID}</p>
      <p className="text-sm text-gray-200">Subject: {studentSubject}</p>
    </CardHeader>
    <CardContent className="p-4">
      <div className="flex justify-between items-center">
        <Badge className="text-sm bg-green-200 text-green-700 rounded-full px-2 py-1">Grade: {studentGrade}</Badge>
        {/* <Button className="px-4 py-2 bg-blue-500 text-white rounded">View Details</Button> */}
      </div>
    </CardContent>
  </Card>
  )
}

export default CourseCard