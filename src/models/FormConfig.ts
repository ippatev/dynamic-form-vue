export interface FormConfig {
    title?: string;
    fields: IFormConfigField[]
}

export interface IFormConfigField {
    id: string;
    type: string;
    value?: string;
    label?: string;
}