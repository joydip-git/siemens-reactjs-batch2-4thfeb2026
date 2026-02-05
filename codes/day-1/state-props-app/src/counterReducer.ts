//import type { AnyActionArg } from "react"

// export type ActionType = {
//     type: string,
//     payload: number
// } & AnyActionArg

// export interface ActionType extends AnyActionArg {
//     type: string,
//     payload: number
// }
//export function counterRedcuer(state: number, action: ActionType) {
export function counterRedcuer(state: number, action: any) {
    switch (action.type) {
        case "increase": return state + action.payload
        case "decrease": return state - action.payload
        default: return state
    }
}