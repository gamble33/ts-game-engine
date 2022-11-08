import {IComponent, Entity, Transform} from "@/engine";

export class Move implements IComponent {
    Entity: Entity;
    private _transform: Transform;
    private _speed: number = 90;
    private _time: number = 0;
    private _centerY: number;


    Awake(): void {
        this._transform = this.Entity.GetComponent(Transform);
        this._centerY = this._transform.Position.y;
    }

    Update(deltaTime: number): void {
        this._transform.Position.x += deltaTime * this._speed;
        this._transform.Position.y = 40 * Math.sin(5*this._time) + this._centerY;
        this._time += deltaTime;
    }

}