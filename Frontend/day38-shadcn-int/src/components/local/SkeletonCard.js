import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Skeleton from "../ui/skeleton";

export default function SkeletonCard() {
  return (
    <div className="grid grid-cols-4 gap5">
      {[1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1].map((elem) => {
        return (
          <Card className="w-full max-w-xs">
            <CardHeader>
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="aspect-video w-full" />
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
