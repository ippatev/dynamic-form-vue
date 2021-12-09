export interface FormConfig {
    fields: IFormConfigField[]
}

export interface IFormConfigField {
    id: string;
    type: string;
    value?: string;
    label?: string;
}