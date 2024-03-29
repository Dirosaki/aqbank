import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu'
import { ComponentPropsWithoutRef, ElementRef, HTMLAttributes, forwardRef } from 'react'

import { cn } from '@/utils/cn'

import { Icon } from './Icon'

const Dropdown = DropdownPrimitive.Root

const DropdownTrigger = DropdownPrimitive.Trigger

const DropdownGroup = DropdownPrimitive.Group

const DropdownPortal = DropdownPrimitive.Portal

const DropdownSub = DropdownPrimitive.Sub

const DropdownRadioGroup = DropdownPrimitive.RadioGroup

const DropdownSubTrigger = forwardRef<
  ElementRef<typeof DropdownPrimitive.SubTrigger>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-zinc-100 data-[state=open]:bg-zinc-100',
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <Icon name="arrow-right" className="ml-auto size-4" />
  </DropdownPrimitive.SubTrigger>
))
DropdownSubTrigger.displayName = DropdownPrimitive.SubTrigger.displayName

const DropdownSubContent = forwardRef<
  ElementRef<typeof DropdownPrimitive.SubContent>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.SubContent
    ref={ref}
    className={cn(
      'z-50 min-w-[8rem] overflow-hidden rounded-md border border-zinc-200 bg-white p-1 text-zinc-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
))
DropdownSubContent.displayName = DropdownPrimitive.SubContent.displayName

const DropdownContent = forwardRef<
  ElementRef<typeof DropdownPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownPrimitive.Portal>
    <DropdownPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border border-zinc-200 bg-white p-1 text-zinc-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  </DropdownPrimitive.Portal>
))
DropdownContent.displayName = DropdownPrimitive.Content.displayName

const DropdownItem = forwardRef<
  ElementRef<typeof DropdownPrimitive.Item>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
))
DropdownItem.displayName = DropdownPrimitive.Item.displayName

const DropdownCheckboxItem = forwardRef<
  ElementRef<typeof DropdownPrimitive.CheckboxItem>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex size-3.5 items-center justify-center">
      <DropdownPrimitive.ItemIndicator>
        <Icon name="check" className="size-4" />
      </DropdownPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownPrimitive.CheckboxItem>
))
DropdownCheckboxItem.displayName = DropdownPrimitive.CheckboxItem.displayName

const DropdownRadioItem = forwardRef<
  ElementRef<typeof DropdownPrimitive.RadioItem>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownPrimitive.RadioItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex size-3.5 items-center justify-center">
      <DropdownPrimitive.ItemIndicator>
        <Icon name="check" className="size-2 fill-current" />
      </DropdownPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownPrimitive.RadioItem>
))
DropdownRadioItem.displayName = DropdownPrimitive.RadioItem.displayName

const DropdownLabel = forwardRef<
  ElementRef<typeof DropdownPrimitive.Label>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownPrimitive.Label
    ref={ref}
    className={cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
    {...props}
  />
))
DropdownLabel.displayName = DropdownPrimitive.Label.displayName

const DropdownSeparator = forwardRef<
  ElementRef<typeof DropdownPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-zinc-100', className)}
    {...props}
  />
))
DropdownSeparator.displayName = DropdownPrimitive.Separator.displayName

function DropdownShortcut({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn('ml-auto text-xs tracking-widest opacity-60', className)} {...props} />
}
DropdownShortcut.displayName = 'DropdownShortcut'

export {
  Dropdown,
  DropdownCheckboxItem,
  DropdownContent,
  DropdownGroup,
  DropdownItem,
  DropdownLabel,
  DropdownPortal,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownSeparator,
  DropdownShortcut,
  DropdownSub,
  DropdownSubContent,
  DropdownSubTrigger,
  DropdownTrigger,
}
