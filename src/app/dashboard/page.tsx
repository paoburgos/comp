import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";

export default function Page() {
  return (
    <div>
      Dashbord page
      <Button asChild>
        <Link href="/dashboard/queues">Queues</Link>
      </Button>
    </div>
  );
}
