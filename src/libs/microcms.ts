
// import { createClient, MicroCMSQueries } from "microcms-js-sdk";
import { createClient} from "microcms-js-sdk";
import pkg from 'microcms-js-sdk';
const { MicroCMSQueries }  = pkg;

const client = createClient({
    serviceDomain: import.meta.env.SERVICE_DOMAIN,
    apiKey: import.meta.env.API_KEY,
});
export const getBlogs = async (queries: MicroCMSQueries) => {
    return await client.get({ endpoint: "app", queries });
};

export const getBlogDetail = async (
    blogId: string,
    queries?: MicroCMSQueries
  ) => {
    return await client.getListDetail({
      endpoint: "app",
      contentId: blogId,
      queries,
    });
  };