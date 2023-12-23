import CourseCard from "@/components/courseCard"

export function Component() {
  return (
    <main className="p-5 w-[600px] flex ">
      <div className=" gap-5 flex flex-row ">
        <CourseCard studentName="John Doe" studentID='1234' studentSubject='Maths' studentGrade='9.0'/>
        <CourseCard studentName="Jane Smith" studentID='2345' studentSubject='English' studentGrade='8.0'/>
        <CourseCard studentName="Emma Williams" studentID='3456' studentSubject='Science' studentGrade='7.0'/>
        <CourseCard studentName="James Brown" studentID='4567' studentSubject='History' studentGrade='6.0'/>
        <CourseCard studentName="John Doe2" studentID='1234' studentSubject='Maths' studentGrade='9.0'/>



      </div>
    </main>
  )
}
