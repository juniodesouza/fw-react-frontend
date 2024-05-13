import { FormControl } from '@/components/ui/form'
import {
   Command,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList,
} from '@/components/ui/command'
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from '@/components/ui/popover'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'
import { ControllerRenderProps } from 'react-hook-form'
import { Field } from '../../types'
import { cn } from '@/lib/utils'
import { Button } from '@/components/custom/button'

interface FwInputAutoComplete {
   id: string
   field: Field
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const FwInputAutoComplete = ({ id, field, props }: FwInputAutoComplete) => {
   const languages = [
      { label: id, value: field.label },
      { label: 'English', value: 'en' },
      { label: 'French', value: 'fr' },
      { label: 'German', value: 'de' },
      { label: 'Spanish', value: 'es' },
      { label: 'Portuguese', value: 'pt' },
      { label: 'Russian', value: 'ru' },
      { label: 'Japanese', value: 'ja' },
      { label: 'Korean', value: 'ko' },
      { label: 'Chinese', value: 'zh' },
   ] as const

   return (
      <Popover>
         <PopoverTrigger asChild>
            <FormControl>
               <Button
                  id={id}
                  variant="outline"
                  role="combobox"
                  className={cn(
                     'w-[200px] justify-between',
                     !props.value && 'text-muted-foreground'
                  )}
               >
                  {props.value
                     ? languages.find(
                          (language) => language.value === props.value
                       )?.label
                     : 'Select language'}
                  <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
               </Button>
            </FormControl>
         </PopoverTrigger>
         <PopoverContent className="w-[200px] p-0">
            <Command>
               <CommandInput
                  placeholder="Search framework..."
                  className="h-9"
               />
               <CommandEmpty>No framework found.</CommandEmpty>
               <CommandList>
                  <CommandGroup>
                     {languages.map((language) => (
                        <CommandItem
                           value={language.label}
                           key={language.value}
                           onSelect={() => {
                              // form.setValue('language', language.value)
                           }}
                        >
                           {language.label}
                           <CheckIcon
                              className={cn(
                                 'ml-auto h-4 w-4',
                                 language.value === props.value
                                    ? 'opacity-100'
                                    : 'opacity-0'
                              )}
                           />
                        </CommandItem>
                     ))}
                  </CommandGroup>
               </CommandList>
            </Command>
         </PopoverContent>
      </Popover>
   )
}

FwInputAutoComplete.displayName = 'FwInputAutoComplete'

export { FwInputAutoComplete }
