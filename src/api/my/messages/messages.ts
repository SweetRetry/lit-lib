import { ExResponse, request } from "@/api/request";

export const getNoticeMessageList = (params: {
  pageID: number;
  pageSize: number;
}): Promise<ExResponse> =>
  request.get("/notice/message/list", {
    params,
  });
