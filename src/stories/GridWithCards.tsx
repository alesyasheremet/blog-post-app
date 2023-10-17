// GridComponent.tsx

import React, { useState } from "react";
import BlogPostSubmitForm from "./BlogPostSubmitForm";
import { Button } from "./Button";
import { IBlogPost, IResponse } from "../services/BlogPostService";

interface PageGridProps {
  items: IBlogPost[];
}

const GridComponent: React.FC<PageGridProps> = ({ items }) => {
  const [postData, setPostData] = useState<PageGridProps>({
    items: [],
  });
  const saySomething = (something: any) => {
    console.log(something);
  };

  return (
    <div className="flex mb-4">
      <div className="w-1/2 bg-grey">
        <BlogPostSubmitForm onSubmit={saySomething} />
      </div>

      <div className="w-1/2 bg-white">
        <div className="flex mb-4">
          <div className="w-1/2 bg-white">
            {items.map((item: any) => (
              <div>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <img
                  src={"https://frontend-case-api.sbdev.nl/" + item.img_url}
                ></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridComponent;
