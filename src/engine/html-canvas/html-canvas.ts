import {IAwake} from "@/engine";
import {Vec2} from "@/engine/maths";

export class HTMLCanvas implements IAwake {
    private _elm: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;

    public get Element(): HTMLCanvasElement {
        return this._elm;
    }

    public get Context(): CanvasRenderingContext2D {
        return this._ctx;
    }

    constructor(public readonly Size: Vec2) {
    }

    public Awake(): void {
        const canvas = document.createElement("canvas");
        canvas.setAttribute("width", `${this.Size.x}px`);
        canvas.setAttribute("height", `${this.Size.y}px`);
        document.body.appendChild(canvas);
        this._elm = canvas;
        const ctx = this._elm.getContext("2d");
        if (!ctx) {
            throw new Error("Context identifier is not supported");
        }
        this._ctx = ctx;
    }

    public Clear(): void {
        this._ctx.clearRect(0, 0, this.Size.x, this.Size.y);
    }

    public FillRect(start: Vec2, size: Vec2, color: string): void {
        this._ctx.beginPath();
        this._ctx.fillStyle = color;
        this._ctx.rect(start.x, start.y, size.x, size.y);
        this._ctx.fill();
    }

    public ClearRect(start: Vec2, size: Vec2): void {
        this._ctx.clearRect(start.x, start.y, size.x, size.y);
    }
}