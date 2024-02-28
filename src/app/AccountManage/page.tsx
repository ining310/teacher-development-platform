import { Class, columns } from "./components/Columns";
import { DataTable } from "./components/data-table";
import Selection from "./components/Select";
import {getYears,getData ,getSchool} from "./components/actions";
import {Button} from "@/components/ui/button";
import { INDIGO } from "@/lib/constants";
import SelectAndData from "./components/SelectAndTable";
export default async function ExportHistory(){
  const years=getYears();
  const data=getData();
  const teams=getSchool();
  return(
    <div className="grid h-full p-14">
      <div className="grid justify-center mt-14 mb-5">
        
      </div>
      <SelectAndData years={years} data={data} schools={teams}/>
      <div className="grid w-5/6 justify-self-center justify-items-end mt-4">
        <Button className="text-white rounded-full w-[12%] h-8" style={{backgroundColor:INDIGO}}>
          {"批次停用教師"}
        </Button>
      </div>
    </div>
  );
}