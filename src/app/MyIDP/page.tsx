import { Class, columns } from "./components/Columns";
import { DataTable } from "./components/data-table";
import {getData} from "./components/actions";
import {Button} from "@/components/ui/button";
import { INDIGO } from "@/lib/constants";
import SelectAndData from "./components/SelectAndTable";
export default async function MyLectureHistory(){
  const username="甲老師";
  const data=getData(username);
  return(
    <div className="grid h-full p-16">
      <div className="grid justify-center mt-14 mb-5">
        <p className="text-3xl text-[#013E6E]">我的IDP</p>
      </div>
      <SelectAndData data={data}/>
    </div>
  );
}