import { useEffect, useState } from "react";
import { createClient } from "contentful";
const client = createClient({
  space: "6obhd5wyf3ov",
  environment: "master",
  accessToken: "4m1S6GdbMvg1jx9KWNTIRJ5BUSqpLZemqcK6t3R5wiU",
});

export const useGetProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const fetchData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "portfolioProjects",
      });
      const projects = response.items.map((item) => {
        const { title, liveDemo, repoUrl, image, description } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, liveDemo, repoUrl, img, id, description };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { loading, projects };
};
