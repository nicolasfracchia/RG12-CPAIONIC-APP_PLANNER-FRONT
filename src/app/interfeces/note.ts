import { Priority } from './priority';

export interface Note {
    "id": number,
    "name": string,
    "header": string,
    "details": string,
    "importance": number,
    "Priority": Priority
}
