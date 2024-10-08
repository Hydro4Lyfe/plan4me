'use client'

import React, { Fragment } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Calendar } from './ui/calendar'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Popover, PopoverTrigger, PopoverContent } from './ui/popover'
import { Input } from "@/components/ui/input"
import { cn } from '@/lib/utils'
import api from '@/app/api/api'
import { Textarea } from './ui/textarea'

const formSchema = z.object({
    name: z.string().min(1).max(75),
    description: z.string().max(500),
    endDate: z.date(),
  })

const NewProject = () => {
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          endDate: new Date,
        }
      })

      async function onSubmit(values: z.infer<typeof formSchema>) {
        const res = await api.post('/api/projects', values).then( (res) => {
          return res.data
        })
        const id = res.project.id
        router.push('/projects/'+id)
      }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-md'>Project Name</FormLabel>
              <FormControl>
                <Input {...field} className='w-full' placeholder='Project Name' required/>
              </FormControl>
              <FormDescription>
                This is your project name
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-md'>Description</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Description" className="w-full resize-none" required />
              </FormControl>
              <FormDescription>
                This is your project description
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />
         <FormField
          control={form.control}
          name="endDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Completetion Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date() || date < new Date("1900-01-01")
                    }
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Pick the date you plan to have this project finished by
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='space-y-4' type="submit">Submit</Button>
      </form>
      </Form>
  )
}

export default NewProject
