"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Blog = {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
};

export default function BlogAdminPage() {

  const [blogs, setBlogs] = useState<Blog[]>([]);

  const [form, setForm] = useState({
    slug: "",
    title: "",
    description: "",
    content: "",
    image: "",
  });


  async function loadBlogs() {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order("id", { ascending: false });

    console.log(data, error);  

    setBlogs(data || []);
  }


  useEffect(() => {
    loadBlogs();
  }, []);


  async function addBlog() {

    const { data, error } = await supabase
      .from("blogs")
      .insert(form)
      .select();

    if (error) {
        console.log("Insert Error:", error);
        alert(error.message);
        return;
    } 
    
    console.log("Added:", data);
    alert("Blog Added Successfully!");

    setForm({
      slug:"",
      title:"",
      description:"",
      content:"",
      image:"",
    });

    loadBlogs();
  }


  async function deleteBlog(id:number){

    await supabase
      .from("blogs")
      .delete()
      .eq("id",id);

    loadBlogs();
  }


  return (
    <main className="min-h-screen bg-black text-white p-8">

      <h1 className="text-3xl font-bold mb-8">
        Blog Admin Dashboard
      </h1>


      <div className="max-w-xl space-y-4">

        <input
          placeholder="Slug"
          className="w-full p-3 text-black"
          value={form.slug}
          onChange={(e)=>setForm({...form,slug:e.target.value})}
        />


        <input
          placeholder="Title"
          className="w-full p-3 text-black"
          value={form.title}
          onChange={(e)=>setForm({...form,title:e.target.value})}
        />

        <input 
          placeholder="Image URL"
          className="w-full p-3 text-black"
          value={form.image}
          onChange={(e)=>
            setForm({
                ...form,
                title:e.target.value
            })
        }
        />
    
        


        <textarea
          placeholder="Description"
          className="w-full p-3 text-black"
          value={form.description}
          onChange={(e)=>setForm({...form,description:e.target.value})}
        />


        <textarea
          placeholder="Content"
          className="w-full p-3 text-black"
          value={form.content}
          onChange={(e)=>setForm({...form,content:e.target.value})}
        />


        <button
          onClick={addBlog}
          className="bg-blue-600 px-6 py-3 rounded"
        >
          Add Blog
        </button>

      </div>


      <div className="mt-12">

        <h2 className="text-2xl mb-5">
          Existing Blogs
        </h2>


        {blogs.map((blog)=>(

          <div
            key={blog.id}
            className="border border-gray-700 p-5 mb-4 rounded"
          >

            <h3 className="text-xl font-bold">
              {blog.title}
            </h3>

            <p className="text-gray-400">
              {blog.slug}
            </p>


            <button
              onClick={()=>deleteBlog(blog.id)}
              className="mt-3 bg-red-600 px-4 py-2 rounded"
            >
              Delete
            </button>

          </div>

        ))}

      </div>


    </main>
  );
}