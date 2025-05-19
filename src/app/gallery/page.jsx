"use client";

import Image from "next/image";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

const photos = [
  { src: "/img/gallery/3.jpg", width: 800, height: 600 },
  { src: "/img/gallery/4.jpg", width: 800, height: 600 },
  { src: "/img/gallery/IMG_6907.jpg", width: 1200, height: 800 },
  { src: "/img/gallery/IMG_6933.jpg", width: 1200, height: 800 },
  { src: "/img/gallery/IMG_6960.jpg", width: 800, height: 600 },
  { src: "/img/gallery/IMG_6975.jpg", width: 1200, height: 800 },
  { src: "/img/gallery/IMG_6978.jpg", width: 1200, height: 800 },
  { src: "/img/gallery/IMG_6980.jpg", width: 800, height: 600 },
  { src: "/img/gallery/IMG_6967.jpg", width: 800, height: 600 },
  { src: "/img/gallery/IMG_7350.JPG", width: 1600, height: 1200 },
  { src: "/img/gallery/IMG_7360.JPG", width: 1600, height: 1200 },
];

function renderNextImage({ alt = "", title, sizes }, { photo, width, height }) {
  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        position: "relative",
        overflow: "hidden",
        borderRadius: "0.5rem",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <Image
        src={photo}
        alt={alt}
        title={title}
        fill
        sizes={sizes}
        style={{ objectFit: "cover" }}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </div>
  );
}

export default function PhotoGallery() {
  return (
    <div className="container py-2 max-w-6xl mx-auto px-4 py-8">
      <RowsPhotoAlbum
        photos={photos}
        render={{ image: renderNextImage }}
        defaultContainerWidth={1200}
        spacing={10}
        sizes={{
          size: "1168px",
          sizes: [
            { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
          ],
        }}
      />
    </div>
  );
}
