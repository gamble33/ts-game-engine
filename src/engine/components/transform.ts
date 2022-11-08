import {Entity} from "@/engine";
import {IComponent} from "@/engine";
import {Vec2} from "@/engine/maths";

export class Transform implements IComponent {
    Entity: Entity | null;

    public Position: Vec2 = new Vec2(0, 0);
    public Scale: Vec2 = new Vec2(1, 1);

    Awake(): void {
    }

    Update(deltaTime: number): void {
    }

}