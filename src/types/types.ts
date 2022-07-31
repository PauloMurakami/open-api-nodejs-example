
export interface CategoryRequest {
    name: string,
    description: string
}
export interface CategoryUpdateRequest {
    id: string,
    name: string,
    description: string
}
export interface VideoRequest  {
    name: string,
    description: string,
    duration: number,
    category_id: string,
}