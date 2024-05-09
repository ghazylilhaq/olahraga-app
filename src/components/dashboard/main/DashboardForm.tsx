"use client";

import { Bird, Rabbit, Turtle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { activitySchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { create } from "domain";
import { createActivityLog } from "@/lib/action";

export default function Component() {
  const form = useForm<z.infer<typeof activitySchema>>({
    resolver: zodResolver(activitySchema),
    defaultValues: {
      olahraga: "",
      waktu: 0,
      catatan: "",
    },
  });

  function onSubmit(values: z.infer<typeof activitySchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    createActivityLog(values);
    form.reset();
  }

  return (
    <div className="relative hidden flex-col items-start gap-8 md:flex">
      <Form {...form}>
        <form
          className="grid w-full items-start gap-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">Activity</legend>
            <div className="grid gap-3">
              <FormField
                control={form.control}
                name="olahraga"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Olahraga</FormLabel>

                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger
                          id="olahraga"
                          className="items-start [&_[data-description]]:hidden"
                        >
                          <SelectValue placeholder="select one" {...field} />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        <SelectItem value="Gym">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <Rabbit className="size-5" />
                            <div className="grid gap-0.5">
                              <p className="font-medium text-foreground">Gym</p>
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="Lari">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <Bird className="size-5" />
                            <div className="grid gap-0.5">
                              <p className="font-medium text-foreground">
                                {" "}
                                Lari
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="Main">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <Turtle className="size-5" />
                            <div className="grid gap-0.5">
                              <p className="font-medium text-foreground">
                                Main
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>Abis ngapain tadi??</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="waktu"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Waktu</FormLabel>
                    <FormControl>
                      <Input placeholder="5" type="number" {...field} />
                    </FormControl>
                    <FormDescription>
                      Berapa menit tadi olahraganya?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="catatan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Catatan</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tadi gua lari 5 km" {...field} />
                    </FormControl>
                    <FormDescription>
                      Kasih tau dong lengkapnya gimana tadi olahraganya
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Submit</Button>
          </fieldset>
        </form>
      </Form>
    </div>
  );
}
