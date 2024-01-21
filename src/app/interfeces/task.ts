export interface Task {
    "id": number,
    "name": string,
    "description": string,
    "date_of_start": string,
    "date_of_end": string,
    "status": number,
    "Status": {
        "name": string,
        "color": string
    }
}
