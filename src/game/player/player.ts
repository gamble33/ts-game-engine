import {Entity} from "@/engine";
import {Vec2} from "@/engine/maths";
import {Transform, RectRenderer} from "@/engine";
import {Move} from "./move";

export class Player extends Entity {

    Awake() {
        const transform: Transform = new Transform();
        transform.Position = new Vec2(0, 360);
        this.AddComponent(transform);
        this.AddComponent(new RectRenderer());
        this.AddComponent(new Move());
        super.Awake();
    }
}