import { Rouuter } from "express";
import fs from "fs";
import path from "path";

const DB_FILE=path.join(process.cwd(),"data","referrals_db.json");
const DISCOUNT_PERCENT=50;

interface ReferralUser {
  id:string;
  name:string;
  email:string;
  referralCode:string;
  referralBy: string | null;
  referralCount: number;
  discountEarned:boolean;
  discountUsed:boolean;
  createAt:String;
}

fuction loadUser(): ReferralUser[] {
  if (!fs.existSync(DB_FILE)) return [];
  return JSON.parse(fs.readFileSync(DB_FILE,"utf-8");
}

funtion saveUser()