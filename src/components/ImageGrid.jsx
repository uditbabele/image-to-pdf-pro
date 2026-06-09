import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";

import ImageCard from "./ImageCard";

export default function ImageGrid({
  images,
  setImages,
  removeImage,
}) {
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(images);

    const [reordered] =
      items.splice(result.source.index, 1);

    items.splice(
      result.destination.index,
      0,
      reordered
    );

    setImages(items);
  };

  return (
    <DragDropContext
      onDragEnd={handleDragEnd}
    >
      <Droppable
        droppableId="images"
        direction="horizontal"
      >
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-4
            mt-8
            "
          >
            {images.map((image, index) => (
              <Draggable
                key={image.id}
                draggableId={image.id}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <ImageCard
                      image={image}
                      index={index}
                      removeImage={removeImage}
                    />
                  </div>
                )}
              </Draggable>
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
