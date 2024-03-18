"use client";

import { useState, useEffect } from "react";
import {
  Container,
  Box,
  Grid,
  GridItem,
  Card,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import client from "@/utils/contentful";
import Link from "next/link";
import { TypeBlogPostSkeleton } from "@/utils/contentful";
import { Entry } from "contentful";

export default function HomePage() {
  const [blogs, setBlogs] = useState<
    Entry<TypeBlogPostSkeleton, undefined, string>[]
  >([]);
  const getBlogs = async () => {
    const res = await client.getEntries<TypeBlogPostSkeleton>({
      content_type: "blogPost",
    });
    setBlogs(res?.items);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {blogs?.map((blog: Entry<TypeBlogPostSkeleton, undefined, string>) => (
          <GridItem
            key={blog.sys.id}
            sx={{
              height: "382px",
              width: "300px",
            }}
          >
            <Link href={`/article/${blog.fields.slug}`}>
              <Card
                sx={{
                  padding: "10px",
                }}
              >
                <Image
                  sx={{
                    width: "297px",
                    height: "179px",
                  }}
                  src={`https://${blog.fields?.image?.fields?.file?.url}`}
                />
                <Heading size="sm">{blog.fields.title}</Heading>
              </Card>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
