"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import ImageUpload from "../components/ImagesUploaded";
import Trending from "../components/Trending";

type Tool = {
  id: number;
  slug: string;
  name: string;
  category: string;
  rating: number;
  pricing: string;
  description: string;
  image: string;
  image_path: string;
  link: string;
  featured: boolean,
  trending: boolean,
};

export default function AdminPage() {
  const emptyForm = {
    slug: "",
    name: "",
    category: "",
    rating: "",
    pricing: "",
    description: "",
    image: "",
    image_path: "",
    link: "",
    featured: false,
    trending: false,
  };

  const [loading, setLoading] = useState(false);
  const [tools, setTools] = useState<Tool[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    async function init() {
      const allowed = await checkAdmin();

      if (allowed) {
        await loadTools();
      }
    }

    init();
  }, []);

  async function loadTools() {
    const { data, error } = await supabase
      .from("tools")
      .select("*")
      .order("id");

    if (!error && data) {
      setTools(data as Tool[]);
    }
  }
  async function checkAdmin() {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();


    
    if (userError || !user) {
      alert("Please sign in first.");
      window.location.href = "/";
      return false;
    }

    const { data: admin, error: adminError } = await supabase
     .from("admins")
     .select("email")
     .eq("email", user.email)
     .maybeSingle();

    console.log("Logged in user:", user);
    console.log("Admin:", admin);
    console.log("Admin Error:", adminError); 

    if (adminError || !admin) {
      alert("Access denied.");
      window.location.href = "/";
      return false;
    }
    
    return true;
  }

  async function saveTool(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    let error;

    if (editingId) {
      const result = await supabase
        .from("tools")
        .update({
          slug: form.slug,
          name: form.name,
          category: form.category,
          rating: Number(form.rating),
          pricing: form.pricing,
          description: form.description,
          image: form.image,
          image_path: form.image_path,
          link: form.link,
          featured: form.featured,
          trending: form.trending,
        })
        .eq("id", editingId);

      error = result.error;
    } else {
      const result = await supabase
        .from("tools")
        .insert({
          slug: form.slug,
          name: form.name,
          category: form.category,
          rating: Number(form.rating),
          pricing: form.pricing,
          description: form.description,
          image: form.image,
          image_path: form.image_path,
          link: form.link,
          featured: form.featured,
          trending: form.trending,
          pros: [],
          cons: [],
        });

      error = result.error;
    }

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert(editingId ? "Tool updated!" : "Tool added!");

    setEditingId(null);
    setForm(emptyForm);

    loadTools();
  }

  async function deleteTool(id: number) {
    if (!confirm("Delete this tool?")) return;

    const { error } = await supabase
      .from("tools")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    loadTools();
  }

  function editTool(tool: Tool) {
    setEditingId(tool.id);

    setForm({
      slug: tool.slug,
      name: tool.name,
      category: tool.category,
      rating: tool.rating.toString(),
      pricing: tool.pricing,
      description: tool.description,
      image: tool.image,
      image_path: tool.image_path ?? "",
      link: tool.link,
      featured: tool.featured,
      trending: tool.trending,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="mx-auto max-w-5xl">

        <h1 className="mb-8 text-4xl font-bold">
          Admin Dashboard
        </h1>

        <form onSubmit={saveTool} className="space-y-4">

          <ImageUpload
            value={form.image}
            onUpload={(publicUrl, path) =>
              setForm({
                ...form,
                image: publicUrl,
                image_path: path,
              })
            }
          />

          <input
            className="w-full rounded-lg border border-gray-700 bg-gray-900 p-3"
            placeholder="Tool Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            className="w-full rounded-lg border border-gray-700 bg-gray-900 p-3"
            placeholder="Slug"
            value={form.slug}
            onChange={(e) =>
              setForm({ ...form, slug: e.target.value })
            }
          />

          <input
            className="w-full rounded-lg border border-gray-700 bg-gray-900 p-3"
            placeholder="Category"
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
          />

          <input
            className="w-full rounded-lg border border-gray-700 bg-gray-900 p-3"
            placeholder="Rating"
            value={form.rating}
            onChange={(e) =>
              setForm({ ...form, rating: e.target.value })
            }
          />

          <input
            className="w-full rounded-lg border border-gray-700 bg-gray-900 p-3"
            placeholder="Pricing"
            value={form.pricing}
            onChange={(e) =>
              setForm({ ...form, pricing: e.target.value })
            }
          />

          <div className="flex gap-8">

            <label className="fles items-center gap-2">

              <input
               type="checkbox"
               checked={form.featured}
               onChange={(e) =>
                setForm({
                  ...form,
                  featured: e.target.checked,
                })
               }
             />
             Featured   
            </label>

            <label className="flex items-center gap-2">
              <input
               type="checkbox"
               checked={form.trending}
               onChange={(e) =>
                setForm({
                ...form,
                trending: e.target.checked,
                }) 
               }
              />
              Trending  
            </label>
          </div>

          <textarea
            rows={4}
            className="w-full rounded-lg border border-gray-700 bg-gray-900 p-3"
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
          />

          <input
            className="w-full rounded-lg border border-gray-700 bg-gray-900 p-3"
            placeholder="Official Website"
            value={form.link}
            onChange={(e) =>
              setForm({ ...form, link: e.target.value })
            }
          />

          <div className="flex gap-3">

            <button
              type="submit"
              disabled={loading}
              className="flex-1 rounded-lg bg-blue-600 py-3 font-bold hover:bg-blue-700"
            >
              {loading
                ? "Saving..."
                : editingId
                ? "Update Tool"
                : "Add Tool"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setForm(emptyForm);
                }}
                className="rounded-lg bg-gray-700 px-6"
              >
                Cancel
              </button>
            )}

          </div>

        </form>

        <div className="mt-12">

          <h2 className="mb-6 text-3xl font-bold">
            All AI Tools
          </h2>

          <div className="space-y-4">

            {tools.map((tool) => (
              <div
                key={tool.id}
                className="flex items-center justify-between rounded-xl border border-gray-700 bg-gray-900 p-5"
              >
                <div className="flex items-center gap-4">

                  {tool.image ? (
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="h-12 w-12 rounded-lg bg-white p-2 object-contain"
                    />
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-700">
                      📷
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold">
                      {tool.name}
                    </h3>

                    <p className="text-gray-400">
                      {tool.category}
                    </p>

                    <p>
                      ⭐ {tool.rating} • {tool.pricing}
                    </p>
                  </div>

                </div>

                <div className="flex gap-3">

                  <button
                    onClick={() => editTool(tool)}
                    className="rounded-lg bg-yellow-500 px-4 py-2 font-semibold text-black"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteTool(tool.id)}
                    className="rounded-lg bg-red-600 px-4 py-2 font-semibold"
                  >
                    Delete
                  </button>

                </div>

              </div>
            ))}

            {tools.length === 0 && (
              <div className="rounded-xl bg-gray-900 p-8 text-center text-gray-400">
                No AI tools found.
              </div>
            )}

          </div>

        </div>

      </div>
    </main>
  );
}