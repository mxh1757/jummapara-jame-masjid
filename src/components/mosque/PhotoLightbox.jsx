import React, { useState } from "react";
import { Image } from "@/components/ui/image";
import { Maximize2 } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

/**
 * Clickable photo with a full-size detail view (image + caption).
 * Used by the galleries so every picture can be opened on demand.
 */
export default function PhotoLightbox({ src, caption, imageClassName, detailAspect = "aspect-[16/9]", viewLabel }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={caption || viewLabel}
        className="group relative block w-full overflow-hidden rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
      >
        <Image
          src={src}
          alt={caption || ""}
          fittingType="fill"
          className={`${imageClassName} transition-transform duration-700 group-hover:scale-105`}
        />
        <span className="pointer-events-none absolute inset-0 transition-colors bg-foreground/0 group-hover:bg-foreground/25" />
        <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-foreground/75 px-3 py-1.5 text-xs font-medium text-background opacity-0 transition-opacity group-hover:opacity-100">
          <Maximize2 className="w-3.5 h-3.5" /> {viewLabel}
        </span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[92vw] max-w-4xl overflow-hidden p-0">
          <DialogTitle className="sr-only">{caption}</DialogTitle>
          <Image
            src={src}
            alt={caption || ""}
            fittingType="fit"
            className={`max-h-[68vh] w-full bg-secondary object-contain ${detailAspect}`}
          />
          {caption && (
            <p className="px-5 py-4 text-sm italic leading-relaxed text-muted-foreground">{caption}</p>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}