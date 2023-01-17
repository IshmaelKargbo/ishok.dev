import { SingleLoading } from "./loading";

interface props {
    text: string;
    loading?: boolean;
}

export const Button = ({ text, loading }: props) => {
    return <button className="border-sec border-2 text-sec md:py-3 md:px-10 px-6 py-3 text-sm md:text-lg rounded-md hover:bg-orange-200 hover:bg-opacity-10">
        {
            !loading ? <span>{text}</span>
                : <p className="w-7 h-7"><SingleLoading /></p>
        }
    </button>
}