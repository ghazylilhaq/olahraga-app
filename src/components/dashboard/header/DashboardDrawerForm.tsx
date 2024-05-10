"use client";

import { Button } from "@/components/ui/button";
import {
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  Drawer,
} from "@/components/ui/drawer";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { CirclePlus, Rabbit, Bird, Turtle } from "lucide-react";
import { Input } from "@/components/ui/input";
import React from "react";
import { createActivityLog } from "@/lib/action";
import { activitySchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type Props = {};

const DashboardDrawerForm = (props: Props) => {
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
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden ml-auto">
          <CirclePlus className="size-8" />
          <span className="sr-only">activity</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[95vh]">
        {/* <DrawerHeader>
          <DrawerTitle>Activity</DrawerTitle>
          <DrawerDescription>
            Configure the settings for the model and messages.
          </DrawerDescription>
        </DrawerHeader> */}
        <Form {...form}>
          <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
            <fieldset className="grid gap-6 rounded-lg border p-4">
              <legend className="-ml-1 px-1 text-sm font-medium">
                Activity
              </legend>
              <div className="grid gap-3">
                <FormField
                  control={form.control}
                  name="nama"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Lo!</FormLabel>

                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger
                            id="nama"
                            className="items-start [&_[data-description]]:hidden"
                          >
                            <SelectValue placeholder="select one" {...field} />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectItem value="Zalfa">
                            <div className="flex items-start gap-3 text-muted-foreground">
                              <Rabbit className="size-5" />
                              <div className="grid gap-0.5">
                                <p className="font-medium text-foreground">
                                  Zalfa
                                </p>
                              </div>
                            </div>
                          </SelectItem>
                          <SelectItem value="Adit">
                            <div className="flex items-start gap-3 text-muted-foreground">
                              <Bird className="size-5" />
                              <div className="grid gap-0.5">
                                <p className="font-medium text-foreground">
                                  {" "}
                                  Adit
                                </p>
                              </div>
                            </div>
                          </SelectItem>
                          <SelectItem value="Ghazy">
                            <div className="flex items-start gap-3 text-muted-foreground">
                              <Turtle className="size-5" />
                              <div className="grid gap-0.5">
                                <p className="font-medium text-foreground">
                                  Ghazy
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
                                <p className="font-medium text-foreground">
                                  Gym
                                </p>
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
      </DrawerContent>
    </Drawer>
  );
};

export default DashboardDrawerForm;
