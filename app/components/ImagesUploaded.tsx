"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

type ImageUploadProps = {
  value: string;
  onUpload: (publicUrl: string, path: string) => void;
};

export default function ImageUpload({
  value,
  onUpload,
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);

  async function uploadImage(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    setUploading(true);

    const fileName = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("tool-images")
      .upload(fileName, file);

    if (error) {
      alert(error.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage
      .from("tool-images")
      .getPublicUrl(fileName);

    onUpload(data.publicUrl, fileName);

    setUploading(false);
  }

  return (
    <div className="space-y-4">

      {value && (
        <img
          src={value}
          alt="Preview"
          className="h-24 w-24 rounded-lg border border-gray-700 object-contain bg-white p-2"
        />
      )}

      <input
        type="file"
        accept="image/*"
        onChange={uploadImage}
        className="block w-full rounded-lg border border-gray-700 bg-gray-900 p-3"
      />

      {uploading && (
        <p className="text-blue-400">
          Uploading image...
        </p>
      )}

    </div>
  );
}