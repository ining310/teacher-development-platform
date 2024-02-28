"use client"
import {useState} from "react";
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { GREEN, INDIGO, ORANGE } from "@/lib/constants";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Class = {
  time:string,
  updateTime:string,
  state:string,
  comment:string,
}

export const columns: ColumnDef<Class>[] = [
  {
    accessorKey: "time",
    header: "學期",
  },
  {
    accessorKey: "updateTime",
    header: "更新時間",
  },
  {
    accessorKey: "state",
    header: "狀態",
  },
  {
    accessorKey: "comment",
    header: "他評(optional)",
    cell: ({ row }) => {
      const [open,setOpen]=useState(false);
      return(
        <>
          <Dialog>
            <DialogTrigger asChild>
              <Button style={{backgroundColor:INDIGO}} className="rounded-full h-6">
                {"查看"}
              </Button>
            </DialogTrigger>
            <DialogContent className="w-1/3 grid">
              <DialogHeader>
                <DialogTitle>他評</DialogTitle>
                <DialogDescription>
                  他人評論
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2 mt-2 mb-2">
                {row.getValue("comment")}
              </div>
              <DialogFooter className="grid justify-items-end self-end">
                <DialogClose asChild>
                  <Button variant="secondary">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </>
      );
    },
  },
  {
    header: "操作",
    cell: ({ row }) => (
      <Button style={{backgroundColor:
        row.getValue("state")==="尚未填寫"?ORANGE
        :row.getValue("state")==="尚未送出"?GREEN
        :INDIGO
      }} 
        className="rounded-full ml-2 h-6"
      >
        {row.getValue("state")==="尚未填寫"?"填寫"
          :row.getValue("state")==="尚未送出"?"編輯"
          :"查看"
        }
      </Button>
    ),
  },
]