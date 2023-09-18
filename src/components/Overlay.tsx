import { ReactNode } from "react"

interface OverlayProps {
    children: ReactNode,
    closeModal: () => void
}

export default function Overlay(props: OverlayProps) {
    return (
        <div 
            className = "fixed left-0 top-0 min-h-screen min-w-full bg-white-300/40 flex justify-center items-center"
            onClick = {props.closeModal}
        >
            {props.children}
        </div>
    )
}