import { useState } from "react";
import { useUnit } from "effector-react";
import { wishModel } from "@/entities/wish";
import { Button, Input, Modal, Select } from "@/shared/ui";
import { $currentWish, updateWish, updateWishModal } from "../model";
import { DeleteWishButton } from "../../delete-wish";

export const UpdateWishModal = () => {
  const currentWish = useUnit($currentWish);

  const [title, setTitle] = useState(currentWish?.title);
  const [priority, setPriority] = useState<wishModel.Priority>(
    currentWish?.priority || "normal"
  );

  const isOpen = useUnit(updateWishModal.$isOpen);
  const closeModal = useUnit(updateWishModal.closeModal);
  const updateWishFn = useUnit(updateWish);

  const sendFormData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!currentWish) return;
    if (!title || !priority) return;

    updateWishFn({
      id: currentWish.id,
      wish: {
        title,
        priority: priority as wishModel.Priority,
      },
    });
  };

  return (
    <Modal
      className="w-full max-w-lg"
      title="Edit wish"
      isOpen={isOpen}
      onClose={closeModal}
    >
      <form onSubmit={sendFormData} className="space-y-4">
        <div className="flex flex-col space-y-5">
          <Input
            placeholder="Title"
            name="wishTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="flex items-center space-x-4 relative">
            <div>Wish priority</div>

            <div className="relative">
              <Select
                defaultValue={priority}
                values={["normal", "high"]}
                onChange={(value) => setPriority(value as wishModel.Priority)}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="w-full flex justify-end space-x-3">
            <DeleteWishButton wish={currentWish!} />

            <Button type="submit">Save</Button>
          </div>
        </div>
      </form>
    </Modal>
  );
};
