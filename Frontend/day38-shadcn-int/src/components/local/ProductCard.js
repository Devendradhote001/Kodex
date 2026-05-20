"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { use } from "react";

export default function ProductCard({ products }) {
  let pro = use(products);

  return (
    <div className="grid grid-cols-4 gap-4">
      {pro.map((elem) => {
        return (
          <Card key={elem.id} className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
              src={elem.image}
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover "
            />
            <CardHeader>
              <CardAction>
                <Badge variant="secondary">${elem.price}</Badge>
              </CardAction>
              <CardTitle>{elem.title}</CardTitle>
              <CardDescription>{elem.category}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full">Shop Now</Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
