import { string, z } from "zod";

export const activitySchema = z.object({
  nama: z.string().min(1, "Nama harus diisi"),
  olahraga: z
    .string({
      required_error: "Olahraga harus diisi",
    })
    .min(1, "Olahraga harus diisi"),
  waktu: z.coerce
    .number({
      required_error: "Waktu harus diisi",
      invalid_type_error: "Waktu harus diisi",
    })
    .gte(1, "Waktu harus diisi"),
  catatan: z
    .string({ required_error: "Catatan harus diisi" })
    .min(1, "Catatan harus diisi"),
});
