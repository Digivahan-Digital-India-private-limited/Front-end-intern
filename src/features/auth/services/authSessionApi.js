import { requestWithFallback, unwrapObject } from "../../shared/api/requestWithFallback";
import { getProfile } from "../../profile/services/profileApi";
import { mockProfile } from "../../shared/mock/userSystemMockData";

export const getSessionUser = async () => {
  const response = await requestWithFallback(
    [() => getProfile()],
    () => mockProfile,
  );

  return unwrapObject(response) || mockProfile;
};
