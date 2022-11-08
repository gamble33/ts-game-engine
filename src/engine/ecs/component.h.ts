import { Entity } from "./entity";
import { IUpdate, IAwake } from "@/engine";

export interface IComponent extends IUpdate, IAwake {
    Entity: Entity | null
}

