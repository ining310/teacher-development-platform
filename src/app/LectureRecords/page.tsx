import { Class, columns } from "./components/Columns";
import { DataTable } from "./components/data-table";
import Selection from "./components/Select";
import {getTypes,getSeries,getYears,getData,getCourse} from "./components/actions";
import {Button} from "@/components/ui/button";
import { INDIGO } from "@/lib/constants";
import SelectAndData from "./components/SelectAndTable";
export default async function MyLectureHistory(){
  const username="甲老師";
  const years=getYears();
  const types=getTypes();
  const series=getSeries();
  const data=getData();
  const courses=getCourse();
  return(
    <div className="grid h-full p-16">
      <div className="grid justify-center mt-14 mb-5">
        <p className="text-3xl text-[#013E6E]">基金會課程紀錄</p>
      </div>
      <SelectAndData years={years} types={types} series={series} data={data} username={username} courses={courses}/>
      <div className="grid justify-items-center mt-5 ">
        <Button className="text-white rounded-full w-[10%] h-8" style={{backgroundColor:INDIGO}}>
          {"匯出"}
        </Button>
      </div>
    </div>
  );
}