type FieldSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type FieldTypes =
   | 'number'
   | 'string'
   | 'password'
   | 'autocomplete'
   | 'select'
   | 'boolean'
   | 'date'
   | 'float'
   | 'textarea'
   | 'texteditor'
   | 'time'
   | 'file'

export interface FieldConfig {
   require: boolean
   sizeEdit?: FieldSizes
   sizeFilter?: FieldSizes
   disabled?: boolean
   placeholder?: string
}

export interface StringConfig extends FieldConfig {
   cnpj?: boolean
   cpf?: boolean
   email?: boolean
}

export interface AutocompleteConfig extends FieldConfig {
   route: string
   dependencies?: string[]
}

export interface SelectConfig extends FieldConfig {
   itens: { value: string; label: string }[]
}

export interface BooleanConfig extends FieldConfig {
   labelTrue: string
   labelFalse: string
   default: boolean
}

export interface FloatConfig extends FieldConfig {
   currency?: boolean
}

export interface TextareaConfig extends FieldConfig {
   rows?: number
}

export interface TextEditorConfig extends FieldConfig {
   rows?: number
}

export interface FileConfig extends FieldConfig {
   container: string
   preview?: boolean
   dragAndDrop?: boolean
   acceptedFiles?: string[]
}

export interface Field {
   label: string
   type: FieldTypes
   edit: boolean
   list: boolean
   filter?: boolean
   config:
      | FieldConfig
      | StringConfig
      | AutocompleteConfig
      | SelectConfig
      | BooleanConfig
      | FloatConfig
      | TextareaConfig
      | TextEditorConfig
      | FileConfig
}

export interface Settings {
   create: boolean
   edit: boolean
   delete: boolean
}

export interface Fields {
   [k: string]: Field
}

export interface Tab {
   label: string
   route: string
   settings: Settings
   fields: Fields
}

export interface Tabs {
   [k: string]: Tab
}

export interface ModelConfig {
   label: string
   route: string
   settings: Settings
   fields: Fields
   tabs: Tabs
}
