"use client"
 
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Class = {
  time:string,
  name:string,
  account:string,
  phone:string,
  team:string,
  schoolRole:string,
  lecture:string,
  associationRole:string,
  identity:string,
}
 
export const columns: ColumnDef<Class>[] = [
  
  {
    accessorKey: "time",
    header: "紀錄時間",
  },
  {
    accessorKey: "name",
    header: "姓名",
  },
  {
    accessorKey: "account",
    header: "帳號",
  },
  {
    accessorKey: "phone",
    header: "手機",
  },
  {
    accessorKey: "team",
    header: "學校/單位",
  },
  {
    accessorKey: "schoolRole",
    header: "學校職位",
  },
  {
    accessorKey: "lecture",
    header: "科目/課程",
  },
  {
    accessorKey: "associationRole",
    header: "聯盟角色",
  },
  {
    accessorKey: "identity",
    header: "身分(權限)",
  },
  {
    id: "select",
    header:"停用",
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="ml-2"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
]