import {IComponent} from "./component.h";
import {IUpdate, IAwake} from "@/engine";

type constr<T> = { new(...args: unknown[]): T }

export abstract class Entity implements IUpdate, IAwake {
    protected _components: IComponent[] = [];

    public get Components(): IComponent[] {
        return this._components;
    }

    public AddComponent(component: IComponent): void {
        this._components.push(component);
        component.Entity = this;
    }

    public GetComponent<T extends IComponent>(constr: constr<T>): T {
        for (const component of this._components) {
            if (component instanceof constr) {
                return component as T;
            }
        }
        throw new Error(`Component ${constr.name} not found on Entity ${this.constructor.name}`);
    }

    public RemoveComponent<T extends IComponent>(constr: constr<T>): void {
        let toRemove: IComponent | undefined;
        let index: number | undefined;

        for (let i = 0; i < this._components.length; i++) {
            const component = this._components[i];
            if (component instanceof constr) {
                toRemove = component;
                index = i;
                break;
            }
        }

        if (toRemove && index) {
            toRemove.Entity = null;
            this._components.splice(index, 1);
        }
    }

    public HasComponent<T extends IComponent>(constr: constr<T>): boolean {
        for (const component of this._components) {
            if (component instanceof constr) {
                return true;
            }
        }
        return false;
    }

    public Update(deltaTime: number): void {
        for (const component of this._components) {
            component.Update(deltaTime);
        }
    }

    public Awake(): void {
        for (const component of this._components) {
            component.Awake();
        }
    }
}

