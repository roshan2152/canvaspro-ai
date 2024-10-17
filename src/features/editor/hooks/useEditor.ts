import { useCallback } from "react";
import { fabric } from "fabric";

const useEditor = () => {
    const init = useCallback(
        ({
            initialCanvasWrapper,
            initialCanvas
        }: {
            initialCanvasWrapper: HTMLDivElement;
            initialCanvas: fabric.Canvas;
        }) => {
            console.log("Initilizing Editor... 🚀");

            //Set canvas Object properties
            fabric.Object.prototype.set({
                cornerColor: "#fff",
                cornerStyle: "circle",
                borderColor: "#8b3dff",
                borderScaleFactor: 2.5,
                transparentCorners: false,
                borderOpacityWhenMoving: 0.8,
                cornerStrokeColor: "#8b3dff",
            })

            //To create a rectangle object to represent initital settings of the canvas
            const defaultCanvasWorkspace = new fabric.Rect({
                width: 1080,
                height: 1920,
                name: "defaultCanvasWorkspace",
                fill: "white",
                selectable: false,
                hasControls: false,
                shadow: new fabric.Shadow({
                    color: "rgba(0,0,0,0.3)",
                    blur: 10,
                }),
            });

            initialCanvas.setHeight(initialCanvasWrapper.offsetHeight);
            initialCanvas.setWidth(initialCanvasWrapper.offsetWidth);

            //add the defaultCanvasWorkspace to the canvas
            initialCanvas.add(defaultCanvasWorkspace);
            initialCanvas.centerObject(defaultCanvasWorkspace);

            //elements outside the defaultCanvasWorkspace will not be visible
            initialCanvas.clipPath = defaultCanvasWorkspace;

            const rectangleOject = new fabric.Rect({
                width: 300,
                height: 300,
                fill: "red",
            });

            initialCanvas.add(rectangleOject);
            initialCanvas.centerObject(rectangleOject);
        }, []);

    return { init };
};

export { useEditor }