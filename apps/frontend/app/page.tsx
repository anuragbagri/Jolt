import AppBar from "@/components/Appbar";
import Prompt from "@/components/Prompt";
import Template from "@/components/Template";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="p-4">
      <AppBar/>
      <div className="max-w-2xl mx-auto pt-32">
        <div className="text-2xl font-bold text-center">
          what do you want to build
        </div>
        <div className="text-sm text-muted-foreground text-center">
          Prompt , click generate and watch your app come to life
        </div>
        <div className="pt-4">
          <Prompt/>
        </div>
      </div>
      <div className="max-w-2xl mx-auto pt-4">
        <Template/>
      </div>
    </div>
  )
}