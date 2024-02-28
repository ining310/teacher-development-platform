import { INDIGO, INFO } from "@/lib/constants";
import { MdPerson } from "react-icons/md";
import UserAvatar from "../_components/UserAvatar";
import { auth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import LabelText from "./_components/LabelText";
import ChangePasswordDialog from "./_components/ChangePasswordDialog";
export default async function AboutMe(){
  const session = await auth();
  const infoLabels = ["學校/單位","學校職務","科目/課程","聯盟角色"];
  const index = INFO.findIndex(({ email }) => email === session?.user?.email);
  const info = INFO[index].info;
  return(
    <div className="grid h-full p-16">
      {/* <div className="grid justify-center mt-14 mb-5">
        <p className="text-3xl text-[#013E6E]">我的講師紀錄</p>
      </div> */}
      <a className="mt-4 mb-8 inline-flex items-center text-sm font-medium font-semibold gap-1 text-gray-700 hover:opacity-80">
        {">"}<MdPerson />關於我
      </a>
      <div className="flex gap-4">
        <div className="w-1/4 flex flex-col gap-2 items-center">
          <UserAvatar size={200} userEmail={session?.user?.email ?? ""} />
          <div className="text-xl font-bold">
            {session?.user?.username}
          </div>
          <a href="/auth/signout"
            className="justify-self-center px-8 py-1 text-white text-sm rounded-full hover:opacity-80"
            style={{backgroundColor: INDIGO}}
          >
            登出
          </a>
        </div>
        <div className="w-3/4 flex flex-col gap-3 items-center">
          <p className="text-2xl" style={{color: INDIGO}}>個人資料</p>
          <div className="rounded-3xl border-2 w-full px-4 py-6 gap-3 flex flex-col" style={{borderColor: INDIGO}}>
            {infoLabels.map((label,i) => (
              <LabelText label={label} text={info[i]} />
            ))}
            <div className="flex items-center">
              <a className="font-semibold mr-1">教學紀錄：</a>
              <a 
                className="justify-self-center w-fit px-3 py-1 text-white text-sm rounded-full hover:opacity-80"
                style={{backgroundColor: INDIGO}}
              >
                查看教學年資表
              </a>
            </div>
          </div>
          <p className="pt-3 text-2xl" style={{color: INDIGO}}>帳號安全性與隱私管理</p>
          <div className="rounded-3xl border-2 w-full p-4 flex-col flex gap-3" style={{borderColor: INDIGO}}>
            <div className="grid grid-cols-3">
              <LabelText label={"帳號"} text={session?.user?.email ?? ""} />
              <LabelText label={"手機號碼"} text={session?.user?.mobile ?? ""} />
            </div>
            <div className="flex gap-3">
              <ChangePasswordDialog />
              <a 
                className="justify-self-center w-fit px-3 py-1 text-white text-sm rounded-full hover:opacity-80"
                style={{backgroundColor: INDIGO}}
              >
                查看隱私管理辦法
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}