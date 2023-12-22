import React from 'react'
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"



const StudentDataEntry = () => {
  return (
    <div className='w-full'>
      <main className="p-5 w-full">
        <div className="grid gap-5 w-full">
          <Card className="bg-[#000000] shadow-md rounded-md ">
            <CardHeader className="p-4 ">
              <CardTitle className="text-xl font-semibold">Student Data Entry</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <form>
                <label className="block mb-2 text-sm text-gray-200">Roll No:</label>
                <input className="mb-4 px-3 py-2 border rounded w-full" type="text" />
                <label className="block mb-2 text-sm text-gray-200">Course ID:</label>
                <input className="mb-4 px-3 py-2 border rounded w-full" type="text" />
                <label className="block mb-2 text-sm text-gray-200">Assignment 1 Marks:</label>
                <input className="mb-4 px-3 py-2 border rounded w-full" type="text" />
                <label className="block mb-2 text-sm text-gray-200">Assignment 2 Marks:</label>
                <input className="mb-4 px-3 py-2 border rounded w-full" type="text" />
                <label className="block mb-2 text-sm text-gray-200">Final Marks:</label>
                <input className="mb-4 px-3 py-2 border rounded w-full" type="text" />
                <label className="block mb-2 text-sm text-gray-200">Total Marks:</label>
                <input className="mb-4 px-3 py-2 border rounded w-full" type="text" />
                <Button className="px-4 py-2 bg-blue-500 text-white rounded">Submit</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>


  )
}

export default StudentDataEntry