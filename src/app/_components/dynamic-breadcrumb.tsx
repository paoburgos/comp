"use client";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const DynamicBreadcrumb = () => {
  const [segments, setSegments] = useState<string[]>([]);
  const pathname = usePathname();

  const pathNameArray = (path: string): void => {
    const paths = path.split("/").filter((path) => path !== "");
    setSegments(paths);
  };

  useEffect(() => {
    pathNameArray(pathname);
  }, [pathname]);

  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {segments.map((segment) => (
          <BreadcrumbItem key={segment}>
            <BreadcrumbLink asChild>
              <Link href={pathname}>{segment}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          // <BreadcrumbSeparator />
        ))}

        {/* <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="#">Products</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Edit Product</BreadcrumbPage>
        </BreadcrumbItem> */}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DynamicBreadcrumb;
