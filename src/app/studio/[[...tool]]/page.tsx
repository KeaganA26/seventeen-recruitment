import { projectId } from "@/sanity/env";
import Studio from "./Studio";

export const dynamic = "force-dynamic";

export default function StudioPage() {
  if (!projectId) {
    return (
      <main className="mx-auto max-w-xl px-6 py-24">
        <h1 className="font-heading text-3xl font-bold">Studio is not connected yet</h1>
        <p className="mt-4 leading-7 text-muted-foreground">
          Add NEXT_PUBLIC_SANITY_PROJECT_ID to publish live jobs. Until then, the
          website shows the sample education vacancies.
        </p>
      </main>
    );
  }

  return <Studio />;
}
