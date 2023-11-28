import { User } from "@prisma/client";


export type Safeuser = Omit<
    User,
    "createAt" | "updateAt" | "emailVerified"
> & {
    createAt: string;
    updateAt: string;
    emailVerified: string | null;
}