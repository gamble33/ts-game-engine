import {Entity, IComponent, GraphicsLayer} from "@/engine";
import {Transform} from "./transform";
import {Vec2} from "@/engine/maths";

export class RectRenderer implements IComponent {
    Entity: Entity;

    private _transform: Transform;
    private _defaultRectSize: Vec2 = new Vec2(10, 10);

    private get _rectSize(): Vec2 {
        return new Vec2(
            this._defaultRectSize.x * this._transform.Scale.x,
            this._defaultRectSize.y * this._transform.Scale.y
        );
    }

    Awake(): void {
        this._transform = this.Entity.GetComponent(Transform);
        this.Draw();
    }

    Update(deltaTime: number): void {
        this.Draw();
    }

    private Draw(): void {
        GraphicsLayer.Background.FillRect(
            this._transform.Position,
            this._rectSize,
            "red"
        );
    }

    private Clear(): void {
        GraphicsLayer.Background.ClearRect(
            this._transform.Position,
            this._rectSize
        );
    }
}