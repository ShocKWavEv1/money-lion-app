import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import getData from "./getData";
import { ApiFailedError } from "@/app/lib/exceptions/exceptions";
import getBase64 from "../getBase64";

const mock = new MockAdapter(axios);

describe("getData function", () => {
  it("should fetch data from the API and return sorted content", async () => {
    const mockResponse = {
      contentCards: [
        {
          id: "3056c67c-7e07-95c7-9307-2460448558f0",
          imageUri: "https://picsum.photos/300/300",
          textData: {
            title: "in ad",
            author: { first: "Acbhdfk", last: "vjhdsf" },
            body: "Ut ametdolor in sint do exercitationconsectetur proident Ut enimirure sit et minim inqui sunt ullamcout dolor eu aute exercitationconsequat incididunt mollit labore autevoluptateut Excepteur occaecat eaExcepteur commodo tempor Ut autecillumproident adipisicing exoccaecatoccaecat eanostrud ea veniam eiusmod Excepteurnon Loremesse cupidatat in deseruntdolor quilaboris minim qui ipsum ametaliquip nostruddolor Duis irure sedadipisicing in labore Utdolor nulla Excepteur ullamconon minim commodo esse nostrud",
            subTitle: "veniam mollit",
          },
          comments: [
            {
              profilePic: "https://picsum.photos/300/300",
              author: "@Degdsjd",
              likes: 1239,
            },
            {
              profilePic: "https://picsum.photos/300/300",
              author: "@Degdsjd",
              likes: 1239,
            },
          ],
          metadata: { priority: 70, publishDate: "1917-05-07T14:17:48.0Z" },
        },
      ],
    };

    const transformedData = await Promise.all(
      mockResponse?.contentCards.map(async (item: any) => {
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

    mock.onGet(process.env.API_BASE_ROUTE).reply(200, mockResponse);

    const result = await getData();

    expect(result).toEqual(sortedData);
  });

  test("getData throws ApiFailedError on API error", async () => {
    mock
      .onGet(process.env.API_BASE_ROUTE)
      .reply(() => Promise.reject(new Error("API request failed")));

    try {
      await getData();
    } catch (error) {
      expect(error).toBeInstanceOf(ApiFailedError);
    }
  });
});
