"use client";
import {useState} from 'react';
import { Class, columns } from "./Columns";
import { DataTable } from "./data-table";
import {Button} from "@/components/ui/button";
import { INDIGO } from "@/lib/constants";
type MyIDPProps={
  data:{
    time:string,
    updateTime:string,
    state:string,
    comment:string,
  }[],
}
export default function SelectAndData({data}:MyIDPProps){
  return(
    <>
      <div className="flex justify-center gap-1">
        <Button style={{backgroundColor:INDIGO}} className='rounded-full h-8'>
          查看歷史IDP統整資料
        </Button>
      </div>
      <div className="w-5/6 h-full justify-self-center mt-8">
        <DataTable columns={columns} data={data}/>
      </div>
    </>
  );
}