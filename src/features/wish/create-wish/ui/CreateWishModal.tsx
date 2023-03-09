import { useState } from "react";
import { useUnit } from "effector-react";
import { wishModel } from "@/entities/wish";
import { Button, Input, Modal, Select } from "@/shared/ui";
import { createWish, createWishModal } from "../model";

export const CreateWishModal = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<wishModel.Priority>("normal");

  const isOpen = useUnit(createWishModal.$isOpen);
  const closeModal = useUnit(createWishModal.closeModal);
  const createWishFn = useUnit(createWish);

  const sendFormData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !priority) return;

    createWishFn({
      title,
      priority: priority as wishModel.Priority,
    });
  };

  return (
    <Modal
      className="w-full max-w-lg"
      title="Add wish"
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

          <div className="flex items-center space-x-2 relative">
            <div>Wish priority</div>

            <div className="relative">
              <Select
                values={["normal", "high"]}
                onChange={(value) => setPriority(value as wishModel.Priority)}
              />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-end space-x-3">
          <Button type="button" onClick={closeModal}>
            Cancel
          </Button>
          <Button
            className=" bg-transparent hover:bg-blue-400/30 !text-black"
            type="submit"
          >
            Add
          </Button>
        </div>
      </form>
    </Modal>
  );
};
