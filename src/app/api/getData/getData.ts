import { ApiFailedError } from "@/app/lib/exceptions/exceptions";
import axios, { AxiosRequestConfig } from "axios";

export default async function getData(): Promise<any> {
  try {
    const CONTENT_API_URL: any = process.env.API_BASE_ROUTE;

    const headers: AxiosRequestConfig["headers"] = {
      Accept: "application/json",
      Prefer: "code=200, dynamic=true",
    };

    const response = await axios.get(CONTENT_API_URL, { headers });

    const contentData = response.data.contentCards || [];

    const transformedData = contentData?.map((item: any, idx: number) => {
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
      };
    });

    const sortedData = transformedData?.sort(
      (a: any, b: any) => b.priority - a.priority
    );
    return sortedData;
  } catch (error) {
    throw new ApiFailedError();
  }
}
