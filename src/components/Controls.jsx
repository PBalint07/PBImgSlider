import { Button } from "@heroui/react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export function Controls({ setCurrentIndex, maxL }) {
    return (
        <div className="flex w-full justify-between px-4">
            <Button
                className="bg-white text-black rounded-full shadow-md"
                onClick={() => setCurrentIndex(prev => prev - 1 >= 0 ? prev - 1 : prev)}
            >
                <SlArrowLeft color="black" />
            </Button>

            <Button
                className="bg-white text-black rounded-full shadow-md"
                onClick={() => setCurrentIndex(prev => prev + 1 < maxL ? prev + 1 : prev)}
            >
                <SlArrowRight color="black" />
            </Button>
        </div>
    )
}