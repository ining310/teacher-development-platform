"use client";
import {useState} from 'react';
import { Class, columns } from "./Columns";
import { DataTable } from "./data-table";
import Selection from "./Select";
import {Button} from "@/components/ui/button";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import UploadButton from "./UploadButton";
import { INDIGO } from "@/lib/constants";
import MultiSelect from "./MultiSelect";
type ExportHistoryProps={
  years:string[],
  schools:string[],
  data: {
    time:string,
    name:string,
    account:string,
    phone:string,
    team:string,
    schoolRole:string,
    lecture:string,
    associationRole:string,
    identity:string,
}[],
}
export default function SelectAndData({years,schools,data}:ExportHistoryProps){
  const [selectedYear, setSelectedYear] = useState("all");
  // Handler function for year selection change
  const handleYearChange1 = (value:string) => {
    
  };
  const handleYearChange2 = (value:string) => {
    setSelectedYear(value);
  };
  // Handler function for topic selection change
  const [schoolName, setSchoolName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof schoolName>) => {
    const {
      target: { value },
    } = event;
    setSchoolName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const dataToShow=data.filter((d)=>(
    (d.time===selectedYear||selectedYear==='all')
  ));
  return(
    <div className='grid justify-items-center'>
      <div className="flex justify-center gap-1 w-full">
        <div className="flex gap-1 items-center w-1/4 gap-4">
          <div className='w-2/3'>
            <Selection selections={years} onChange={handleYearChange1}/>
          </div>
          <UploadButton/>
        </div>
      </div>
      <div className='w-5/6 mt-2'>
        <div className='flex justify-self-start items-center'>
          <p className="">現有帳號列表</p>
          <div className='grid w-1/6 justify-items-center ml-2 mr-2'>
            <Selection selections={years} onChange={handleYearChange2}/>
          </div>
          <MultiSelect schools={schools} onChange={handleChange} schoolName={schoolName}/>
        </div>
      </div>
      <div className="w-5/6 h-full justify-self-center mt-2">
        <DataTable columns={columns} data={dataToShow}/>
      </div>
    </div>
  );
}