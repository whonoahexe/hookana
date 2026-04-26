"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowRight, DollarSign, Globe } from "lucide-react"
import { FormField } from "./form-field"
import { INDUSTRY_OPTIONS, MONTHLY_SPEND_OPTIONS } from "./diagnostic-data"

type Props = {
  brandName: string
  industry: string
  monthlyAdSpend: string
  showError: boolean
  onBrandNameChange: (value: string) => void
  onIndustryChange: (value: string) => void
  onMonthlyAdSpendChange: (value: string) => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export function DiagnosticIntro({
  brandName,
  industry,
  monthlyAdSpend,
  showError,
  onBrandNameChange,
  onIndustryChange,
  onMonthlyAdSpendChange,
  onSubmit,
}: Props) {
  return (
    <form onSubmit={onSubmit} className="flex h-full flex-col gap-12">
      <FormField
        label="Brand name *"
        help="We use this to personalize your results. Your score means more when it's named."
      >
        <div className="flex h-9 w-80 items-center gap-2 rounded-md border border-neutral-950 bg-popover px-3 shadow-xs">
          <Globe className="size-4 shrink-0 text-primary-foreground/70" />
          <Input
            value={brandName}
            onChange={(e) => onBrandNameChange(e.target.value)}
            className="h-auto flex-1 rounded-none border-none bg-transparent px-0 py-0 text-sm text-primary-foreground shadow-none placeholder:text-primary-foreground/60 focus-visible:border-none focus-visible:ring-0"
            placeholder="e.g Glowup Skincare"
          />
        </div>
      </FormField>

      <FormField
        label="Industry *"
        help="Creative benchmarks differ by vertical. A skincare brand and a fitness brand have very different hook standards."
      >
        <Select value={industry || undefined} onValueChange={onIndustryChange}>
          <SelectTrigger className="h-9 w-80 rounded-md border-neutral-950 bg-popover text-primary-foreground shadow-xs data-placeholder:text-primary-foreground/60 [&_svg]:text-primary-foreground!">
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {INDUSTRY_OPTIONS.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </FormField>

      <FormField
        label="Monthly ad spend"
        help={`Helps us calibrate expectations. What counts as "low volume" at $5K looks very different at $500K.`}
      >
        <Select
          value={monthlyAdSpend || undefined}
          onValueChange={onMonthlyAdSpendChange}
        >
          <SelectTrigger className="h-9 w-80 rounded-md border-neutral-950 bg-popover text-primary-foreground shadow-xs data-placeholder:text-primary-foreground/60 [&_svg]:text-primary-foreground!">
            <DollarSign className="size-4 shrink-0" />
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {MONTHLY_SPEND_OPTIONS.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </FormField>

      <div className="mt-auto flex w-80 flex-col gap-3">
        <Button
          type="submit"
          variant="destructive"
          className="rounded-md px-6"
        >
          Start Creative Health Check
          <ArrowRight className="size-4" />
        </Button>
        {showError && (
          <p className="font-mono text-xs leading-3.5 text-destructive">
            Please enter your brand name and industry to continue.
          </p>
        )}
      </div>
    </form>
  )
}
