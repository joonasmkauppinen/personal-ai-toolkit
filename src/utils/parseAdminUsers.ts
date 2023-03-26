import type { User } from "next-auth";
import type { AdapterUser } from "next-auth/adapters";

export const isValidAdminUser = (
  user: AdapterUser | User,
  adminEmails: string
): boolean => {
  if (!user.email) return false;
  return adminEmails.split("|").includes(user.email);
};
