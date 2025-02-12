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
   | 'currency'
   | 'textarea'
   | 'texteditor'
   | 'time'
   | 'file'

interface FieldConfig {
   edit: boolean
   list: boolean
   filter?: boolean
   show?: boolean
   size?: FieldSizes
   disabled?: boolean
}

interface NumberConfig extends FieldConfig {
   require: boolean
   placeholder?: string
   min?: number
   max?: number
}

interface StringConfig extends FieldConfig {
   require: boolean
   placeholder?: string
   cnpj?: boolean
   cpf?: boolean
   email?: boolean
   phone?: boolean
   cep?: boolean
   customMask?: string
}

interface PasswordConfig extends FieldConfig {
   require: boolean
   placeholder?: string
}

interface AutocompleteConfig extends FieldConfig {
   require: boolean
   placeholder?: string
   route: string
   dependencies?: string[]
}

interface SelectConfig extends FieldConfig {
   require: boolean
   placeholder?: string
   itens: { value: string; label: string }[]
}

interface BooleanConfig extends FieldConfig {
   require?: boolean
   labelTrue?: string
   labelFalse?: string
   default: boolean
}

interface DateConfig extends FieldConfig {
   require: boolean
   placeholder?: string
}

interface FloatConfig extends FieldConfig {
   require: boolean
   placeholder?: string
   decimalPlaces?: number
}

interface CurrencyConfig extends FieldConfig {
   require: boolean
   placeholder?: string
   prefix?: string
}

interface TextareaConfig extends FieldConfig {
   require: boolean
   placeholder?: string
   rows?: number
}

interface TextEditorConfig extends FieldConfig {
   require: boolean
   placeholder?: string
   rows?: number
}

interface TimeConfig extends FieldConfig {
   require: boolean
   placeholder?: string
}

interface FileConfig extends FieldConfig {
   require: boolean
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
   | CurrencyConfig
   | TextareaConfig
   | TextEditorConfig
   | TimeConfig
   | FileConfig

interface BaseField {
   label: string
   type: FieldTypes
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

export interface FieldCurrency extends BaseField {
   type: 'currency'
   config: CurrencyConfig
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

export type Field =
   | FieldString
   | FieldNumber
   | FieldPassword
   | FieldAutocomplete
   | FieldSelect
   | FieldBoolean
   | FieldDate
   | FieldFloat
   | FieldCurrency
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

export interface ModelConfig {
   label: string
   route: string
   settings: Settings
   fields: Fields
}
