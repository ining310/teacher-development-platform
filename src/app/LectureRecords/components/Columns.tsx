"use client"
 
import { ColumnDef } from "@tanstack/react-table"
import {Button} from "@/components/ui/button";
import { INDIGO } from "@/lib/constants";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Class = {
  topic:string,
  type:string,
  name:string,
  time:string,
  teacher:string,
  series:string,
}
 
export const columns: ColumnDef<Class>[] = [
  {
    accessorKey: "type",
    header: "課程類別",
  },
  {
    accessorKey: "topic",
    header: "課程主題",
  },
  {
    accessorKey: "name",
    header: "課程名稱",
  },
  {
    accessorKey: "time",
    header: "課程時間",
  },
  {
    accessorKey: "teacher",
    header: "授課講師",
  },
  {
    accessorKey: "series",
    header: "活動系列",
  },
  {
    accessorKey: "feedback",
    header: "課程回饋",
    cell: ({ row }) => (
      <Button style={{backgroundColor:INDIGO}} className="rounded-full ml-2 h-6">
        {"查看"}
      </Button>
    ),
  },
]