import { ReactNode } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import { Card } from "../Card";
import { Icon } from "../Icon";

interface ModalProps {
  children: ReactNode;
  className?: string;
  cardClassName?: string;
  title?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({
  children,
  className,
  title,
  isOpen,
  onClose,
}: ModalProps) => {
  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={onClose}>
      <DialogPrimitive.Portal >
        <DialogPrimitive.Overlay
          className={clsx("fixed inset-0 backdrop-blur-sm bg-gray-500/10 z-[100]")}
        />

        <DialogPrimitive.Content
          onClick={(e) => e.stopPropagation()}
          onOpenAutoFocus={(e) => e.preventDefault()}
          className={clsx(
            "fixed outline-none p-2 z-[100]",
            "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
            className
          )}
        >
          <Card className="p-5 sm:p-8">
            <div
              className={clsx(
                "flex",
                !title && "justify-end",
                title && "justify-between mb-7"
              )}
            >
              {title && (
                <DialogPrimitive.DialogTitle asChild>
                  <h3 className="text-2xl font-bold">{title}</h3>
                </DialogPrimitive.DialogTitle>
              )}

              <DialogPrimitive.Close
                asChild
                className={clsx(
                  "inline-flex items-start justify-center outline-none"
                )}
              >
                <div className="p-1 flex justify-center items-center hover:bg-slate-200 rounded-lg">
                  <Icon name="close" size="sm" />
                </div>
              </DialogPrimitive.Close>
            </div>

            {children}
          </Card>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
