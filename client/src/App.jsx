
import { useEffect, useState } from "react";

import {
    ArrowUpRight,
    CarFront,
    ShieldCheck,
    LayoutDashboard,
    Radio,
    Server,
    Database,
    Cpu,
    CheckCircle2,
    AlertCircle
} from "lucide-react";

import api from "./services/api";

import { PROJECT_CONFIG } from "./config/parkingConfig";


const interfaces = [

    {
        number: "01",
        title: "Customer Portal",
        description:
            "Discover parking spaces, reserve your slot, manage your vehicles and access your bookings.",
        path: "/customer",
        icon: CarFront,
        color: "blue",
        status: "Customer access"
    },

    {
        number: "02",
        title: "Watchman Portal",
        description:
            "Monitor parking occupancy, manage incoming vehicles and control parking gates.",
        path: "/watchman",
        icon: ShieldCheck,
        color: "green",
        status: "Operator access"
    },

    {
        number: "03",
        title: "Admin Dashboard",
        description:
            "Manage parking locations, monitor transactions, analyze revenue and control the entire system.",
        path: "/admin",
        icon: LayoutDashboard,
        color: "purple",
        status: "Administrator access"
    }

];


function App() {

    const [serverStatus, setServerStatus] = useState("checking");

    const [serverMessage, setServerMessage] = useState("Checking backend...");


    useEffect(() => {

        let active = true;

        async function checkServer() {

            try {

                const response = await api.get("/health");

                if (!active) return;

                setServerStatus("online");

                setServerMessage(
                    response.data.message ||
                    "Backend connected successfully"
                );

            } catch (error) {

                if (!active) return;

                setServerStatus("offline");

                setServerMessage(
                    "Backend connection unavailable"
                );

            }

        }

        checkServer();

        return () => {
            active = false;
        };

    }, []);


    const colorClasses = {

        blue: "bg-blue-50 text-blue-700 border-blue-100",

        green: "bg-emerald-50 text-emerald-700 border-emerald-100",

        purple: "bg-violet-50 text-violet-700 border-violet-100"

    };


    return (

        <div className="min-h-screen bg-[#F5F7FB] text-slate-900">

            {/* NAVIGATION */}

            <header className="border-b border-slate-200 bg-white">

                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

                    <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">

                            <CarFront size={25} />

                        </div>

                        <div>

                            <h1 className="text-lg font-bold tracking-tight">

                                SMART PARKING

                            </h1>

                            <p className="text-xs text-slate-500">

                                Intelligent Parking Management

                            </p>

                        </div>

                    </div>


                    <div className="hidden items-center gap-2 rounded-full border border-slate-200 px-4 py-2 md:flex">

                        <span className="h-2 w-2 rounded-full bg-emerald-500"></span>

                        <span className="text-sm font-medium text-slate-600">

                            Development Environment

                        </span>

                    </div>

                </div>

            </header>


            <main className="mx-auto max-w-7xl px-6 py-14">


                {/* HERO SECTION */}

                <section className="mb-12">

                    <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">

                        Smart Parking Infrastructure

                    </p>


                    <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">

                        One platform.

                        <span className="block text-blue-600">

                            Complete parking control.

                        </span>

                    </h2>


                    <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500">

                        A centralized intelligent parking ecosystem connecting
                        customers, parking operators, administrators and IoT
                        infrastructure through one unified platform.

                    </p>

                </section>


                {/* INTERFACE CARDS */}

                <section>

                    <div className="mb-6 flex items-center justify-between">

                        <div>

                            <h3 className="text-xl font-bold">

                                Select your interface

                            </h3>

                            <p className="mt-1 text-sm text-slate-500">

                                Three dedicated portals for different users.

                            </p>

                        </div>

                        <span className="hidden text-sm text-slate-400 sm:block">

                            {interfaces.length} Interfaces

                        </span>

                    </div>


                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                        {interfaces.map((item) => {

                            const Icon = item.icon;

                            return (

                                <a
                                    key={item.number}
                                    href={item.path}
                                    className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50"
                                >

                                    <div className="mb-7 flex items-center justify-between">

                                        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${colorClasses[item.color]}`}>

                                            <Icon size={27} />

                                        </div>

                                        <span className="text-sm font-semibold text-slate-300">

                                            {item.number}

                                        </span>

                                    </div>


                                    <h3 className="text-xl font-bold">

                                        {item.title}

                                    </h3>


                                    <p className="mt-3 min-h-20 text-sm leading-7 text-slate-500">

                                        {item.description}

                                    </p>


                                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

                                        <span className="text-xs font-semibold text-slate-400">

                                            {item.status}

                                        </span>

                                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 transition-all group-hover:bg-blue-600 group-hover:text-white">

                                            <ArrowUpRight size={18} />

                                        </span>

                                    </div>

                                </a>

                            );

                        })}

                    </div>

                </section>


                {/* SYSTEM STATUS */}

                <section className="mt-14">

                    <div className="mb-5">

                        <h3 className="text-xl font-bold">

                            System overview

                        </h3>

                        <p className="mt-1 text-sm text-slate-500">

                            Initial development environment status.

                        </p>

                    </div>


                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">


                        <StatusCard
                            icon={Server}
                            title="Backend Server"
                            status={serverStatus}
                            message={serverMessage}
                        />


                        <StatusCard
                            icon={Database}
                            title="Database"
                            status="pending"
                            message="Configuration in Part 3"
                        />


                        <StatusCard
                            icon={Radio}
                            title="IoT Communication"
                            status="pending"
                            message="MQTT setup upcoming"
                        />


                        <StatusCard
                            icon={Cpu}
                            title="Hardware"
                            status="pending"
                            message="Arduino integration upcoming"
                        />


                    </div>

                </section>


                {/* FOOTER */}

                <footer className="mt-16 border-t border-slate-200 py-7">

                    <div className="flex flex-col justify-between gap-3 text-sm text-slate-400 md:flex-row">

                        <p>

                            © 2026 Smart Parking System

                        </p>

                        <p>

                            Version {PROJECT_CONFIG.version} · Development Build

                        </p>

                    </div>

                </footer>


            </main>

        </div>

    );

}


function StatusCard({ icon: Icon, title, status, message }) {

    const isOnline = status === "online";

    const isOffline = status === "offline";

    const isChecking = status === "checking";

    return (

        <div className="rounded-xl border border-slate-200 bg-white p-5">

            <div className="mb-4 flex items-center justify-between">

                <Icon size={22} className="text-slate-500" />


                {isOnline && (

                    <CheckCircle2 size={19} className="text-emerald-500" />

                )}


                {isOffline && (

                    <AlertCircle size={19} className="text-red-500" />

                )}


                {(status === "pending" || isChecking) && (

                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400"></span>

                )}

            </div>


            <h4 className="font-semibold">

                {title}

            </h4>


            <p className="mt-2 text-xs leading-5 text-slate-500">

                {message}

            </p>


            <p className={`mt-3 text-xs font-bold uppercase tracking-wider ${
                isOnline
                    ? "text-emerald-600"
                    : isOffline
                    ? "text-red-600"
                    : "text-amber-600"
            }`}>

                {status}

            </p>

        </div>

    );

}


export default App;
