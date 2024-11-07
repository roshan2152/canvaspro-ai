"use client";

import { useEditor } from "@/features/editor/hooks/useEditor";
import { useEffect, useRef } from "react";
import { fabric } from "fabric";
import Navbar from "@/features/editor/components/navbar";
import Sidebar from "@/features/editor/components/sidebar"
import Toolbar from "@/features/editor/components/toolbar";
import Footer from "@/features/editor/components/footer";

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

        return () => {
            canvas.dispose();
        };
    }, [init])

    return (
        <div className="h-full flex flex-col">
            <Navbar />
            <div className="flex absolute h-[calc(100%-56px)] w-full top-14">
                <Sidebar />
                <main className="flex relative flex-col overflow-auto bg-zinc-900 flex-1">
                    <Toolbar />
                    <div className="h-[calc(100%-96px)] flex-1 bg-zinc-900" ref={canvasWrapperRef}>
                        <canvas ref={canvasRef} />
                    </div>
                    <Footer />
                </main>
            </div>
        </div>
    );
};


export default Editor;