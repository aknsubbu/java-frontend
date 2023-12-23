import React from 'react'
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


const GradeEntry = (data:any) => {
    const {name,id,subject}=data;
  return (
    <Card className="bg-[#000000] shadow-md rounded-md">
    <CardHeader className="p-4 border-b border-gray-200">
      <CardTitle className="text-xl font-semibold">Data Entry: {name}</CardTitle>
      <p className="text-sm text-gray-500">ID: {id}</p>
      <p className="text-sm text-gray-500">Subject: {subject}</p>
    </CardHeader>
    <CardContent className="p-4">
      <form>
        <label className="block mb-2 text-sm text-gray-600">Grade</label>
        <input className="mb-4 px-3 py-2 border rounded w-full" type="text" />
        <Button className="px-4 py-2 bg-blue-500 text-white rounded">Submit</Button>
      </form>
    </CardContent>
  </Card>
  )
}

export default GradeEntry