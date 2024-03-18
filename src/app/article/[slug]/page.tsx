"use client";

import { useState, useEffect } from "react";
import client from "@/utils/contentful";
import { TypeBlogPostSkeleton } from "@/utils/contentful";
import { Entry } from "contentful";

export default function Article({ params }: { params: { slug: string } }) {
  const [article, setArticle] =
    useState<Entry<TypeBlogPostSkeleton, undefined, string>>();

  const getArticle = async () => {
    const res = await client.getEntries<TypeBlogPostSkeleton>({
      content_type: "blogPost",
      "fields.slug": params.slug,
    });
    setArticle(res?.items[0]);
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <div>
      <div>{article?.fields.slug}</div>
      <div>{article?.fields.title}</div>
    </div>
  );
}
