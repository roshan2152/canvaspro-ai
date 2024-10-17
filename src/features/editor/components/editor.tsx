"use client";

import { useEditor } from "@/features/editor/hooks/useEditor";
import { useEffect, useRef } from "react";
import { fabric } from "fabric";

const Editor = () => {

    const { init } = useEditor();
    const canvasWrapperRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = new fabric.Canvas(canvasRef.current,
            {
                //This make sure that the controls are above the overlay
                controlsAboveOverlay: true,
                preserveObjectStacking: true,
            });
        init({
            initialCanvasWrapper: canvasWrapperRef.current!,
            initialCanvas: canvas
        });
    }, [init])

    return (
        <div className="h-full flex flex-col">
            <div className="h-full flex-1 bg-neutral-800" ref={canvasWrapperRef}>
                <canvas ref={canvasRef} />
            </div>
        </div>
    );
};


export default Editor;