"use client";

import { BookmarkIcon, HeartIcon } from "@/components/base/icon";
import { useState } from "react";

export interface IBlog {
  image: string;
  category: string;
  title: string;
  description: string;
  avatar: string;
  author: string;
  date: string;
  time: string;
}

export const Blog = (blog: IBlog) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="blog">
      <img className="blog__image" src={blog.image} alt="" />
      <div className="blog__body">
        <div className="blog__header">
          <p className="blog__category">{blog.category}</p>
          <h3 className="blog__title">{blog.title}</h3>
        </div>
        <p className="blog__description">{blog.description}</p>
        <div className="blog__footer">
          <div>
            <img className="blog__avatar" src={blog.avatar} alt="" />
            <div className="blog__stack">
              <p className="blog__author">{blog.author}</p>
              <p className="blog__metadata">
                {blog.date} - {blog.time}
              </p>
            </div>
          </div>
          <div>
            <button onClick={() => setLiked(!liked)} className="blog__button">
              <HeartIcon data-active={liked} />
            </button>
            <button onClick={() => setSaved(!saved)} className="blog__button">
              <BookmarkIcon data-active={saved} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
