import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import bcrypt from 'bcryptjs';
import { v4 as uuid } from 'uuid';
const here = path.dirname(fileURLToPath(import.meta.url));
const dir = path.resolve(here, '../data');
const file = path.join(dir, 'db.json');
const blank = () => ({ users: [], rides: [], ratings: [] });
function read() {
  fs.mkdirSync(dir, {recursive:true});
  if (!fs.existsSync(file)) fs.writeFileSync(file, JSON.stringify(blank(), null, 2));
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { fs.writeFileSync(file, JSON.stringify(blank(), null, 2)); return blank(); }
}
function write(data) { fs.mkdirSync(dir, {recursive:true}); fs.writeFileSync(file, JSON.stringify(data, null, 2)); }
export const store = { read, write, async seed() {
  const d = read(); if (d.users.length) return;
  const password = await bcrypt.hash('RideDemo123!', 10);
  d.users = [
    {id:uuid(),name:'Demo Rider',email:'rider@rideforge.demo',password,role:'rider',createdAt:new Date().toISOString()},
    {id:uuid(),name:'Demo Driver',email:'driver@rideforge.demo',password,role:'driver',vehicle:'Hyundai Aura · DL 3C AB 1234',rating:4.9,available:true,createdAt:new Date().toISOString()},
    {id:uuid(),name:'RideForge Admin',email:'admin@rideforge.demo',password,role:'admin',createdAt:new Date().toISOString()}
  ]; write(d);
}};
export { uuid };
