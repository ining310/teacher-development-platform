"use client";
import {Label} from "@/components/ui/label";
import { INDIGO} from "@/lib/constants";
export default function Selection() {
  
  return (
    <>
      <Label className="grid rounded-full h-8 items-center w-1/3 justify-items-center" style={{backgroundColor:INDIGO}}>
        <div className="text-white">
          批次建立帳號
        </div> 
        {/* TODO: show selected files */}
        <div style={{ display: 'none', }}>
          <input type="file"/>
        </div>
      </Label>
    </>
  )
}
