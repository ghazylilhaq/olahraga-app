import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type Props = {
  activityLog: {
    olahraga: string;
    waktu: number;
    catatan: string;
    id: number;
    createdAt: Date;
    nama: string;
  };
};

const Feed = (props: Props) => {
  const { olahraga, waktu, catatan } = props.activityLog;

  return (
    <Alert className="my-8 mx-8 w-11/12">
      <AlertTitle>{props.activityLog.nama}</AlertTitle>
      <AlertDescription>
        <p>{olahraga} Menit</p>
        <p>{waktu} Menit</p>
        <p>{catatan}</p>
        <></>
      </AlertDescription>
    </Alert>
  );
};

export default Feed;
