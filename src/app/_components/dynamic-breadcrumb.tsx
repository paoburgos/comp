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
import React, { useCallback, useEffect, useState } from "react";

const DynamicBreadcrumb = () => {
  const [segments, setSegments] = useState<string[]>([]);
  const pathname = usePathname();

  const pathNameArray = (path: string): void => {
    const paths = path.split("/").filter((path) => path !== "");
    setSegments(paths);
  };

  const capitalize = (word: string) =>
    word.charAt(0).toUpperCase() + word.slice(1);

  useEffect(() => {
    pathNameArray(pathname);
  }, [pathname]);

  const multiplePaths = segments.map((link, i) => {
    const href = `/${segments.slice(0, i + 1).join("/")}`;
    return (
      <React.Fragment key={`${link}-${i}`}>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={href}>{capitalize(link)}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {segments.length !== i + 1 && <BreadcrumbSeparator key={link} />}
      </React.Fragment>
    );
  });

  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {segments.length == 1 ? (
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/${segments[0]}`}>
                {capitalize(segments[0] ?? "")}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        ) : (
          multiplePaths
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DynamicBreadcrumb;
