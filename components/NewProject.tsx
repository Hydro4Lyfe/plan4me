
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { date, nullable, z } from "zod"
import { zfd, } from 'zod-form-data'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'

import axios from 'axios'


import DatePicker from "@/components/DatePicker"
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
import { getServerSession } from 'next-auth'
import { cn } from '@/lib/utils'
import api from '@/app/api/api'
import { redirect, useRouter } from 'next/navigation'
import { Router } from 'next/router'

const formSchema = z.object({
    ownerId: z.string(),
    name: z.string().min(1).max(50),
    description: z.string().min(0).max(250),
    endDate: z.date(),
  })

const NewProject = () => {
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          ownerId: "clz6380vx0000hbh0oqdtozg2",
          name: "project-1",
          description: "description",
          endDate: null,
        },
      })
    
      async function onSubmit(values: z.infer<typeof formSchema>) {
        const res = await api.post('/api/newproject', values).then(res => redirect('http://localhost:3000')).catch(err => console.warn(err))
        redirect("http://localhost:/projects")
      }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Name</FormLabel>
              <FormControl>
                <Input className='w-[500px]' placeholder="shadcn" {...field} required/>
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
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Description" {...field} className="w-[750px]" required/>
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
                    selected={`${field.value}`}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
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
        <FormField
          control={form.control}
          name="ownerId"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="hidden" placeholder="clz6380vx0000hbh0oqdtozg2" {...field} required/>
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
      </Form>
  )
}

export default NewProject
