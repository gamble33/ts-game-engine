import {Entity, GraphicsLayer} from "@/engine";
import {Player} from "./player";

export class Game extends Entity {
    private _entities: Entity[] = [];
    private _lastTimestamp = 0;

    public get Entities(): Entity[] {
        return this._entities;
    }

    // constructor() {
    //     super();
    // }

    public Awake() {
        super.Awake();
        this._lastTimestamp = Date.now();

        this._entities.push(new Player());

        for (const entity of this._entities) {
            entity.Awake();
        }

        // Delay first update call until next frame to allow all child entities to awaken.
        window.requestAnimationFrame(() => {
            this._lastTimestamp = Date.now();
            this.Update();
        });

    }

    public Update() {
        const deltaTime = (Date.now() - this._lastTimestamp) / 1000;
        super.Update(deltaTime);

        GraphicsLayer.Background.Clear();

        for (const entity of this._entities) {
            entity.Update(deltaTime);
        }

        this._lastTimestamp = Date.now();
        window.requestAnimationFrame(() => this.Update());
    }

    private DrawTest(): void {
        const canvas = document.createElement("canvas");
        canvas.setAttribute("width", "500px");
        canvas.setAttribute("height", "500px");
        document.body.appendChild(canvas);

        const ctx = canvas.getContext("2d")!;
        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 0, 0, 1)";
        ctx.rect(10, 10, 50, 50);
        ctx.fill();
    }

}