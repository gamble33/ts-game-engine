import {HTMLCanvas} from "@/engine/html-canvas";
import {Vec2} from "@/engine/maths";

export class GraphicsLayer {
    private static _background: HTMLCanvas;

    private constructor() {
        /* singleton */
    }

    /**
     * Draw a texture in screen coordinates.
     */
    public DrawTexture(): void {
        // TODO: DrawTexture
    }

    /**
     * For now, a temporary solution is used that is tightly coupled with
     * html5 canvas.
     * TODO: Rework GraphicsLayer to work with multiple renderers
     * TODO: Implement methods such as DrawMesh, DrawTexture
     */

    public static get Background(): HTMLCanvas {
        if (!this._background) {
            const canvasSize = new Vec2(1280, 720);
            this._background = new HTMLCanvas(canvasSize);
            this._background.Awake();
        }
        return this._background;
    }
}