import axios, { AxiosRequestConfig } from "axios";

export default async function getData(): Promise<any> {
  try {
    const CONTENT_API_URL: any = process.env.API_BASE_ROUTE;

    const headers: AxiosRequestConfig["headers"] = {
      Accept: "application/json",
      Prefer: "code=200, dynamic=true",
    };

    const response = await axios.get(CONTENT_API_URL, { headers });

    const contentData = response.data.contentCards;

    const sortedData = contentData.sort(
      (a: any, b: any) => b.priority - a.priority
    );

    return sortedData;
  } catch (error) {
    throw new Error("Failed to fetch content");
  }
}
