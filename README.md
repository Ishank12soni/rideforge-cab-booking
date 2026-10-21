# RideForge — Cab Booking & Ride Management Platform

A runnable full-stack portfolio/demo project featuring rider and driver accounts, ride requests, driver acceptance, ride status progression, fare estimates, ride history, ratings, an interactive OpenStreetMap map, JWT auth, and Socket.IO live updates.

## Stack
- React + Vite + responsive CSS + Leaflet/OpenStreetMap
- Node.js + Express API
- Socket.IO real-time updates
- JSON-file persistence (no database setup needed for local demo)
- bcrypt password hashing + JWT sessions

## Run (Node.js 20+ recommended)
Open two terminal windows from the unzipped project folder.

**Terminal 1 — API**
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```
API health: http://localhost:5001/api/health

**Terminal 2 — website**
```bash
cd frontend
npm install
npm run dev
```
Website: http://localhost:5173

## Demo logins
- Rider: `rider@rideforge.demo` / `RideDemo123!`
- Driver: `driver@rideforge.demo` / `RideDemo123!`
- Admin: `admin@rideforge.demo` / `RideDemo123!`

Use two browser windows to demo a ride: rider requests → driver accepts → driver marks arrived → starts trip → completes → rider pays using clearly labelled demo payment and rates the ride.

## Scope and production notes
This is a portfolio MVP. The payment flow is simulated and does not charge money. GPS tracking is represented by live ride-state updates; continuous device GPS, production Stripe confirmation, SMS/phone verification, identity checks, PostgreSQL migration, rate limiting, and deployment secrets are not configured. Review security and local regulations before any real-world use. Map tiles are served by OpenStreetMap.

Local records are stored in `backend/data/db.json`. Stop the API and delete that file to reset demo data; the seeded accounts will be recreated at next startup.
