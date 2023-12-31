
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import GradeEntry from "./gradeEntry"

export function Component2() {
  return (
    <main className="p-5">
      <h1 className="text-4xl font-bold mb-5">Student Gradebook</h1>
      <div className="grid gap-5">

        <GradeEntry name="John Doe" id="1234" subject="Math" />
        <GradeEntry name="Jane Smith" id="2345" subject="English" />
        <GradeEntry name="Emma Williams" id="3456" subject="Science" />
        <GradeEntry name="James Brown" id="4567" subject="History" />
      </div>
    </main>
  )
}
