import { ScrollArea } from "@/components/ui/scroll-area";
import { readActivityLog } from "@/lib/action";
import React from "react";
import Feed from "./Feed";

type Props = {};

const Feeds = async (props: Props) => {
  const { activityLogs } = await readActivityLog();

  return (
    <ScrollArea className="h-screen rounded-md border ">
      {activityLogs?.map((activityLog, index) => (
        <Feed key={index} activityLog={activityLog} />
      ))}
    </ScrollArea>
  );
};

export default Feeds;
