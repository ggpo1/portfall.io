import React from "react";
import * as reactDom from "react-dom";
import { shared } from "shared";
import * as Markdown from "./image-collection.styles";
import * as Types from "./image-collection.types";

export const ImageCollection = React.memo<Types.Props>((props) => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const handleImageClick = React.useCallback((image: string | null) => (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setSelectedImage(image);
  }, []);

  return (
    <Markdown.Container>
      {props.images.map((image) => (
        <Markdown.Image src={image} alt="" onClick={handleImageClick(image)} />
      ))}
      {selectedImage && shared.consts.popupNode.current && (
        reactDom.createPortal(<Markdown.LargeImage src={selectedImage} alt="" onClick={handleImageClick(null)} />, shared.consts.popupNode.current)
      )}
    </Markdown.Container>
  );
});
