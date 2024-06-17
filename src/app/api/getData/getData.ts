import { ApiFailedError } from "@/app/lib/exceptions/exceptions";
import axios, { AxiosRequestConfig } from "axios";
import getBase64 from "../getBase64";

export default async function getData(): Promise<any> {
  try {
    const CONTENT_API_URL: any = process.env.API_BASE_ROUTE;

    const headers: AxiosRequestConfig["headers"] = {
      Accept: "application/json",
      Prefer: "code=200, dynamic=true",
    };

    const response = await axios.get(CONTENT_API_URL, { headers });

    const contentData = response.data.contentCards || [];

    const transformedData = await Promise.all(
      contentData.map(async (item: any) => {
        const base64 = await getBase64(item.imageUri);
        return {
          publishDate: item.metadata.publishDate,
          priority: item.metadata.priority,
          comments: item.comments || [],
          title: item.textData.title,
          subTitle: item.textData.subTitle,
          body: item.textData.body,
          author: item.textData.author || {},
          id: item.id,
          imageUri: item.imageUri,
          base64,
        };
      })
    );

    const sortedData = transformedData?.toSorted(
      (a: any, b: any) => b.priority - a.priority
    );
    return sortedData;
  } catch (error) {
    throw new ApiFailedError();
  }
}
