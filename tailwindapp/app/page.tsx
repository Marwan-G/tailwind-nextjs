import { text } from "stream/consumers";

export default function Home() {
    return (
        <div className="p-8 bg-indigo-500 max-w-sm mx-auto hover:bg-green-400 bg-white rounded-xl shadow-lg items-center flex">
            <div className="shrink-0">
            </div>
            <div>
                <div className="text-xl font-medium text-black">ChitChat</div>
                <p className="text-slate-500">You have a new message!</p>
            </div>
        </div>)
}