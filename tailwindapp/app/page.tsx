import { text } from "stream/consumers";

export default function Home() {
    return (
        <div className="max-w-sm mx-auto hover:bg-green-400 bg-white rounded-xl shadow-lg items-center flex mt-28 p-2">
            <div className="shrink-0">
            </div>
            <div>
                <div className="text-xl font-medium text-black pb-8 pl-8">ChitChat</div>
                <p className="text-slate-500 pb-8 pl-8">You have a new message!</p>
            </div>
        </div>)
}