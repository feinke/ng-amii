type FieldType = 'input' | 'button';

export interface Field {
  name: string,
  label: string,
  type: FieldType,
}