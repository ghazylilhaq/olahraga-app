"use server";

import { prisma } from "./db";
import { revalidatePath } from "next/cache";
import { activitySchema } from "./schema";
import { z } from "zod";

export async function createActivityLog(
  values: z.infer<typeof activitySchema>
) {
  const data = {
    olahraga: values.olahraga,
    waktu: values.waktu,
    catatan: values.catatan,
  };

  const activityLog = await prisma.activity.create({
    data: {
      olahraga: data.olahraga,
      waktu: data.waktu,
      catatan: data.catatan,
    },
  });

  revalidatePath("/");

  if (!activityLog) {
    return {
      message: "Olahraga log failed to add!",
    };
  }

  return {
    activityLog,
    message: "Olahraga log added successfully!",
  };
}

export async function readActivityLog() {
  const activityLogs = await prisma.activity.findMany();

  revalidatePath("/");

  if (!activityLogs) {
    return {
      message: "Olahraga nggak ada!",
    };
  }

  return {
    activityLogs,
    message: "Olahraga log added successfully!",
  };
}
