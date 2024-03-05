"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
// import Resizer from "react-image-file-resizer";
import { publicEnv } from "@/lib/env/public";
import { MdLogin } from "react-icons/md";
import { GREEN, INDIGO, ORANGE, PINK, USERS } from "@/lib/constants";
import { auth } from "@/lib/auth";
import { generateCode } from "@/lib/utils";
import { useSession } from "next-auth/react";

export default function ChangePasswordDialog() {
  const [open, setOpen] = useState(false);
  const [originPassword, setOriginPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
  const [passwordHint, setPasswordHint] = useState<string>("");

  const { data: session } = useSession();
  const userIndex = USERS.findIndex(({ email }) => email === session?.user?.email);
  // console.log(USERS[userIndex]);
  // const firstLogin = (false || USERS[userIndex].password === USERS[userIndex].mobile);

  useEffect(() => {
    // console.log("open/close");
    setOriginPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setPasswordHint("");
  },[open]);

  const handleUpdatePassword = () => {
    if (USERS[userIndex]  && originPassword !== USERS[userIndex].password) {
      setPasswordHint("當前密碼錯誤");
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setPasswordHint("新密碼不一致");
      return;
    }
    else if (newPassword === USERS[userIndex].mobile) {
      setPasswordHint("新密碼與手機號碼相同");
      return;
    }
    setPasswordHint("");
  };

  return(
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="cursor-pointer justify-self-center w-fit px-3 py-1 text-white text-sm rounded-full hover:opacity-80" style={{backgroundColor: INDIGO}}>
          修改密碼
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">修改密碼</DialogTitle>
          { USERS[userIndex] && (USERS[userIndex].password === USERS[userIndex].mobile) && <DialogDescription className="text-center text-xs">
            初次登入需修改密碼
          </DialogDescription>}
        </DialogHeader>
        <div className="flex flex-col gap-3 pt-3">
          <div className="flex flex-col gap-2">
            { USERS[userIndex] && !(USERS[userIndex].password === USERS[userIndex].mobile) && <div>
              <Label className="font-semibold">當前密碼</Label>
              <Input
                type="password"
                value={originPassword}
                className="rounded-3xl border w-full w-64"
                style={{borderColor: INDIGO}}
                onChange={(e) => {
                  setOriginPassword(e.target.value);
                }}
              />
            </div>}
            <div>
              <Label className="font-semibold">新密碼</Label>
              <Input
                type="password"
                value={newPassword}
                className="rounded-3xl border w-full w-64"
                style={{borderColor: INDIGO}}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
            </div>
            <div>
              <Label className="font-semibold">確認新密碼</Label>
              <Input
                type="password"
                value={confirmNewPassword}
                className="rounded-3xl border w-full w-64"
                style={{borderColor: INDIGO}}
                onChange={(e) => {
                  setConfirmNewPassword(e.target.value);
                }}
              />
            </div>
            <div className="text-xs self-center" style={{color: PINK}}>{passwordHint}</div>
            <Button 
              type="submit" 
              className="mt-2 w-fit rounded-full font-semibold self-center" 
              style={{backgroundColor: INDIGO}}
              onClick={() => {handleUpdatePassword()}}
            >
              修改密碼
            </Button>
          </div>
        </div>
        <DialogClose asChild>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}