import "next-auth";

declare module "next-auth" {
  interface User {
    username: string;
    mobile: string;
  }
}