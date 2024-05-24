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

interface FieldConfig {
   require: boolean
   size?: FieldSizes
   filter?: boolean
   disabled?: boolean
   placeholder?: string
}

interface NumberConfig extends FieldConfig {
   min?: number
   max?: number
}

interface StringConfig extends FieldConfig {
   cnpj?: boolean
   cpf?: boolean
   email?: boolean
}

interface PasswordConfig extends FieldConfig {}

interface AutocompleteConfig extends FieldConfig {
   route: string
   dependencies?: string[]
}

interface SelectConfig extends FieldConfig {
   itens: { value: string; label: string }[]
}

interface BooleanConfig extends FieldConfig {
   labelTrue: string
   labelFalse: string
   default: boolean
}

interface DateConfig extends FieldConfig {}

interface FloatConfig extends FieldConfig {
   currency?: boolean
}

interface TextareaConfig extends FieldConfig {
   rows?: number
}

interface TextEditorConfig extends FieldConfig {
   rows?: number
}

interface TimeConfig extends FieldConfig {}

interface FileConfig extends FieldConfig {
   container: string
   preview?: boolean
   dragAndDrop?: boolean
   acceptedFiles?: string[]
}

type ConfigTypes =
   | StringConfig
   | NumberConfig
   | PasswordConfig
   | AutocompleteConfig
   | SelectConfig
   | BooleanConfig
   | DateConfig
   | FloatConfig
   | TextareaConfig
   | TextEditorConfig
   | TimeConfig
   | FileConfig

interface BaseField {
   label: string
   type: FieldTypes
   edit: boolean
   list: boolean
   filter?: boolean
   config: ConfigTypes
}

export interface FieldString extends BaseField {
   type: 'string'
   config: StringConfig
}

export interface FieldNumber extends BaseField {
   type: 'number'
   config: NumberConfig
}

export interface FieldPassword extends BaseField {
   type: 'password'
   config: PasswordConfig
}

export interface FieldAutocomplete extends BaseField {
   type: 'autocomplete'
   config: AutocompleteConfig
}

export interface FieldSelect extends BaseField {
   type: 'select'
   config: SelectConfig
}

export interface FieldBoolean extends BaseField {
   type: 'boolean'
   config: BooleanConfig
}

export interface FieldDate extends BaseField {
   type: 'date'
   config: DateConfig
}

export interface FieldFloat extends BaseField {
   type: 'float'
   config: FloatConfig
}

export interface FieldTextarea extends BaseField {
   type: 'textarea'
   config: TextareaConfig
}

export interface FieldTextEditor extends BaseField {
   type: 'texteditor'
   config: TextEditorConfig
}

export interface FieldTime extends BaseField {
   type: 'time'
   config: TimeConfig
}

export interface FieldFile extends BaseField {
   type: 'file'
   config: FileConfig
}

type Field =
   | FieldString
   | FieldNumber
   | FieldPassword
   | FieldAutocomplete
   | FieldSelect
   | FieldBoolean
   | FieldDate
   | FieldFloat
   | FieldTextarea
   | FieldTextEditor
   | FieldTime
   | FieldFile

interface Settings {
   create: boolean
   edit: boolean
   delete: boolean
}

export interface Fields {
   [k: string]: Field
}

interface Tab {
   label: string
   route: string
   settings: Settings
   fields: Fields
}

interface Tabs {
   [k: string]: Tab
}

export interface ModelConfig {
   label: string
   route: string
   settings: Settings
   fields: Fields
   tabs: Tabs
}
